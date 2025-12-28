import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, ChevronLeft, ChevronRight, Image, Video, Grid3X3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-mountains.jpg";

// Import photos
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";

// Import videos
import video1 from "@/assets/gallery/video-1.mp4";
import video2 from "@/assets/gallery/video-2.mp4";
import video3 from "@/assets/gallery/video-3.mp4";
import video4 from "@/assets/gallery/video-4.mp4";
import video5 from "@/assets/gallery/video-5.mp4";
import video6 from "@/assets/gallery/video-6.mp4";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  type: "photo" | "video";
}

// Media items - easily extendable by adding more imports above
const photos: MediaItem[] = [
  { id: "p1", src: photo1, alt: "Golden sunrise on Himalayan peak with moon", type: "photo" },
  { id: "p2", src: photo2, alt: "Snowy mountain range at dawn", type: "photo" },
  { id: "p3", src: photo3, alt: "Himalayan vulture in Nepal", type: "photo" },
  { id: "p4", src: photo4, alt: "Golden light on mountain peaks", type: "photo" },
  { id: "p5", src: photo5, alt: "Mountain lake with snow-capped peaks", type: "photo" },
  { id: "p6", src: photo6, alt: "Trekking group with mountain backdrop", type: "photo" },
  { id: "p7", src: photo7, alt: "Yak in mountain village", type: "photo" },
  { id: "p8", src: photo8, alt: "Trekker celebrating on snowy summit with prayer flags", type: "photo" },
  { id: "p9", src: photo9, alt: "Panoramic view of Gokyo Lake and mountains", type: "photo" },
];

const videos: MediaItem[] = [
  { id: "v1", src: video1, alt: "Nepal trekking adventure", type: "video" },
  { id: "v2", src: video2, alt: "Mountain scenery video", type: "video" },
  { id: "v3", src: video3, alt: "Himalayan trail experience", type: "video" },
  { id: "v4", src: video4, alt: "Mountain trail adventure", type: "video" },
  { id: "v5", src: video5, alt: "Himalayan journey", type: "video" },
  { id: "v6", src: video6, alt: "Nepal trek highlights", type: "video" },
];

type FilterType = "all" | "photos" | "videos";

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const allMedia = [...photos, ...videos];
  
  const getFilteredMedia = () => {
    switch (activeFilter) {
      case "photos":
        return photos;
      case "videos":
        return videos;
      default:
        return allMedia;
    }
  };

  const filteredMedia = getFilteredMedia();

  const openLightbox = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredMedia.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredMedia.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const filters: { key: FilterType; label: string; icon: React.ReactNode; count: number }[] = [
    { key: "all", label: "All", icon: <Grid3X3 className="h-4 w-4" />, count: allMedia.length },
    { key: "photos", label: "Photos", icon: <Image className="h-4 w-4" />, count: photos.length },
    { key: "videos", label: "Videos", icon: <Video className="h-4 w-4" />, count: videos.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-snow/10 backdrop-blur-sm text-snow text-sm font-medium mb-4">
              Our Adventures
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-snow mb-4">
              Gallery
            </h1>
            <p className="text-xl text-snow/80">
              Experience the breathtaking beauty of Nepal through our collection of photos and videos from our treks.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-card border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.icon}
                {filter.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.key
                    ? "bg-primary-foreground/20"
                    : "bg-muted"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8 text-center">
            Showing {filteredMedia.length} item{filteredMedia.length !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  item.type === "video" ? "aspect-video col-span-2 md:col-span-1" : "aspect-square"
                }`}
                onClick={() => openLightbox(item, index)}
              >
                {item.type === "photo" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transform scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    item.type === "video" ? "scale-100" : ""
                  }`}>
                    <div className={`rounded-full p-3 ${
                      item.type === "video" 
                        ? "bg-primary" 
                        : "bg-background/90 opacity-0 group-hover:opacity-100"
                    }`}>
                      {item.type === "video" ? (
                        <Play className="h-8 w-8 text-primary-foreground fill-current" />
                      ) : (
                        <Image className="h-5 w-5 text-foreground" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-16">
              <Image className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                No media found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox/Video Player Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-black/95 border-none">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {selectedMedia && (
            <div className="relative flex items-center justify-center min-h-[50vh] max-h-[85vh]">
              {/* Navigation arrows */}
              {filteredMedia.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="absolute left-4 z-40 rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-8 w-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 z-40 rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-8 w-8 text-white" />
                  </button>
                </>
              )}

              {selectedMedia.type === "photo" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh]"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Counter */}
          {selectedMedia && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-1 rounded-full">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;
