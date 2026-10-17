import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingScheduler from "@/components/BookingScheduler";
import { SEO } from "@/components/SEO";

export default function Book() {
  return <div className="min-h-screen bg-background">
    <SEO title="Book a Free Call" description="Book a free 30-minute Google Business review with Chris Mefford by phone or Zoom." canonical="/book" />
    <Header />
    <main className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Book a <span className="text-gradient-gold">Free Call</span></h1>
        <p className="text-lg text-muted-foreground">30 minutes with Chris. Pick a time that works — or call <a href="tel:+16199036599" className="text-primary font-semibold">(619) 903-6599</a>.</p>
      </div>
      <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-10"><BookingScheduler /></div>
    </main>
    <Footer />
  </div>;
}
