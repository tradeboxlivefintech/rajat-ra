"use client";

import { useTheme } from "@/utils/theme";
import { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef(null);
  const animationFrameRef = useRef(null);

  const testimonials = [
    {
      name: "Arun Mehta",
      role: "Portfolio Manager",
      company: "CapitalFirst Investments",
      content: "The quality of fundamental analysis is top-notch. Their DCF valuation models helped us identify undervalued stocks before market recognition.",
      rating: 5,
      type: "Professional",
    },
    {
      name: "Neha Kapoor",
      role: "HNI Investor",
      company: "",
      content: "As someone managing family wealth, their portfolio advisory gave me clarity on asset allocation. The risk profiling was particularly insightful.",
      rating: 5,
      type: "Wealth Manager",
    },
    {
      name: "Rohan Singh",
      role: "Financial Advisor",
      company: "WealthWise Partners",
      content: "Their sector research reports have been invaluable for client presentations. The regulatory compliance focus adds credibility to our recommendations.",
      rating: 5,
      type: "Advisor",
    },
    {
      name: "Priya Sharma",
      role: "Fund Manager",
      company: "Alpha Growth Capital",
      content: "Exceptional market insights. Their quarterly earnings analysis has consistently helped us make informed investment decisions.",
      rating: 5,
      type: "Professional",
    },
    {
      name: "Vikram Patel",
      role: "Wealth Consultant",
      company: "Fortune Advisory",
      content: "The personalized approach and detailed research have significantly improved our client's portfolio performance.",
      rating: 5,
      type: "Advisor",
    },
    {
      name: "Ananya Reddy",
      role: "Investment Strategist",
      company: "Global Wealth Partners",
      content: "Their macro-economic analysis combined with sector-specific research provides a comprehensive view that's hard to find elsewhere.",
      rating: 5,
      type: "Wealth Manager",
    },
  ];

  // Create duplicated array for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Professional': return theme.primaryColor;
      case 'Wealth Manager': return theme.secondaryColor;
      case 'Advisor': return theme.accentColor;
      default: return theme.primaryColor;
    }
  };

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 400; // Card width + gap
        const maxScroll = (testimonials.length * cardWidth);
        
        let newScrollLeft = container.scrollLeft + 1;
        
        // Reset to start if we reach the end of original testimonials
        if (newScrollLeft >= maxScroll) {
          newScrollLeft = 0;
          container.scrollLeft = 0;
        }
        
        container.scrollLeft = newScrollLeft;
      }
    }, 20); // Adjust speed here (lower = faster)
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const handleManualScroll = (direction) => {
    stopAutoScroll();
    setIsAutoScrolling(false);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const scrollAmount = cardWidth;
      
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      
      // Restart auto scroll after manual interaction
      setTimeout(() => {
        if (isAutoScrolling) {
          startAutoScroll();
        }
      }, 3000);
    }
  };

  const scrollToTestimonial = (index) => {
    stopAutoScroll();
    setIsAutoScrolling(false);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const scrollPosition = index * cardWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Restart auto scroll after manual interaction
      setTimeout(() => {
        if (isAutoScrolling) {
          startAutoScroll();
        }
      }, 3000);
    }
  };

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    const container = scrollContainerRef.current;
    
    const handleMouseEnter = () => {
      setIsAutoScrolling(false);
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      setIsAutoScrolling(true);
      startAutoScroll();
    };

    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      stopAutoScroll();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isAutoScrolling]);

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: theme.backgroundGradient,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Client <span style={{ color: theme.primaryColor }}>Feedback</span>
          </h2>
          <p 
            className="max-w-3xl mx-auto mb-8"
            style={{ color: theme.lightText }}
          >
            What industry professionals say about our research methodology and advisory approach
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => handleManualScroll('left')}
            className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: `${theme.background}80`,
              border: `2px solid ${theme.primaryColor}30`,
              color: theme.primaryColor,
              boxShadow: `0 4px 20px ${theme.primaryColor}20`,
            }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isAutoScrolling ? theme.primaryColor : `${theme.primaryColor}20`,
                color: isAutoScrolling ? 'white' : theme.primaryColor,
              }}
              aria-label={isAutoScrolling ? "Pause auto-scroll" : "Play auto-scroll"}
            >
              {isAutoScrolling ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" strokeWidth="2" />
                  <rect x="14" y="4" width="4" height="16" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </button>
            <span className="text-sm" style={{ color: theme.lightText }}>
              {isAutoScrolling ? 'Auto-scrolling' : 'Paused'}
            </span>
          </div>

          <button
            onClick={() => handleManualScroll('right')}
            className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: `${theme.background}80`,
              border: `2px solid ${theme.primaryColor}30`,
              color: theme.primaryColor,
              boxShadow: `0 4px 20px ${theme.primaryColor}20`,
            }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-400px * 6 - 1.5rem * 5));
                }
              }
              
              .scroll-container {
                display: flex;
                width: max-content;
                animation: scroll 40s linear infinite;
              }
              
              .scroll-container:hover {
                animation-play-state: paused;
              }
              
              @media (max-width: 768px) {
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-85vw * 6));
                  }
                }
              }
            `}</style>
            
            <div className="scroll-container gap-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px]"
                >
                  <div
                    className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl h-full hover:scale-[1.02]"
                    style={{
                      backgroundColor: theme.background,
                      borderColor: theme.borderColor,
                      boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                    }}
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span 
                          key={i} 
                          className="text-xl"
                          style={{ color: theme.primaryColor }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Quote content */}
                    <div className="relative mb-6">
                      <div 
                        className="text-4xl absolute -top-2 -left-1 opacity-20"
                        style={{ color: theme.primaryColor }}
                      >
                        &apos;
                      </div>
                      <p 
                        className="relative leading-relaxed pl-6"
                        style={{ color: theme.textColor }}
                      >
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Client info */}
                    <div className="border-t pt-6">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${getTypeColor(testimonial.type)} 0%, ${getTypeColor(testimonial.type)}80 100%)`,
                          }}
                        >
                          {getInitials(testimonial.name)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 
                              className="font-bold truncate"
                              style={{ color: theme.textColor }}
                            >
                              {testimonial.name}
                            </h4>
                            <span 
                              className="text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0"
                              style={{
                                backgroundColor: `${getTypeColor(testimonial.type)}15`,
                                color: getTypeColor(testimonial.type),
                                border: `1px solid ${getTypeColor(testimonial.type)}30`,
                              }}
                            >
                              {testimonial.type}
                            </span>
                          </div>
                          <p 
                            className="text-sm truncate"
                            style={{ color: theme.lightText }}
                          >
                            {testimonial.role}
                            {testimonial.company && ` • ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, ${theme.backgroundGradient.split(',')[0]} 0%, transparent 100%)`,
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${theme.backgroundGradient.split(',')[0]} 100%)`,
            }}
          />
        </div>
       

        {/* Disclaimer Note */}
        <div 
          className="mt-12 p-4 rounded-xl max-w-3xl mx-auto"
          style={{
            backgroundColor: `${theme.background}90`,
            border: `1px solid ${theme.borderColor}`,
          }}
        >
          <p 
            className="text-sm text-center"
            style={{ color: theme.lightText }}
          >
            <strong style={{ color: theme.textColor }}>Note:</strong> Testimonials represent individual client experiences. 
            Past performance or client satisfaction may not be indicative of future results. 
            All testimonials are from genuine clients who have used our research services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;