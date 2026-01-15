import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Server-side whitelist of valid price IDs
// This prevents clients from submitting arbitrary Stripe price IDs
const VALID_PRICES: Record<string, { priceId: string; productName: string }> = {
  "seo-blog-posts": {
    priceId: "price_1Soyp6GzDNqJj8E5h8aUfLKz",
    productName: "10 SEO-Optimized Blog Posts"
  },
  "technical-seo": {
    priceId: "price_1SoyplGzDNqJj8E5KClYHyga",
    productName: "Technical SEO Quick-Fix Package"
  },
  "google-business-profile": {
    priceId: "price_1SoypqGzDNqJj8E5Wezfrp5O",
    productName: "Google Business Profile Optimization"
  },
  "keyword-research": {
    priceId: "price_1SoyprGzDNqJj8E5Ly19McMj",
    productName: "Keyword Research and Roadmap"
  },
  "competitor-analysis": {
    priceId: "price_1SoyptGzDNqJj8E54cCHqzlO",
    productName: "Competitor Keyword Analysis"
  },
  "white-hat-backlinks": {
    priceId: "price_1SoypvGzDNqJj8E5YPvR3DT8",
    productName: "10 White-Hat Backlinks"
  },
  "local-citations": {
    priceId: "price_1SoypwGzDNqJj8E5XTqKboZW",
    productName: "50 Local Citations"
  },
  "review-management": {
    priceId: "price_1SoypyGzDNqJj8E5cVMrfO8x",
    productName: "Review Response Management"
  },
  "schema-markup": {
    priceId: "price_1SoypzGzDNqJj8E5H708ntUB",
    productName: "Schema Markup Implementation"
  },
  "ranking-reports": {
    priceId: "price_1Soyq0GzDNqJj8E5ufi2msFt",
    productName: "Monthly Ranking Reports"
  }
};

// Get all valid price IDs as a set for quick lookup
const VALID_PRICE_IDS = new Set(Object.values(VALID_PRICES).map(p => p.priceId));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { priceId, productSlug, productName, email } = await req.json();
    
    let resolvedPriceId: string;
    let resolvedProductName: string;

    // Option 1: Client passes a product slug (preferred - more secure)
    if (productSlug && VALID_PRICES[productSlug]) {
      resolvedPriceId = VALID_PRICES[productSlug].priceId;
      resolvedProductName = VALID_PRICES[productSlug].productName;
    }
    // Option 2: Client passes a priceId directly (validate against whitelist)
    else if (priceId && VALID_PRICE_IDS.has(priceId)) {
      resolvedPriceId = priceId;
      // Find the product name from the whitelist
      const product = Object.values(VALID_PRICES).find(p => p.priceId === priceId);
      resolvedProductName = product?.productName || productName || 'SEO Service';
    }
    else {
      console.error("Invalid price request:", { priceId, productSlug });
      return new Response(JSON.stringify({ 
        error: "Invalid product selection. Please try again.",
        code: "INVALID_PRODUCT"
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ 
        error: "Invalid email format.",
        code: "INVALID_EMAIL"
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer exists
    let customerId;
    if (email) {
      const customers = await stripe.customers.list({ email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      }
    }

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?product=${encodeURIComponent(resolvedProductName)}`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
      metadata: {
        product_name: resolvedProductName,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Log detailed error server-side for debugging
    console.error("Payment error:", error instanceof Error ? error.message : error);
    
    // Return generic error message to client to avoid information leakage
    return new Response(JSON.stringify({ 
      error: "Payment processing failed. Please try again or contact support.",
      code: "PAYMENT_ERROR"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
