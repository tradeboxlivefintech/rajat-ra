"use client";

import { useTheme } from "@/utils/theme";

const Testimonials = () => {
  const theme = useTheme();

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
  ];

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

  return (
    <section 
      className="py-20"
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
            className="max-w-3xl mx-auto"
            style={{ color: theme.lightText }}
          >
            What industry professionals say about our research methodology and advisory approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
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
          ))}
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