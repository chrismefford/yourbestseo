import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export default function SMSTerms() {
  return <div className="min-h-screen bg-background text-foreground">
    <SEO title="SMS Terms and Conditions" description="YourBestSEO appointment text messaging terms, optional consent, rates, opt-out instructions, and support." canonical="/sms-terms" />
    <Header />
    <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 space-y-8">
      <h1 className="font-display text-4xl font-bold">SMS Terms and Conditions</h1>
      <p className="text-muted-foreground">Effective October 17, 2026 · YourBestSEO</p>
      <section className="space-y-3"><h2 className="font-display text-2xl">Appointment messages</h2><p>The YourBestSEO appointment messaging program provides appointment confirmations and reminders to visitors who explicitly choose to receive them. It does not include promotional text messages. Message frequency varies based on your appointments. Message and data rates may apply.</p></section>
      <section className="space-y-3"><h2 className="font-display text-2xl">Optional consent</h2><p>You opt in by selecting the separate, unchecked SMS consent checkbox when booking at <Link className="text-primary underline" to="/book">yourbestseo.com/book</Link> or through our AI awareness checker. Providing a phone number alone is not consent. Consent is not a condition of purchase, booking, or receiving a business review. Provide a number you own or are authorized to use.</p></section>
      <section className="space-y-3"><h2 className="font-display text-2xl">Stop messages or get help</h2><p>Reply STOP to unsubscribe. After opting out, you may receive a final confirmation of your unsubscribe request; no further appointment texts will be sent unless you opt in again. Reply HELP for help, email <a className="text-primary underline" href="mailto:chris@yourbestseo.com">chris@yourbestseo.com</a>, or call <a className="text-primary underline" href="tel:+16199036599">(619) 903-6599</a>.</p></section>
      <section className="space-y-3"><h2 className="font-display text-2xl">Delivery and privacy</h2><p>Delivery depends on your carrier and service availability and is not guaranteed. Carriers are not liable for delayed or undelivered messages. Tell us if your phone number changes so we can update our records.</p><p>Your information and consent are handled according to our <Link className="text-primary underline" to="/privacy-policy">Privacy Policy</Link>. We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes.</p></section>
      <section className="space-y-3"><h2 className="font-display text-2xl">Contact</h2><p>YourBestSEO · Chris Mefford<br />8620 Ian Way, San Diego, CA 92071<br />chris@yourbestseo.com · (619) 903-6599</p></section>
    </main><Footer />
  </div>;
}