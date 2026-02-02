"use client";

import { useTheme } from "@/utils/theme";
import { 
  BarChart3,
  LineChart,
  TrendingUp,
  Zap,
  DollarSign,
  Target,
  Clock,
  PieChart,
  ArrowRight,
  Calendar,
  Crown,
  Sparkles,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesGrid = ({ limit = 3, showAll = false, compact = false }) => {
  const theme = useTheme();

  // Service icons
  const serviceIcons = [
    <BarChart3 key="bar-chart" className="w-6 h-6" />,
    <LineChart key="line-chart" className="w-6 h-6" />,
    <TrendingUp key="trending" className="w-6 h-6" />,
    <Zap key="zap" className="w-6 h-6" />
  ];

  // Service images
  const serviceImages = [
    "/alpha-options.jpg",
    "/alpha-growth.jpg",
    "/alpha-value.jpg",
    "/alpha-swing.jpg"
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "AlphaOptions",
      subtitle: "Nifty Derivatives Strategy",
      description: "Research-driven Nifty derivatives trading with risk-defined options strategies.",
      segment: "Derivatives",
      riskLevel: "Medium",
      minimumCapital: "₹1,00,000",
      strategies: ["Iron Condors", "Call/Put Spreads"],
      keyFeatures: [
        "Nifty-Focused Research",
        "Option Chain Analysis",
        "Risk Management"
      ],
      plans: [
        { validity: "30 Days", price: "₹999" },
        { validity: "90 Days", price: "₹2,599", popular: true }
      ],
      image: serviceImages[0]
    },
    {
      id: 2,
      title: "AlphaGrowth",
      subtitle: "Portfolio Rebalance",
      description: "Curated 10-15 stock portfolio targeting high-growth companies.",
      segment: "Equity",
      riskLevel: "Medium-High",
      minimumCapital: "₹50,000",
      portfolioSize: "10-15 stocks",
      keyFeatures: [
        "Small & Mid-cap focus",
        "Quarterly rebalancing",
        "Fundamental analysis"
      ],
      plans: [
        { validity: "60 days", price: "₹3,499", popular: true },
        { validity: "180 days", price: "₹9,999" }
      ],
      image: serviceImages[1]
    },
    {
      id: 3,
      title: "AlphaValue",
      subtitle: "Long-Term Research",
      description: "Long-term equity research focused on sustainable growth businesses.",
      segment: "Equity",
      riskLevel: "Low-Medium",
      minimumCapital: "₹50,000",
      stockIdeas: "1-2 per month",
      holdingPeriod: "> 6 months",
      keyFeatures: [
        "Quality stock picks",
        "Deep analysis",
        "Long-term focus"
      ],
      plans: [
        { validity: "60 days", price: "₹1,899" },
        { validity: "180 days", price: "₹4,999", popular: true }
      ],
      image: serviceImages[2]
    },
    {
      id: 4,
      title: "AlphaSwing",
      subtitle: "Swing Trading",
      description: "Swing trading service for momentum-driven stock opportunities.",
      segment: "Equity",
      riskLevel: "High",
      minimumCapital: "₹50,000",
      stockIdeas: "6-8 per month",
      holdingPeriod: "3-15 days",
      keyFeatures: [
        "Technical analysis",
        "Momentum focus",
        "Risk management"
      ],
      plans: [
        { validity: "60 days", price: "₹2,499", popular: true },
        { validity: "180 days", price: "₹6,999" }
      ],
      image: serviceImages[3]
    }
  ];

  // Get segment color
  const getSegmentColor = (segment) => {
    switch(segment) {
      case 'Derivatives': return theme.primaryColor;
      case 'Equity': return theme.secondaryColor;
      default: return theme.primaryColor;
    }
  };

  // Get risk level color
  const getRiskColor = (risk) => {
    switch(risk) {
      case 'Low-Medium': return '#10B981';
      case 'Medium': return '#F59E0B';
      case 'Medium-High': return '#F97316';
      case 'High': return '#EF4444';
      default: return theme.primaryColor;
    }
  };

  // Limit services for homepage
  const displayServices = showAll ? services : services.slice(0, limit);

  return (
    <section 
      className="py-16"
      style={{
        background: theme.backgroundGradient,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Our <span style={{ color: theme.primaryColor }}>Investment</span> Services
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{ color: theme.lightText }}
          >
            Choose from our research-backed strategies designed for different market conditions and risk profiles
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid ${showAll && !compact ? 'lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {displayServices.map((service, index) => (
            <div
              key={`service-${service.id}`}
              className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl group"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 30px ${theme.primaryColor}08`,
              }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    }}
                  >
                    {serviceIcons[index] || <BarChart3 className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 
                        className="text-xl font-bold"
                        style={{ color: theme.textColor }}
                      >
                        {service.title}
                      </h3>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${getSegmentColor(service.segment)}15`,
                          color: getSegmentColor(service.segment),
                          border: `1px solid ${getSegmentColor(service.segment)}30`,
                        }}
                      >
                        {service.segment}
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: theme.primaryColor }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Risk Indicator */}
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${getRiskColor(service.riskLevel)}15`,
                    color: getRiskColor(service.riskLevel),
                    border: `1px solid ${getRiskColor(service.riskLevel)}30`,
                  }}
                >
                  Risk: {service.riskLevel}
                </span>
              </div>

              {/* Description */}
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: theme.lightText }}
              >
                {service.description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" style={{ color: theme.primaryColor }} />
                  <div>
                    <p className="text-xs" style={{ color: theme.lightText }}>Min. Capital</p>
                    <p className="font-bold text-sm" style={{ color: theme.textColor }}>{service.minimumCapital}</p>
                  </div>
                </div>
                
                {service.stockIdeas && (
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" style={{ color: theme.primaryColor }} />
                    <div>
                      <p className="text-xs" style={{ color: theme.lightText }}>Ideas/Month</p>
                      <p className="font-bold text-sm" style={{ color: theme.textColor }}>{service.stockIdeas}</p>
                    </div>
                  </div>
                )}
                
                {service.portfolioSize && (
                  <div className="flex items-center gap-2">
                    <PieChart className="w-4 h-4" style={{ color: theme.primaryColor }} />
                    <div>
                      <p className="text-xs" style={{ color: theme.lightText }}>Portfolio Size</p>
                      <p className="font-bold text-sm" style={{ color: theme.textColor }}>{service.portfolioSize}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ color: theme.textColor }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: theme.primaryColor }} />
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.keyFeatures.slice(0, compact ? 2 : 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                      <span className="text-sm" style={{ color: theme.lightText }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Plans */}
              <div className="pt-6 border-t" style={{ borderTopColor: theme.borderColor }}>
                <div className="flex items-center justify-between mb-4">
                  <h4 
                    className="font-semibold flex items-center gap-2"
                    style={{ color: theme.textColor }}
                  >
                    <Calendar className="w-4 h-4" style={{ color: theme.primaryColor }} />
                    Plan Options
                  </h4>
                  <Link
                    href={`/services#service-${service.id}`}
                    className="text-xs font-medium flex items-center gap-1 group"
                    style={{ color: theme.primaryColor }}
                  >
                    Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.plans.map((plan, i) => (
                    <div 
                      key={i}
                      className={`p-3 rounded-lg text-center relative ${plan.popular ? 'border-2' : 'border'}`}
                      style={{
                        backgroundColor: plan.popular ? `${theme.primaryColor}10` : 'transparent',
                        borderColor: plan.popular ? theme.primaryColor : theme.borderColor,
                      }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span 
                            className="px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1"
                            style={{
                              backgroundColor: theme.primaryColor,
                              color: 'white',
                            }}
                          >
                            <Crown className="w-3 h-3" />
                            POPULAR
                          </span>
                        </div>
                      )}
                      <p className="text-xs mb-1" style={{ color: theme.lightText }}>
                        {plan.validity}
                      </p>
                      <p 
                        className="text-lg font-bold"
                        style={{ color: theme.primaryColor }}
                      >
                        {plan.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={`/services#service-${service.id}`}
                className="mt-6 w-full py-3 rounded-xl font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{
                  backgroundColor: `${theme.primaryColor}10`,
                  color: theme.primaryColor,
                  border: `1px solid ${theme.primaryColor}30`,
                }}
              >
                Explore Service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button (only shown on homepage with limit) */}
        {!showAll && services.length > limit && (
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-medium transition-all duration-300 group"
              style={{
                backgroundColor: `${theme.primaryColor}10`,
                color: theme.primaryColor,
                border: `1px solid ${theme.primaryColor}30`,
              }}
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;