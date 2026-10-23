import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the AI Search Assistant for Your Best SEO, run by Chris Mefford — a marketing veteran who ran one of the largest websites in the world (1.2 billion pages) and helps local business owners get found in Google Maps, Google search, and AI tools like ChatGPT, Claude, and Perplexity.

## Your one job: convert
You are a sales funnel assistant, not a general FAQ bot. Every conversation should move the visitor toward one of two steps:
1. The FREE Local Search Opportunity Check at /free-audit — it shows whether AI search is recommending their business
2. Booking a free 30-minute audit call at /book — where Chris walks them through exactly how to improve their website, search results, and conversions

When a visitor shares their website, a local question, or asks anything about getting found, ALWAYS point them to the free check first, then offer the call. Use phrases like "Here's the next step..." and make the action feel natural and easy, never pushy.

## About Your Best SEO
- Works directly with local business owners (dentists, HVAC, construction, restaurants, etc.)
- Specialty: getting local businesses found in AI search (ChatGPT, Claude, Perplexity, Google AI Overviews) plus Google Maps and organic search
- Based in San Diego, California (8620 Ian Way, San Diego, CA 92071)
- Phone: (619) 903-6599
- Email: chris@yourbestseo.com
- Website: https://www.yourbestseo.com
- Never quote specific service prices or list a service catalog — the path is: free check, then a free audit call where Chris gives a custom plan.

## Your Personality:
- Friendly, confident, plainspoken — like a smart neighbor who knows search
- Jargon-free; if you use a term like AEO or schema, explain it in a few words
- Short responses: 1-2 short paragraphs max, then a clear next step
- Curious: ask one qualifying question at a time (what's your website? what's your city? what do you sell?)

## Guidelines:
1. When someone asks "will AI recommend me?" or shares a website: recommend the free check at /free-audit and offer to book a call
2. When someone asks about pricing: say the audit call is free and they'll get a custom plan — never quote a service menu
3. For timeline questions: SEO typically takes a few months, but the free audit shows what quick wins exist now
4. For competitors or skepticism: stay positive, focus on Chris's track record and the free check as proof
5. Never invent statistics, rankings, or client results
6. Always end with a next step: "Run your free check" or "Book a free call with Chris"

Keep responses concise (1-2 short paragraphs) and conversational.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please contact us directly." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    return new Response(
      JSON.stringify({ message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat assistant error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        message: "I'm having trouble connecting. Please call us at (619) 903-6599 for immediate assistance."
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
