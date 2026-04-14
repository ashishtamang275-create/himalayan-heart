import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "9779818800584";

interface TrekPricingTableProps {
  trekName: string;
  budgetPrice?: number | null;
  standardPrice?: number | null;
  luxuryPrice?: number | null;
  permitsBreakdown?: string | null;
  durationDays?: number | null;
  onInquiryClick: () => void;
}

const tiers = [
  {
    key: "budget" as const,
    label: "Budget",
    desc: "Tea-house lodges, group trek, basic meals",
    color: "border-muted",
  },
  {
    key: "standard" as const,
    label: "Standard",
    desc: "Private guide, better lodges, full-board meals",
    color: "border-accent",
    popular: true,
  },
  {
    key: "luxury" as const,
    label: "Luxury",
    desc: "Premium lodges, porter service, all transfers included",
    color: "border-primary",
  },
];

const TrekPricingTable = ({
  trekName,
  budgetPrice,
  standardPrice,
  luxuryPrice,
  permitsBreakdown,
  durationDays,
  onInquiryClick,
}: TrekPricingTableProps) => {
  const prices = { budget: budgetPrice, standard: standardPrice, luxury: luxuryPrice };
  const hasAnyPrice = budgetPrice || standardPrice || luxuryPrice;
  if (!hasAnyPrice) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the ${trekName}. Can you share pricing details?`
  );

  const permits = permitsBreakdown
    ? permitsBreakdown.split("|").map((p) => p.trim())
    : null;

  const days = durationDays || 14;
  const guideCostPerDay = 25;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
          {trekName} Cost 2026
        </h2>
        <p className="text-muted-foreground mb-8">
          All prices per person. Permits, licensed guide, and accommodation included.
        </p>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier) => {
            const price = prices[tier.key];
            if (!price) return null;
            return (
              <div
                key={tier.key}
                className={`relative rounded-xl border-2 ${tier.color} bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated ${
                  tier.popular ? "ring-2 ring-accent" : ""
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {tier.label}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{tier.desc}</p>
                <div className="mb-4">
                  <span className="font-display text-3xl font-bold text-accent">
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground"> / person</span>
                </div>

                {/* Cost breakdown */}
                <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Professional Licensed Guide</span>
                    <span className="font-medium text-accent">Included</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Food & lodging</span>
                    <span className="font-medium text-foreground">Included</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Permits & fees</span>
                    <span className="font-medium text-foreground">Included</span>
                  </div>
                </div>

                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi! I'd like to book the ${trekName} – ${tier.label} package ($${price}). Can we discuss?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" /> Customize & Book
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Permits breakdown */}
        {permits && (
          <div className="p-4 bg-secondary/50 rounded-lg mb-8">
            <h3 className="font-semibold text-foreground text-sm mb-2">
              Permits Breakdown (included in all packages)
            </h3>
            <div className="flex flex-wrap gap-3">
              {permits.map((p, i) => (
                <span
                  key={i}
                  className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full border"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" /> Get Exact Quote on WhatsApp
            </a>
          </Button>
          <Button variant="hero" size="lg" onClick={onInquiryClick}>
            Request Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrekPricingTable;
