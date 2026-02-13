import { Heart } from "lucide-react";

const CommunityImpact = () => (
  <section className="py-16 bg-forest/5">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
          <Heart className="w-8 h-8 text-forest" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Giving Back to the Mountains</h2>
          <p className="text-muted-foreground leading-relaxed">
            A portion of every trek fee goes directly to the communities we visit — funding local schools, clean water initiatives, and trail maintenance in remote Himalayan villages. When you trek with us, you're not just exploring the mountains — you're helping preserve them for future generations.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CommunityImpact;
