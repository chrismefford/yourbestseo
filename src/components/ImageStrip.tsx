import mapsImg from "@/assets/strip-maps.jpg";
import aiImg from "@/assets/strip-ai.jpg";
import ownerImg from "@/assets/strip-owner.jpg";

const panels = [
  { img: mapsImg, alt: "Phone showing local businesses pinned on a map at night", title: "Found on Google Maps", text: "Show up when customers search near them." },
  { img: aiImg, alt: "Person asking an AI assistant for a recommendation", title: "Recommended by AI", text: "Be the answer when they ask ChatGPT, Perplexity or Claude." },
  { img: ownerImg, alt: "Smiling local shop owner in her doorway at sunset", title: "Chosen and Booked", text: "Turn discovery into calls and appointments." },
];

const ImageStrip = () => (
  <section className="py-10 sm:py-14" aria-label="How customers find you">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {panels.map((p) => (
          <figure key={p.title} className="group relative overflow-hidden rounded-2xl border border-border aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
            <img
              src={p.img}
              alt={p.alt}
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <figcaption className="absolute bottom-0 p-5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default ImageStrip;
