'use client';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { Target, Eye, Shield, Brain, BarChart3, TrendingUp, ChevronRight, Award, Globe, Target as TargetIcon } from "lucide-react";

export default function About() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <main style={{ background: theme.backgroundGradient }}>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
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
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                About <span style={{ color: theme.primaryColor }}>{userData.companyName}</span>
              </h1>
              
              <p 
                className="text-xl"
                style={{ color: theme.lightText }}
              >
                A research-driven wealth management firm committed to sustainable long-term wealth building
              </p>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div 
                  className="h-1 w-24 rounded-full mx-auto mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                  }}
                ></div>
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{ color: theme.textColor }}
                >
                  Our Mission
                </h2>
              </div>

              <div className="space-y-6">
                <p 
                  className="text-xl leading-relaxed"
                  style={{ color: theme.textColor }}
                >
                  {userData.companyName} is a research-driven wealth management firm committed to helping 
                  investors build sustainable long-term wealth through disciplined and logical investing.
                </p>

                <p style={{ color: theme.lightText }}>
                  It is managed by {userData.analyst.name}, a SEBI Registered Research Analyst with over 
                  {userData.analyst.experience} of experience across Equity, Futures & Options, Currency, 
                  and Commodity markets.
                </p>

                <div 
                  className="rounded-2xl p-8 my-8 border-l-4"
                  style={{
                    backgroundColor: `${theme.primaryColor}08`,
                    borderLeftColor: theme.primaryColor,
                    border: `1px solid ${theme.borderColor}`,
                  }}
                >
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: theme.textColor }}
                  >
                    Our Leadership
                  </h3>
                  <p style={{ color: theme.lightText }}>
                    {userData.analyst.name} is a Chartered Accountant by qualification, bringing a rare blend 
                    of financial expertise and practical market experience. His research-driven, disciplined 
                    approach focuses on capital protection, risk management, and sustainable returns, making 
                    him a trusted guide for investors navigating dynamic markets.
                  </p>
                </div>

                <p style={{ color: theme.lightText }}>
                  At {userData.companyName}, we focus on understanding each client&apos;s financial goals, 
                  risk appetite, and time horizon before designing personalized investment solutions. 
                  Whether markets are volatile or stable, our objective remains the same — capital protection, 
                  steady growth, and transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Focus On */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our Core Principles
              </h2>
              <p 
                className="text-xl max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                The foundation of our wealth management philosophy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Research-Driven Approach",
                  description: "All investment decisions backed by comprehensive analysis",
                  icon: <BarChart3 className="w-6 h-6" />,
                },
                {
                  title: "Capital Protection",
                  description: "Risk management as the foundation of all strategies",
                  icon: <Shield className="w-6 h-6" />,
                },
                {
                  title: "Disciplined Investing",
                  description: "Logical, systematic approach to wealth creation",
                  icon: <Brain className="w-6 h-6" />,
                },
                {
                  title: "Sustainable Growth",
                  description: "Focus on long-term, steady wealth building",
                  icon: <TrendingUp className="w-6 h-6" />,
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`,
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: theme.textColor }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: theme.lightText }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Qualifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span 
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: theme.primaryColor }}
                  >
                    Leadership
                  </span>
                </div>
                <h2 
                  className="text-3xl font-bold mb-8"
                  style={{ color: theme.textColor }}
                >
                  {userData.analyst.name}
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      statement: "SEBI Registered Research Analyst",
                      description: "Registration No: INH000021508"
                    },
                    {
                      statement: "Chartered Accountant (CA)",
                      description: "Professional financial qualification"
                    },
                    {
                      statement: "8+ Years Market Experience",
                      description: "Across Equity, F&O, Currency, and Commodity markets"
                    },
                    {
                      statement: "Research-Driven Approach",
                      description: "Focus on capital protection and sustainable returns"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${theme.primaryColor}15` }}
                        >
                          <Award className="w-5 h-5" style={{ color: theme.primaryColor }} />
                        </div>
                      </div>
                      <div>
                        <h3 
                          className="text-lg font-semibold mb-2"
                          style={{ color: theme.textColor }}
                        >
                          {item.statement}
                        </h3>
                        <p style={{ color: theme.lightText }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div 
                  className="rounded-3xl p-12 border-2"
                  style={{
                    backgroundColor: `${theme.primaryColor}08`,
                    borderColor: `${theme.primaryColor}30`,
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        backgroundColor: `${theme.primaryColor}15`,
                        border: `2px solid ${theme.primaryColor}30`,
                      }}
                    >
                      <Globe className="w-10 h-10" style={{ color: theme.primaryColor }} />
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-6"
                      style={{ color: theme.textColor }}
                    >
                      Our Commitment to Clients
                    </h3>
                    <div className="space-y-4">
                      <p style={{ color: theme.lightText }}>Personalized investment solutions</p>
                      <p style={{ color: theme.lightText }}>Transparent communication and reporting</p>
                      <p style={{ color: theme.lightText }}>Focus on long-term wealth creation</p>
                      <p style={{ color: theme.lightText }}>Regular portfolio reviews and adjustments</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute -top-4 -right-4 px-6 py-3 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    color: "white",
                    boxShadow: `0 4px 20px ${theme.primaryColor}40`,
                  }}
                >
                  <p className="font-bold">SEBI Registered</p>
                  <p className="text-sm opacity-90">{userData.regNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our Investment Philosophy
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                A disciplined framework for sustainable wealth creation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Goal-Based Planning",
                  description: "Understanding each client's financial objectives, time horizon, and risk tolerance before designing investment strategies.",
                  icon: <TargetIcon className="w-8 h-8" />
                },
                {
                  title: "Risk Management First",
                  description: "Capital protection as the primary objective, with all investments structured around appropriate risk controls.",
                  icon: <Shield className="w-8 h-8" />
                },
                {
                  title: "Research-Backed Decisions",
                  description: "Every investment recommendation supported by thorough analysis of fundamentals, valuations, and market trends.",
                  icon: <Brain className="w-8 h-8" />
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ color: theme.textColor }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: theme.lightText }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Eye className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready for Research-Driven Wealth Management?
              </h2>
              
              <p className="text-xl mb-8 opacity-90">
                Connect with a SEBI Registered Research Analyst for disciplined, 
                sustainable wealth creation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
                  style={{
                    background: "white",
                    color: theme.primaryColor,
                    boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
                  }}
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/services"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
              
              <p className="mt-8 text-sm opacity-80">
                SEBI Registration: {userData.regNumber} • Managed by: {userData.analyst.name}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}