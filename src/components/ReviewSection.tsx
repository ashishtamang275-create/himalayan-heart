import { useState, useEffect, lazy, Suspense } from "react";
import { Star, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

// Lazy load heavy Dialog components - only loaded when user clicks "Write a Review"
const ReviewDialog = lazy(() => import("./ReviewDialog"));

interface ReviewMedia {
  id: string;
  media_url: string;
  media_type: string;
}

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  message: string;
  created_at: string;
  review_media?: ReviewMedia[];
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            rating >= star
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-foreground">{review.reviewer_name}</h4>
          <p className="text-sm text-muted-foreground">{formatDate(review.created_at)}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-muted-foreground mb-4">{review.message}</p>
      
      {review.review_media && review.review_media.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {review.review_media.map((media) => (
            <div key={media.id} className="relative">
              {media.media_type === 'image' ? (
                <img
                  src={media.media_url}
                  alt="Review media"
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open(media.media_url, '_blank')}
                />
              ) : (
                <video
                  src={media.media_url}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => window.open(media.media_url, '_blank')}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchReviews = async () => {
    try {
      const { data: reviewsData, error } = await supabase
        .from('reviews')
        .select(`
          *,
          review_media (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(reviewsData || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReviewSuccess = () => {
    setIsDialogOpen(false);
    fetchReviews();
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Customer Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Trekkers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from adventurers who explored Nepal with us
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button size="lg" className="gap-2" onClick={() => setIsDialogOpen(true)}>
            <Plus className="w-5 h-5" />
            Write a Review
          </Button>
        </div>

        {/* Lazy load dialog only when opened */}
        {isDialogOpen && (
          <Suspense fallback={null}>
            <ReviewDialog 
              open={isDialogOpen} 
              onOpenChange={setIsDialogOpen} 
              onSuccess={handleReviewSuccess} 
            />
          </Suspense>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;