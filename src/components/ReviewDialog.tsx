import { useState } from "react";
import { Image, Video, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const StarRatingInput = ({ rating, onRatingChange }: { 
  rating: number; 
  onRatingChange: (rating: number) => void;
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="cursor-pointer hover:scale-110 transition-transform"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        >
          <svg
            className={`w-5 h-5 ${
              (hoverRating || rating) >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
};

const ReviewDialog = ({ open, onOpenChange, onSuccess }: ReviewDialogProps) => {
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
      const isValidSize = file.size <= 10 * 1024 * 1024;
      return (isImage || isVideo) && isValidSize;
    });
    setFiles(prev => [...prev, ...validFiles].slice(0, 5));
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>
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
            <StarRatingInput rating={rating} onRatingChange={setRating} />
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
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;