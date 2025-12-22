import { useState, useEffect } from "react";
import { Star, Plus, Image, Video, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

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

const StarRating = ({ rating, onRatingChange, interactive = false }: { 
  rating: number; 
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          onClick={() => interactive && onRatingChange?.(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          disabled={!interactive}
        >
          <Star
            className={`w-5 h-5 ${
              (interactive ? hoverRating || rating : rating) >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
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

const ReviewForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return (isImage || isVideo) && isValidSize;
    });
    setFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    
    if (!trimmedName || !trimmedMessage) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      toast({
        title: "Error",
        description: "Name must be between 2 and 100 characters",
        variant: "destructive"
      });
      return;
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
      toast({
        title: "Error",
        description: "Message must be between 10 and 1000 characters",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit review via Edge Function (with rate limiting)
      const { data: reviewResponse, error: reviewError } = await supabase.functions.invoke('submit-review', {
        body: {
          reviewer_name: trimmedName,
          rating,
          message: trimmedMessage
        }
      });

      if (reviewError) {
        throw new Error(reviewError.message || 'Failed to submit review');
      }

      if (!reviewResponse?.success) {
        throw new Error(reviewResponse?.error || 'Failed to submit review');
      }

      const reviewData = reviewResponse.review;

      // Upload media files via Edge Function (with validation)
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('reviewId', reviewData.id);

        const { data: uploadResponse, error: uploadError } = await supabase.functions.invoke('upload-review-media', {
          body: formData
        });

        if (uploadError) {
          console.error('Upload error:', uploadError);
          continue;
        }

        if (!uploadResponse?.success) {
          console.error('Upload failed:', uploadResponse?.error);
          continue;
        }
      }

      toast({
        title: "Thank you!",
        description: "Your review has been submitted successfully"
      });

      setName("");
      setRating(5);
      setMessage("");
      setFiles([]);
      onSuccess();
    } catch (error: any) {
      console.error('Error submitting review:', error);
      const errorMessage = error?.message?.includes('Too many') 
        ? error.message 
        : "Failed to submit review. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Your Name *</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          maxLength={100}
          required
        />
      </div>
      
      <div>
        <Label>Rating *</Label>
        <StarRating rating={rating} onRatingChange={setRating} interactive />
      </div>
      
      <div>
        <Label htmlFor="message">Your Review *</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your experience..."
          rows={4}
          maxLength={1000}
          required
        />
      </div>
      
      <div>
        <Label>Add Photos or Videos (optional, max 5 files, 10MB each)</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div key={index} className="relative w-20 h-20">
              {file.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                  <Video className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {files.length < 5 && (
            <label className="w-20 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <Image className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground mt-1">Add</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
            </label>
          )}
        </div>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Review'
        )}
      </Button>
    </form>
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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Write a Review</DialogTitle>
              </DialogHeader>
              <ReviewForm onSuccess={handleReviewSuccess} />
            </DialogContent>
          </Dialog>
        </div>

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
