import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, ChevronLeft, ChevronRight, Image, Video } from "lucide-react";

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
  thumbnail?: string;
}

// Initial media items - easily extendable
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

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const currentItems = activeTab === "photos" ? photos : videos;

  const openLightbox = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? currentItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedMedia(currentItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === currentItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedMedia(currentItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Adventure Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the breathtaking beauty of Nepal through our collection of photos and videos from our treks
          </p>
        </div>

        <Tabs defaultValue="photos" className="w-full" onValueChange={(v) => setActiveTab(v as "photos" | "videos")}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Photos ({photos.length})
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos ({videos.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => openLightbox(photo, index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/90 rounded-full p-3">
                        <Image className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group bg-muted"
                  onClick={() => openLightbox(video, index)}
                >
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-primary rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox/Video Player Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black/95 border-none">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 rounded-full bg-background/20 p-2 hover:bg-background/40 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {selectedMedia && (
            <div className="relative flex items-center justify-center min-h-[50vh] max-h-[85vh]">
              {/* Navigation arrows for photos */}
              {activeTab === "photos" && currentItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="absolute left-4 z-40 rounded-full bg-background/20 p-2 hover:bg-background/40 transition-colors"
                  >
                    <ChevronLeft className="h-8 w-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 z-40 rounded-full bg-background/20 p-2 hover:bg-background/40 transition-colors"
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

          {/* Image counter for photos */}
          {activeTab === "photos" && selectedMedia && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {currentItems.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
