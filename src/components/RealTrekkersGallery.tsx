import everestWinter from "@/assets/clients/everest-trek-winter-group.jpeg";
import annapurnaPrayerFlags from "@/assets/clients/annapurna-trek-prayer-flags.jpeg";
import teahouseDinner from "@/assets/clients/teahouse-dinner-trekkers.jpeg";
import monasteryVisit from "@/assets/clients/monastery-visit-group.jpeg";
import thorangLaPass from "@/assets/clients/thorang-la-pass-group.jpeg";
import langtangRest from "@/assets/clients/langtang-valley-rest-stop.jpeg";
import waterfallSelfie from "@/assets/clients/waterfall-trek-group-selfie.jpeg";
import guideIndra from "@/assets/guide-indra.webp";

const photos = [
  {
    src: everestWinter,
    alt: "Trekkers with guide Indra Tamang in the Everest region during winter trek in Nepal",
    caption: "Everest Region – Winter Trek with International Clients",
  },
  {
    src: annapurnaPrayerFlags,
    alt: "Group of trekkers with Indra Tamang near Annapurna with prayer flags and snow-capped mountains",
    caption: "Annapurna Region – Spring Season Trek",
  },
  {
    src: thorangLaPass,
    alt: "Trekking group at Thorang La Pass 5416m sign on the Annapurna Circuit trek in Nepal",
    caption: "Thorang La Pass (5,416m) – Annapurna Circuit",
  },
  {
    src: monasteryVisit,
    alt: "Trekkers visiting a traditional Nepali monastery with Buddhist prayer flags during trek",
    caption: "Cultural Experience – Monastery Visit",
  },
  {
    src: waterfallSelfie,
    alt: "Happy group of trekkers with guide near a waterfall on the Annapurna trek trail in Nepal",
    caption: "Trail Highlights – Waterfall Along the Trek",
  },
  {
    src: langtangRest,
    alt: "Trekkers relaxing with guide Indra at a mountain rest stop with valley views in Nepal",
    caption: "Langtang Valley – Rest Stop with Mountain Views",
  },
  {
    src: teahouseDinner,
    alt: "Trekkers enjoying dinner at a Nepali teahouse with Buddhist prayer flags during Himalayan trek",
    caption: "Teahouse Experience – Evening at a Mountain Lodge",
  },
  {
    src: guideIndra,
    alt: "Indra Tamang licensed trekking guide in Nepal leading Himalayan adventures",
    caption: "Your Guide – Indra Tamang on the Trail",
  },
];

const RealTrekkersGallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            From Our Trails
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Real Trekkers. Real Himalayan Experiences.
          </h2>
          <p className="text-muted-foreground text-lg">
            Every photo is from an actual trek led by our team — no stock
            images, just real moments from the Himalayas.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
                <p className="text-white text-sm font-medium leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealTrekkersGallery;
