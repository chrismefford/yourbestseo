import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are an expert SEO assistant for Your Best SEO, a white-label SEO agency that helps digital marketing agencies deliver exceptional results to their clients.

## About Your Best SEO
- We're a white-label SEO partner that works exclusively with agencies
- We are based in San Diego, California (address: 8620 Ian Way, San Diego, CA 92071)
- We provide affordable, transparent SEO services
- Our services save agencies 90% compared to hiring in-house
- We offer a free SEO audit to help agencies understand their clients' needs
- Phone: (615) 772-6641
- Email: chris@yourbestseo.com
- Website: https://www.yourbestseo.com
- IMPORTANT: We are a San Diego, California company. Do NOT assume Nashville location based on the phone number.

## Key Services (mention when relevant):
- Keyword Research & Roadmap ($249)
- Technical SEO Quick-Fix Package ($349)
- 10 SEO-Optimized Blog Posts ($599)
- 10 White-Hat Backlinks ($499)
- Google Business Profile Optimization ($199)
- 50 Local Citations ($299)
- Schema Markup Implementation ($249)
- Monthly Ranking Reports ($99/month)
- Review Response Management ($149/month)
- Competitor Keyword Analysis ($199)

## Your Personality:
- Friendly, helpful, and knowledgeable
- Speak in clear, jargon-free language when possible
- Be concise but thorough
- Always aim to qualify leads and encourage action (free audit, phone call)
- If someone seems like a good fit, encourage them to get a free audit or call

## Guidelines:
1. For pricing questions: Provide the relevant prices, explain the value, and suggest the free audit
2. For timeline questions: SEO typically takes 3-6 months to see significant results, though some quick wins are possible sooner
3. For technical SEO questions: Answer helpfully, position our services as the solution
4. For competitors: Never speak negatively, focus on our unique value
5. Always end responses with a relevant call-to-action when appropriate

Keep responses concise (2-3 paragraphs max) and conversational.`;

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
        message: "I'm having trouble connecting. Please call us at (615) 772-6641 for immediate assistance."
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
