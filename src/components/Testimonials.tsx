import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    trek: "Everest Base Camp Trek",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "An absolutely life-changing experience! Pemba and the team made sure every detail was perfect. The views were breathtaking and the cultural immersion was beyond what I expected.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Australia",
    trek: "Annapurna Circuit",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Go Nepal Treks exceeded all expectations. The guides were knowledgeable, patient, and genuinely caring. They turned a challenging trek into an unforgettable adventure.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Spain",
    trek: "Langtang Valley Trek",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "I was a solo female traveler and felt completely safe throughout. The attention to detail, local insights, and genuine hospitality made this trip special.",
  },
  {
    id: 4,
    name: "James Thompson",
    location: "Canada",
    trek: "Manaslu Circuit",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Third time trekking with Go Nepal Treks and they never disappoint. Professional organization, experienced guides, and memories that last forever.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-snow blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-snow blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-snow font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-snow mt-3 mb-6">
            What Our Trekkers Say
          </h2>
          <p className="text-snow/90 text-lg">
            Don't just take our word for it - hear from adventurers who've 
            experienced the magic of the Himalayas with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 -left-4 w-16 h-16 text-accent/30" />

            {/* Testimonial Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-snow text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-display text-xl font-bold text-snow">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-snow/90">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="text-accent text-sm mt-1 font-semibold">
                      {testimonials[currentIndex].trek}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-snow/20 hover:bg-snow/30 flex items-center justify-center text-snow transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-accent w-6 h-2"
                          : "bg-snow/50 hover:bg-snow/70 w-2 h-2"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-snow/20 hover:bg-snow/30 flex items-center justify-center text-snow transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
