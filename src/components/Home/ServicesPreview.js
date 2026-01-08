"use client";

import Link from "next/link";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";

const ServicesPreview = () => {
  const theme = useTheme();
  const featuredServices = userData.services.slice(0, 3);

  const serviceIcons = ["📊", "💼", "🏢"];

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
            Our <span style={{ color: theme.primaryColor }}>Research Services</span>
          </h2>
          <p 
            className="max-w-3xl mx-auto"
            style={{ color: theme.lightText }}
          >
            Comprehensive research solutions designed to help you make informed
            investment decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 30px ${theme.primaryColor}08`,
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}20 0%, ${theme.secondaryColor}20 100%)`,
                }}
              >
                <span className="text-2xl">{serviceIcons[index] || "📊"}</span>
              </div>

              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                {service.title}
              </h3>

              <p 
                className="mb-6"
                style={{ color: theme.lightText }}
              >
                {service.description}
              </p>

              <div className="mb-6">
                <h4 
                  className="text-sm font-semibold mb-3"
                  style={{ color: theme.textColor }}
                >
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span 
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${theme.primaryColor}20` }}
                      >
                        <span 
                          className="text-xs"
                          style={{ color: theme.primaryColor }}
                        >
                          ✓
                        </span>
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: theme.lightText }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <span 
                  className="text-sm"
                  style={{ 
                    color: theme.lightText,
                    borderTopColor: theme.borderColor,
                  }}
                >
                  Delivery: {service.delivery}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
              boxShadow: `0 4px 20px ${theme.primaryColor}30`,
            }}
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;