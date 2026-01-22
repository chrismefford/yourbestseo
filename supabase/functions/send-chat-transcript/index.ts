import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface TranscriptRequest {
  email: string;
  messages: Message[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, messages }: TranscriptRequest = await req.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate messages
    if (!messages || messages.length < 2) {
      return new Response(
        JSON.stringify({ error: "No conversation to send" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format the conversation for email
    const conversationHtml = messages
      .map((msg) => {
        const isUser = msg.role === "user";
        const bgColor = isUser ? "#4F46E5" : "#F3F4F6";
        const textColor = isUser ? "#FFFFFF" : "#1F2937";
        const align = isUser ? "right" : "left";
        const label = isUser ? "You" : "SEO Assistant";

        return `
          <div style="margin-bottom: 16px; text-align: ${align};">
            <div style="display: inline-block; max-width: 80%; text-align: left;">
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #6B7280;">${label}</p>
              <div style="background-color: ${bgColor}; color: ${textColor}; padding: 12px 16px; border-radius: 12px;">
                ${msg.content.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFFFFF;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1F2937; font-size: 24px; margin: 0;">Your SEO Conversation</h1>
            <p style="color: #6B7280; margin: 8px 0 0 0;">From Your Best SEO</p>
          </div>
          
          <div style="background-color: #F9FAFB; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            ${conversationHtml}
          </div>
          
          <div style="text-align: center; padding: 24px; background-color: #FEF3C7; border-radius: 12px; margin-bottom: 24px;">
            <h2 style="color: #92400E; font-size: 18px; margin: 0 0 12px 0;">Ready for the next step?</h2>
            <p style="color: #92400E; margin: 0 0 16px 0; font-size: 14px;">Get a free, personalized SEO audit for your website.</p>
            <a href="https://www.yourbestseo.com/free-audit" style="display: inline-block; background-color: #1F2937; color: #FFFFFF; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              Get My Free Audit →
            </a>
          </div>
          
          <div style="text-align: center; color: #9CA3AF; font-size: 12px;">
            <p>Your Best SEO | San Diego, CA</p>
            <p>
              <a href="tel:+16157726641" style="color: #6B7280;">(615) 772-6641</a> | 
              <a href="mailto:chris@yourbestseo.com" style="color: #6B7280;">chris@yourbestseo.com</a>
            </p>
            <p><a href="https://www.yourbestseo.com" style="color: #6B7280;">www.yourbestseo.com</a></p>
          </div>
        </body>
      </html>
    `;

    // Send the email
    const emailResponse = await resend.emails.send({
      from: "Your Best SEO <contact@yourbestseo.com>",
      to: [email],
      subject: "Your SEO Conversation Summary",
      html: emailHtml,
    });

    console.log("Transcript email sent successfully:", emailResponse);

    // Also send a copy to the business owner for lead tracking
    await resend.emails.send({
      from: "Your Best SEO <contact@yourbestseo.com>",
      to: ["chris@yourbestseo.com"],
      subject: `💬 Chat Transcript Request from ${email}`,
      html: `
        <h2>New Chat Transcript Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <h3>Conversation:</h3>
        ${conversationHtml}
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-chat-transcript function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
