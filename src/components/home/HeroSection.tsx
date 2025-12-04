import { useState, useEffect, useRef } from 'react';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ImageLoadState {
  [key: string]: boolean;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763914063/832b2326-3b7c-4ac4-aec1-be2f78eb21b4_khljaa.jpg',
    title: 'Welcome To',
    subtitle: '',
    description: 'the leading manufacturing company of hand-knotted area rugs, knotted by skilled Nepalese artisans, turning tradition, texture, and inspiration into luxury'
  },
  {
    id: 'slide-2',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763915179/71fa5173-6068-44f5-87b2-954410e3b1ed_vlp7sg.jpg',
    title: 'Artisan Heritage',
    subtitle: 'Centuries of Craftsmanship',
    description: 'Each rug tells a story of skilled artisans preserving ancient techniques for modern homes'
  },
  {
    id: 'slide-3',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1764170211/91f208b0-8d01-415c-bb60-c506d75e2bcf_y6dbr2.jpg',
    title: 'Interior Alchemy',
    subtitle: 'Transfer Your Space',
    description: 'Discover handcrafted rugs that bridge traditional Nepalese artistry with contemporary design.'
  },
  {
    id: 'slide-4',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1764170225/4c5ae8b4-c02e-4074-9e24-9497d3e0f4f8_p8esi1.jpg',
    title: 'Modern Living',
    subtitle: 'Contemporary Comfort',
    description: 'Experience the perfect blend of luxury, sustainability, and timeless design'
  }
];

const heroinnerSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736726/Festival_Photorealistic_ulavyu.jpg',
    title: 'Interior Alchemy',
    subtitle: 'Transform Your Space',
    description: 'Discover handcrafted rugs that bridge traditional Nepalese artistry with contemporary design'
  },
  {
    id: 'slide-2',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737510/Chino_kkhyoi.jpg',
    title: 'Artisan Heritage',
    subtitle: 'Centuries of Craftsmanship',
    description: 'Each rug tells a story of skilled artisans preserving ancient techniques for modern homes'
  },
  {
    id: 'slide-3',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736682/Broken_Mirror_uge5aq.jpg',
    title: 'Modern Living',
    subtitle: 'Contemporary Comfort',
    description: 'Experience the perfect blend of luxury, sustainability, and timeless design'
  },

  {
    id: 'slide-4',
    image: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737324/Ring_3_Color_kyf4w3.jpg',
    title: 'Interior Alchemy',
    subtitle: 'Transfer Your Space',
    description: 'Discover handcrafted rugs that bridge traditional Nepalese artistry with contemporary design.'

  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState<ImageLoadState>({});
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observers = [];

    // Section observer
    if (sectionRef.current) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      sectionObserver.observe(sectionRef.current);
      observers.push(sectionObserver);
    }

    // Content observer
    if (contentRef.current) {
      const contentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsContentVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      contentObserver.observe(contentRef.current);
      observers.push(contentObserver);
    }



    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Image preloading
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = heroSlides.map((slide) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setImageLoadStates(prev => ({ ...prev, [slide.id]: true }));
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${slide.image}`);
            setImageLoadStates(prev => ({ ...prev, [slide.id]: false }));
            resolve(); // Still resolve to not block other images
          };
          img.src = slide.image;
        });
      });

      try {
        await Promise.all(loadPromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesPreloaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!imagesPreloaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [imagesPreloaded]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {!imagesPreloaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/80 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-8 h-8 border-2 border-mint-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm opacity-75">Loading images...</p>
            </div>
          </div>
        )}
        {heroSlides.map((slide, index) => {
          const isLoaded = imageLoadStates[slide.id];
          const fallbackImage = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide && imagesPreloaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={isLoaded !== false ? slide.image : fallbackImage}
                alt={slide.title}
                className={`w-full text-center h-full object-cover transition-opacity duration-500 ${isLoaded !== false ? 'opacity-100' : 'opacity-75'
                  }`}
                onError={(e) => {
                  console.warn(`Image failed to load: ${slide.image}`);
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackImage) {
                    target.src = fallbackImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              {isLoaded === false && (
                <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-200 px-2 py-1 rounded text-xs">
                  Using fallback image
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full">
        <div className="max-w-container mx-auto px-gutter">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className={`bg-charcoal/80 backdrop-blur-sm p-8 lg:p-12 rounded-lg transform transition-all duration-1000 ease-out ${isContentVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}>
                <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4 transform transition-all duration-1000 delay-200 ease-out ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className={`text-xl md:text-2xl font-medium text-mint-green mb-6 transform transition-all duration-1000 delay-400 ease-out ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className={`text-lg leading-relaxed mb-8 text-off-white transform transition-all duration-1000 delay-600 ease-out ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {heroSlides[currentSlide].description}
                </p>

                {/* CTAs */}
                <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-800 ease-out ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                </div>
              </div>
            </div>

            {/* Right Content - Living Room Scene */}
            <div className={` relative transform transition-all duration-1000 delay-300 ease-out ${isContentVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}>
              <div>
                {imagesPreloaded ? (
                  <div className='m-32 pl-10 pb-20'>
                    <img
                      src={imageLoadStates[heroSlides[currentSlide].id] !== false
                        ? heroinnerSlides[currentSlide].image
                        : 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                      }
                      alt={`${heroinnerSlides[currentSlide].title} - Cozy living room with handcrafted rug`}
                      className={` object-scale-down rounded-lg  transition-all duration-1000 ease-out hover:scale-105 ${imageLoadStates[heroSlides[currentSlide].id] !== false ? 'opacity-100' : 'opacity-75'
                        }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const fallback = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                        if (target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />

                  </div>
                ) : (
                  <div className="w-48 h-48 bg-charcoal/20 rounded-lg shadow-2xl flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-mint-green border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}