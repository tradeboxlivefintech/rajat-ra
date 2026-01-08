"use client";

import Link from "next/link";
import { useTheme } from "@/utils/theme";
import { FileText, BarChart3, Shield, Target, TrendingUp } from "lucide-react";

const ResearchHighlights = () => {
  const theme = useTheme();

  const researchAreas = [
    {
      title: "Fundamental Analysis",
      description: "Deep dive into company financials, management quality, and industry positioning",
      metrics: ["DCF Valuation", "Ratio Analysis", "Peer Comparison", "Growth Projections"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Technical Analysis",
      description: "Price action study, trend analysis, and timing recommendations",
      metrics: ["Trend Lines", "Support/Resistance", "Volume Analysis", "Indicators"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies",
      metrics: ["Market Risk", "Sector Risk", "Company Risk", "Portfolio Risk"],
      icon: <Shield className="w-6 h-6" />
    },
  ];

  return (
    <section 
      className="py-20"
      style={{ background: theme.backgroundGradient }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: `${theme.primaryColor}15`,
              color: theme.primaryColor,
              border: `1px solid ${theme.primaryColor}30`,
            }}
          >
            <Target className="w-4 h-4" />
            Research Methodology
          </div>
          
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Research <span style={{ color: theme.primaryColor }}>Methodology</span>
          </h2>
          <p 
            className="max-w-3xl mx-auto"
            style={{ color: theme.lightText }}
          >
            Our comprehensive research approach combines quantitative analysis with qualitative insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 30px ${theme.primaryColor}08`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                }}
              >
                {area.icon}
              </div>

              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                {area.title}
              </h3>

              <p 
                className="mb-6"
                style={{ color: theme.lightText }}
              >
                {area.description}
              </p>

              <div className="space-y-2">
                {area.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <span className="text-sm" style={{ color: theme.lightText }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="rounded-2xl p-8 lg:p-12 text-white"
          style={{
            background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
            boxShadow: `0 4px 30px ${theme.primaryColor}30`,
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Access Premium Research Reports
                </h3>
              </div>
              <p className="opacity-90">
                Get detailed equity research with buy/sell recommendations based on comprehensive analysis
              </p>
            </div>
            <Link
              href="/research"
              className="px-8 py-3 bg-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90 whitespace-nowrap"
              style={{ color: theme.primaryColor }}
            >
              View Sample Reports
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;