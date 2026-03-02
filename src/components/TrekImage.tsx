import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Import default fallback
import defaultFallback from "@/assets/hero-mountains-compressed.webp";

// Trek-specific fallback images - full size (for hero sections)
import heroEverest from "@/assets/trek-hero-everest.webp";
import heroAnnapurna from "@/assets/trek-hero-annapurna.webp";
import heroManaslu from "@/assets/trek-hero-manaslu.webp";
import heroLangtang from "@/assets/trek-hero-langtang.webp";
import heroPoonhill from "@/assets/trek-hero-poonhill.webp";

// Trek-specific card images - smaller size (for card thumbnails)
import cardEverest from "@/assets/trek-card-everest.webp";
import cardAnnapurna from "@/assets/trek-card-annapurna.webp";
import cardManaslu from "@/assets/trek-card-manaslu.webp";
import cardLangtang from "@/assets/trek-card-langtang.webp";
import cardPoonhill from "@/assets/trek-card-poonhill.webp";

const TREK_IMAGE_MAP: Record<string, string> = {
  "everest-base-camp": heroEverest,
  "annapurna-base-camp": heroAnnapurna,
  "manaslu-circuit": heroManaslu,
  "langtang-valley": heroLangtang,
  "ghorepani-poonhill": heroPoonhill,
};

const TREK_CARD_IMAGE_MAP: Record<string, string> = {
  "everest-base-camp": cardEverest,
  "annapurna-base-camp": cardAnnapurna,
  "manaslu-circuit": cardManaslu,
  "langtang-valley": cardLangtang,
  "ghorepani-poonhill": cardPoonhill,
};

/**
 * Get the best available image for a trek.
 * Priority: provided src > slug-based local asset > default fallback
 */
export function getTrekFallbackImage(slug?: string, variant: "hero" | "card" = "hero"): string {
  const map = variant === "card" ? TREK_CARD_IMAGE_MAP : TREK_IMAGE_MAP;
  if (slug && map[slug]) return map[slug];
  if (slug && TREK_IMAGE_MAP[slug]) return TREK_IMAGE_MAP[slug];
  return defaultFallback;
}

interface TrekImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Trek slug for automatic fallback selection */
  trekSlug?: string;
  /** Explicit fallback image URL */
  fallbackSrc?: string;
  /** Show skeleton while loading */
  showSkeleton?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Image variant - card uses smaller images */
  variant?: "hero" | "card";
}

const TrekImage = ({
  src,
  alt = "Nepal Himalayan trek",
  trekSlug,
  fallbackSrc,
  showSkeleton = true,
  className,
  wrapperClassName,
  variant = "hero",
  ...props
}: TrekImageProps) => {
  const fallback = fallbackSrc || getTrekFallbackImage(trekSlug, variant);
  const effectiveSrc = src && src !== "/placeholder.svg" ? src : fallback;

  const [imageSrc, setImageSrc] = useState(effectiveSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Update src when props change
  useEffect(() => {
    const newSrc = src && src !== "/placeholder.svg" ? src : fallback;
    setImageSrc(newSrc);
    setIsLoading(true);
    setHasError(false);
  }, [src, fallback]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallback);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted z-10" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TrekImage;
