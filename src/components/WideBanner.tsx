import bannerImg from "@/assets/wide-banner.jpg";

const WideBanner = () => (
  <section className="relative overflow-hidden" aria-label="Search rankings that are out of this world">
    <img
      src={bannerImg}
      alt="Sunny main street with a dental office and an HVAC van, a rocket trail in the sky"
      width={1920}
      height={832}
      loading="lazy"
      className="h-[360px] sm:h-[480px] lg:h-[560px] w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Local businesses, launched</p>
      <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black max-w-3xl leading-tight">
        Search rankings that are <span className="text-gradient-gold">out of this world.</span>
      </h2>
    </div>
  </section>
);

export default WideBanner;
