"use client";

import Link from "next/link";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { Target, Brain, Shield, TrendingUp, ArrowRight, Award, Target as TargetIcon, BookOpen } from "lucide-react";

const AboutPreview = () => {
  const theme = useTheme();

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{ background: theme.backgroundGradient }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: `${theme.primaryColor}15`,
              color: theme.primaryColor,
              border: `1px solid ${theme.primaryColor}30`,
            }}
          >
            <Target className="w-4 h-4" />
            SEBI Registered Research Analyst
          </div>
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: theme.textColor }}
          >
            Research-Driven{" "}
            <span style={{ color: theme.primaryColor }}>
              Wealth Management
            </span>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg"
            style={{ color: theme.lightText }}
          >
            {userData.companyName} combines financial expertise with practical market experience 
            to help investors build sustainable long-term wealth through disciplined investing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Leadership & Expertise */}
          <div className="h-full">
            <div 
              className="rounded-2xl p-8 border h-full"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 30px ${theme.primaryColor}08`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                  }}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: theme.textColor }}
                  >
                    Led by {userData.analyst.name}
                  </h3>
                  <p 
                    className="text-sm mt-1"
                    style={{ color: theme.lightText }}
                  >
                    SEBI Registration No: {userData.regNumber}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${theme.primaryColor}15` }}
                  >
                    <Brain className="w-5 h-5" style={{ color: theme.primaryColor }} />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Chartered Accountant Expertise
                    </h4>
                    <p style={{ color: theme.lightText }}>
                      Blending financial expertise with practical market experience for 
                      research-driven investment decisions focused on capital protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${theme.secondaryColor}15` }}
                  >
                    <TrendingUp className="w-5 h-5" style={{ color: theme.secondaryColor }} />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      {userData.analyst.experience} Market Experience
                    </h4>
                    <p style={{ color: theme.lightText }}>
                      Comprehensive experience across Equity, Futures & Options, 
                      Currency, and Commodity markets for well-rounded market understanding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${theme.accentColor}15` }}
                  >
                    <Shield className="w-5 h-5" style={{ color: theme.accentColor }} />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Risk-First Approach
                    </h4>
                    <p style={{ color: theme.lightText }}>
                      Capital protection as the primary objective, with all strategies 
                      structured around appropriate risk controls and sustainable returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Our Philosophy */}
          <div className="space-y-8">
            <div 
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: `${theme.primaryColor}08`,
                borderColor: `${theme.primaryColor}30`,
              }}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Our Investment Philosophy
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    text: "Goal-Based Wealth Management",
                    subtext: "Personalized solutions based on your financial objectives"
                  },
                  {
                    text: "Research-Driven Decision Making",
                    subtext: "All investments backed by thorough analysis and research"
                  },
                  {
                    text: "Focus on Capital Protection",
                    subtext: "Risk management as the foundation of all strategies"
                  },
                  {
                    text: "Disciplined, Logical Investing",
                    subtext: "Systematic approach avoiding emotional decisions"
                  },
                  {
                    text: "Sustainable Long-Term Growth",
                    subtext: "Building wealth through steady, responsible investing"
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: `${theme.primaryColor}20` }}
                    >
                      <BookOpen className="w-3 h-3" style={{ color: theme.primaryColor }} />
                    </div>
                    <div>
                      <span 
                        className="font-medium"
                        style={{ color: theme.textColor }}
                      >
                        {item.text}
                      </span>
                      <p 
                        className="text-sm mt-1"
                        style={{ color: theme.lightText }}
                      >
                        {item.subtext}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href="/about"
                className="group flex items-center justify-between w-full p-6 text-white rounded-2xl font-semibold transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                  boxShadow: `0 4px 20px ${theme.primaryColor}30`,
                }}
              >
                <div className="text-left">
                  <div className="text-sm opacity-90">Discover Our Approach</div>
                  <div className="text-xl">Sustainable Wealth Creation</div>
                </div>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
              
              <div className="mt-4 text-center">
                <p 
                  className="text-sm"
                  style={{ color: theme.lightText }}
                >
                  <span 
                    className="font-semibold"
                    style={{ color: theme.textColor }}
                  >
                    Our Commitment:
                  </span> Whether markets are volatile or stable, our objective remains the same — capital protection, steady growth, and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center">
          <div className="inline-block max-w-2xl">
            <div 
              className="text-3xl mb-2 opacity-30"
              style={{ color: theme.textColor }}
            >
              &apos;
            </div>
            <p 
              className="text-xl italic"
              style={{ color: theme.textColor }}
            >
              Wealth is built through discipline, patience, and informed decisions — not shortcuts. 
              {userData.companyName} guides investors toward sustainable financial growth.
            </p>
            <div 
              className="h-1 w-24 rounded-full mx-auto mt-6"
              style={{
                background: `linear-gradient(90deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;