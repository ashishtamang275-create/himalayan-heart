import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WHATSAPP_NUMBER = "9779818800584";

interface TrekPricingTableProps {
  trekName: string;
  budgetPrice?: number | null;
  standardPrice?: number | null;
  luxuryPrice?: number | null;
  permitsBreakdown?: string | null;
  onInquiryClick: () => void;
}

const tiers = [
  { key: "budget" as const, label: "Budget", desc: "Tea-house lodges, group trek, basic meals" },
  { key: "standard" as const, label: "Standard", desc: "Private guide, better lodges, full-board meals" },
  { key: "luxury" as const, label: "Luxury", desc: "Premium lodges, porter service, all transfers included" },
];

const TrekPricingTable = ({
  trekName,
  budgetPrice,
  standardPrice,
  luxuryPrice,
  permitsBreakdown,
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

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
          {trekName} Cost 2026
        </h2>
        <p className="text-muted-foreground mb-8">
          All prices per person. Permits, licensed guide, and accommodation included.
        </p>

        <div className="rounded-xl border overflow-hidden bg-card shadow-soft">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5">
                <TableHead className="font-display font-bold text-foreground">Package</TableHead>
                <TableHead className="font-display font-bold text-foreground">Price (USD)</TableHead>
                <TableHead className="font-display font-bold text-foreground hidden sm:table-cell">Includes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiers.map((tier) => {
                const price = prices[tier.key];
                if (!price) return null;
                return (
                  <TableRow key={tier.key}>
                    <TableCell className="font-semibold text-foreground">
                      {tier.label}
                      <span className="block sm:hidden text-xs text-muted-foreground font-normal mt-1">
                        {tier.desc}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-display text-xl font-bold text-accent">
                        ${price.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">
                      {tier.desc}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {permits && (
          <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
            <h3 className="font-semibold text-foreground text-sm mb-2">Permits Breakdown (included in all packages)</h3>
            <div className="flex flex-wrap gap-3">
              {permits.map((p, i) => (
                <span key={i} className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full border">
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
