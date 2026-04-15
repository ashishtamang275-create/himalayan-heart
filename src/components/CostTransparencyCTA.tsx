import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const CostTransparencyCTA = () => {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            <DollarSign className="w-4 h-4" /> 100% Price Transparency
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Where Does Your Money Go?
          </h2>
          <p className="text-muted-foreground mb-5">
            See the real cost of permits, guides, food & lodging — no hidden fees, no agency markups.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/trekking-cost-breakdown">
              <DollarSign className="w-5 h-5" /> View 2026 Cost Breakdown
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CostTransparencyCTA;
