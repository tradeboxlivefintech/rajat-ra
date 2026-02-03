"use client";

import Link from "next/link";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";

const Hero = () => {
  const theme = useTheme();

  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme.backgroundGradient,
        }}
      />
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.primaryColor}80, transparent)`,
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.primaryColor}80, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: `${theme.primaryColor}15`,
                color: theme.primaryColor,
                border: `1px solid ${theme.primaryColor}30`,
              }}
            >
              <span 
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: theme.primaryColor }}
              />
              SEBI Registered Research Analyst
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: theme.textColor }}
            >
              Professional{" "}
              <span 
                style={{
                  background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Equity Research
              </span>{" "}
              & Investment Advisory
            </h1>

            <p 
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: theme.lightText }}
            >
              {userData.companyName} is a SEBI-recognized research and insights firm 
              focused on delivering clear, data-driven market intelligence to individuals 
              who value informed decision-making.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Fundamental Analysis",
                "Technical Analysis", 
                "Risk Management",
                "Portfolio Advisory",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${theme.primaryColor}15` }}
                  >
                    <span 
                      className="text-sm"
                      style={{ color: theme.primaryColor }}
                    >
                      ✓
                    </span>
                  </div>
                  <span 
                    className="font-medium"
                    style={{ color: theme.textColor }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research"
                className="px-8 py-4 text-white rounded-xl font-semibold text-center transition-all duration-300 hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                  boxShadow: `0 4px 20px ${theme.primaryColor}30`,
                }}
              >
                Explore Research Reports
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 border-2"
                style={{
                  backgroundColor: theme.background,
                  color: theme.textColor,
                  borderColor: theme.borderColor,
                }}
              >
               View All Services
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  boxShadow: `0 20px 40px ${theme.primaryColor}10`,
                }}
              >
                {/* Chart */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Market Performance
                    </h3>
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${theme.primaryColor}15`,
                        color: theme.primaryColor,
                        border: `1px solid ${theme.primaryColor}30`,
                      }}
                    >
                      +24.5% YTD
                    </span>
                  </div>
                  <div 
                    className="h-48 rounded-lg p-4"
                    style={{
                      background: `linear-gradient(180deg, ${theme.primaryColor}08 0%, ${theme.background} 100%)`,
                    }}
                  >
                    {/* Simple Chart Illustration */}
                    <div className="relative h-full">
                      <div className="absolute inset-0 flex items-end">
                        {[30, 60, 45, 80, 65, 90, 75].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 mx-1 rounded-t-lg"
                            style={{ 
                              height: `${height}%`,
                              background: `linear-gradient(180deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                              opacity: 0.7,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analyst Card */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primaryColor}20 0%, ${theme.secondaryColor}20 100%)`,
                      }}
                    >
                      <div className="text-2xl">📊</div>
                    </div>
                    <div>
                      <h4 
                        className="font-bold"
                        style={{ color: theme.textColor }}
                      >
                        {userData.analyst.name}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: theme.lightText }}
                      >
                        {userData.analyst.designation}
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: theme.lightText }}
                      >
                        SEBI Reg: {userData.regNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;