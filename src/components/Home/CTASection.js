"use client";

import Link from "next/link";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";

const CTASection = () => {
  const theme = useTheme();

  return (
    <section 
      className="py-20"
      style={{
        background: theme.backgroundGradient,
        borderTop: `1px solid ${theme.borderColor}`,
        borderBottom: `1px solid ${theme.borderColor}`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: theme.textColor }}
          >
            Ready to Make{" "}
            <span style={{ color: theme.primaryColor }}>
              Informed
            </span>{" "}
            Investment Decisions?
          </h2>
          
          <p 
            className="max-w-2xl mx-auto mb-8 text-lg"
            style={{ color: theme.lightText }}
          >
            Partner with a SEBI Registered Research Analyst for professional,
            compliant, and research-backed investment guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                boxShadow: `0 4px 20px ${theme.primaryColor}30`,
              }}
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/compliance"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 hover:opacity-80"
              style={{
                backgroundColor: theme.background,
                color: theme.textColor,
                borderColor: theme.borderColor,
              }}
            >
              View Compliance Details
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: `${theme.primaryColor}10`,
                border: `1px solid ${theme.primaryColor}20`,
              }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.primaryColor}20` }}
              >
                <span style={{ color: theme.primaryColor }}>✓</span>
              </div>
              <span style={{ color: theme.textColor }}>SEBI Registered</span>
            </div>
            
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: `${theme.secondaryColor}10`,
                border: `1px solid ${theme.secondaryColor}20`,
              }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.secondaryColor}20` }}
              >
                <span style={{ color: theme.secondaryColor }}>✓</span>
              </div>
              <span style={{ color: theme.textColor }}>No Conflict of Interest</span>
            </div>
            
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: `${theme.accentColor}10`,
                border: `1px solid ${theme.accentColor}20`,
              }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.accentColor}20` }}
              >
                <span style={{ color: theme.accentColor }}>✓</span>
              </div>
              <span style={{ color: theme.textColor }}>Transparent Disclosures</span>
            </div>
          </div>

          {/* Compliance Note */}
          <div 
            className="mt-12 p-4 rounded-xl max-w-2xl mx-auto"
            style={{
              backgroundColor: `${theme.background}90`,
              border: `1px solid ${theme.borderColor}`,
            }}
          >
            <p 
              className="text-sm"
              style={{ color: theme.lightText }}
            >
              <strong style={{ color: theme.textColor }}>Important:</strong> {userData.companyName} is a SEBI Registered Research Analyst (Registration No: {userData.regNumber}). 
              We provide research and analysis, not portfolio management services. 
              All investments are subject to market risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;