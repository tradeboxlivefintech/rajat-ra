import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { 
  TrendingUp, 
  PieChart, 
  Target, 
  Clock, 
  AlertTriangle, 
  Check, 
  Users,
  BarChart3,
  LineChart,
  DollarSign,
  ArrowRight,
  Shield,
  Zap,
  Crown,
  Calendar,
  ChevronRight,
  ExternalLink,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const theme = useTheme();

  // Updated service icons with more variety
  const serviceIcons = [
    <BarChart3 key="bar-chart" className="w-8 h-8" />,
    <LineChart key="line-chart" className="w-8 h-8" />,
    <TrendingUp key="trending" className="w-8 h-8" />,
    <Zap key="zap" className="w-8 h-8" />
  ];

  // Service images - CORRECTED PATHS (images are in public root)
  const serviceImages = [
    "/alpha-options.jpg",
    "/alpha-growth.jpg",
    "/alpha-value.jpg",
    "/alpha-swing.jpg"
  ];

  // Purchase links for each service (replace with actual links)
  const purchaseLinks = {
    1: "https://tradeboxlive.com/view/services/69762edfaeb1695bad49453d",
    2: "https://tradeboxlive.com/view/services/697629dfaeb1695bad4943ed", 
    3: "https://tradeboxlive.com/view/services/69762594aeb1695bad494267",
    4: "https://tradeboxlive.com/view/services/697620b6aeb1695bad494076"
  };

  const services = [
    {
      id: 1,
      title: "AlphaOptions – Nifty Derivatives Strategy",
      tagline: "Structured Options Trading",
      description: "Research-driven Nifty derivatives trading service focused on deploying risk-defined options strategies across each expiry cycle.",
      segment: "Derivatives",
      riskLevel: "Medium",
      minimumCapital: "₹1,00,000",
      strategies: [
        "Iron Condors",
        "Iron Flys",
        "Call and Put Spreads",
        "Other Structured Strategies"
      ],
      keyFeatures: [
        "Nifty-Focused Derivatives Research",
        "Option Chain & Open Interest Analysis",
        "Options Greeks-Based Decision Making",
        "Expiry-Based Trade Planning",
        "Disciplined Risk Management"
      ],
      bonusFeatures: [
        "2–3 trades per expiry cycle",
        "Weekly market outlook",
        "Risk management guidelines"
      ],
      plans: [
        { 
          validity: "30 Days", 
          price: "₹999",
          popular: false
        },
        { 
          validity: "60 Days", 
          price: "₹1,899",
          popular: false
        },
        { 
          validity: "90 Days", 
          price: "₹2,599",
          popular: true
        },
        { 
          validity: "180 Days", 
          price: "₹4,999",
          popular: false
        }
      ],
      image: serviceImages[0],
      color: "blue"
    },
    {
      id: 2,
      title: "AlphaGrowth-Portfolio Rebalance",
      tagline: "Growth Stock Portfolio",
      description: "A curated 10-15 stock portfolio basket targeting small and large cap companies with high growth potential.",
      segment: "Equity",
      riskLevel: "Medium-High",
      minimumCapital: "₹50,000",
      portfolioSize: "10-15 stocks",
      holdingPeriod: "Periodic Rebalancing",
      keyFeatures: [
        "Portfolio size is 10–15 stocks",
        "Small and Mid-cap focus",
        "Quarterly rebalancing",
        "Fundamental analysis reports"
      ],
      bonusFeatures: [
        "Growth-oriented strategy",
        "Suitable for busy professionals",
        "Monthly performance review"
      ],
      plans: [
        { 
          validity: "30 days", 
          price: "₹1,999",
          popular: false
        },
        { 
          validity: "60 days", 
          price: "₹3,499",
          popular: true
        },
        { 
          validity: "180 days", 
          price: "₹9,999",
          popular: false
        }
      ],
      image: serviceImages[1],
      color: "green"
    },
    {
      id: 3,
      title: "AlphaValue – Long-Term Research",
      tagline: "Quality Business Investing",
      description: "Long-term equity research focused on identifying high-quality businesses with sustainable growth potential.",
      segment: "Equity",
      riskLevel: "Low-Medium",
      minimumCapital: "₹50,000",
      stockIdeas: "1-2 per month",
      holdingPeriod: "> 6 months",
      keyFeatures: [
        "1–2 stock ideas per month",
        "6+ months holding period",
        "Deep fundamental analysis",
        "Valuation models"
      ],
      bonusFeatures: [
        "High-quality growth businesses",
        "Steady compounding focus",
        "Long-term wealth creation"
      ],
      plans: [
        { 
          validity: "30 days", 
          price: "₹999",
          popular: false
        },
        { 
          validity: "60 days", 
          price: "₹1,899",
          popular: false
        },
        { 
          validity: "180 days", 
          price: "₹4,999",
          popular: true
        }
      ],
      image: serviceImages[2],
      color: "purple"
    },
    {
      id: 4,
      title: "AlphaSwing-Swing Trading",
      tagline: "Momentum & Breakout Trading",
      description: "Focused swing trading service designed to identify high-strength stocks exhibiting early momentum breakout signals.",
      segment: "Equity",
      riskLevel: "High",
      minimumCapital: "₹50,000",
      stockIdeas: "6-8 per month",
      holdingPeriod: "3-15 days",
      keyFeatures: [
        "6–8 stocks per month",
        "3–15 days holding period",
        "Technical analysis focus",
        "Risk-reward optimization"
      ],
      bonusFeatures: [
        "Swing Trading strategy",
        "Price Action based signals",
        "Daily market analysis"
      ],
      plans: [
        { 
          validity: "30 days", 
          price: "₹1,499",
          popular: false
        },
        { 
          validity: "60 days", 
          price: "₹2,499",
          popular: true
        },
        { 
          validity: "180 days", 
          price: "₹6,999",
          popular: false
        }
      ],
      image: serviceImages[3],
      color: "orange"
    }
  ];

  const processSteps = [
    {
      key: "step-1",
      step: "01",
      title: "Requirement Analysis",
      description: "Understand client objectives and risk profile",
      icon: <Target className="w-6 h-6" />
    },
    {
      key: "step-2",
      step: "02",
      title: "Research & Analysis",
      description: "Comprehensive fundamental and technical analysis",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      key: "step-3", 
      step: "03",
      title: "Recommendations",
      description: "Buy/Sell/Hold recommendations with rationale",
      icon: <Check className="w-6 h-6" />
    },
    {
      key: "step-4",
      step: "04",
      title: "Regular Updates",
      description: "Ongoing monitoring and portfolio reviews",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const limitationsList = [
    {
      key: "limitation-1",
      text: "We DO NOT manage client funds or portfolios",
      isNegative: true
    },
    {
      key: "limitation-2",
      text: "We DO NOT execute trades on behalf of clients",
      isNegative: true
    },
    {
      key: "limitation-3",
      text: "We DO NOT provide portfolio management services",
      isNegative: true
    },
    {
      key: "limitation-4",
      text: "We DO NOT guarantee returns or assure profits",
      isNegative: true
    },
    {
      key: "limitation-5",
      text: "We ONLY provide research reports and investment advice",
      isNegative: false
    }
  ];

  return (
    <>
      <Header />
      <main style={{ background: theme.backgroundGradient }}>
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Choose Your <span style={{ color: theme.primaryColor }}>Alpha Strategy</span>
              </h2>
              <p 
                className="max-w-2xl mx-auto text-lg"
                style={{ color: theme.lightText }}
              >
                Select from our range of research-backed investment services designed for various market conditions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={`service-${service.id}`}
                  className="rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl group"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                  }}
                >
                  {/* Service Header with Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    {/* Service Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                      {/* Gradient Overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)`,
                        }}
                      ></div>
                    </div>
                    
                    {/* Service Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/20 shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${theme.primaryColor}50 0%, ${theme.secondaryColor}50 100%)`,
                        }}
                      >
                        {serviceIcons[index] || <BarChart3 className="w-10 h-10 text-white" />}
                      </div>
                    </div>
                    
                    {/* Segment and Risk Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <div className="flex gap-2">
                        <span 
                          className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20"
                          style={{
                            backgroundColor: `${theme.primaryColor}90`,
                            color: "white",
                          }}
                        >
                          {service.segment}
                        </span>
                        <span 
                          className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20"
                          style={{
                            backgroundColor: `${theme.background}90`,
                            color: theme.textColor,
                          }}
                        >
                          Risk: {service.riskLevel}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tagline at Bottom */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <span 
                        className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20"
                        style={{
                          backgroundColor: `${theme.background}90`,
                          color: theme.primaryColor,
                        }}
                      >
                        {service.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ color: theme.textColor }}
                    >
                      {service.title}
                    </h3>
                    
                    <p 
                      className="mb-6 text-gray-600 dark:text-gray-300"
                    >
                      {service.description}
                    </p>
                    
                    {/* Service Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${theme.primaryColor}08` }}>
                        <DollarSign className="w-5 h-5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                        <div>
                          <p className="text-xs" style={{ color: theme.lightText }}>Min. Capital</p>
                          <p className="font-bold" style={{ color: theme.textColor }}>{service.minimumCapital}</p>
                        </div>
                      </div>
                      
                      {service.stockIdeas && (
                        <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${theme.primaryColor}08` }}>
                          <Target className="w-5 h-5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                          <div>
                            <p className="text-xs" style={{ color: theme.lightText }}>Stock Ideas</p>
                            <p className="font-bold" style={{ color: theme.textColor }}>{service.stockIdeas}</p>
                          </div>
                        </div>
                      )}
                      
                      {service.holdingPeriod && (
                        <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${theme.primaryColor}08` }}>
                          <Clock className="w-5 h-5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                          <div>
                            <p className="text-xs" style={{ color: theme.lightText }}>Holding Period</p>
                            <p className="font-bold" style={{ color: theme.textColor }}>{service.holdingPeriod}</p>
                          </div>
                        </div>
                      )}
                      
                      {service.portfolioSize && (
                        <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${theme.primaryColor}08` }}>
                          <PieChart className="w-5 h-5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                          <div>
                            <p className="text-xs" style={{ color: theme.lightText }}>Portfolio Size</p>
                            <p className="font-bold" style={{ color: theme.textColor }}>{service.portfolioSize}</p>
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
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.keyFeatures.map((feature, i) => (
                          <li key={`feature-${service.id}-${i}`} className="flex items-start gap-3">
                            <span 
                              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ 
                                backgroundColor: `${theme.primaryColor}15`,
                                color: theme.primaryColor
                              }}
                            >
                              <Check className="w-4 h-4" />
                            </span>
                            <span className="text-sm" style={{ color: theme.lightText }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Strategies */}
                    {service.strategies && (
                      <div className="mb-6">
                        <h4 
                          className="font-semibold mb-3 flex items-center gap-2"
                          style={{ color: theme.textColor }}
                        >
                          <BarChart3 className="w-4 h-4" style={{ color: theme.primaryColor }} />
                          Strategies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.strategies.map((strategy, i) => (
                            <span 
                              key={`strategy-${service.id}-${i}`}
                              className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:opacity-90"
                              style={{
                                backgroundColor: `${theme.secondaryColor}15`,
                                color: theme.secondaryColor,
                                border: `1px solid ${theme.secondaryColor}30`,
                              }}
                            >
                              {strategy}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Pricing Plans */}
                    <div className="pt-6 border-t" style={{ borderTopColor: theme.borderColor }}>
                      <h4 
                        className="font-semibold mb-4 flex items-center gap-2"
                        style={{ color: theme.textColor }}
                      >
                        <Calendar className="w-4 h-4" style={{ color: theme.primaryColor }} />
                        Choose Your Plan (Excl. GST):
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {service.plans.map((plan, i) => (
                          <div 
                            key={`plan-${service.id}-${i}`}
                            className={`p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg relative ${
                              plan.popular ? 'border-2' : 'border'
                            }`}
                            style={{
                              backgroundColor: plan.popular ? `${theme.primaryColor}10` : `${theme.primaryColor}05`,
                              borderColor: plan.popular ? theme.primaryColor : `${theme.primaryColor}20`,
                              boxShadow: plan.popular ? `0 4px 20px ${theme.primaryColor}20` : 'none',
                            }}
                          >
                            {plan.popular && (
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                                <span 
                                  className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
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
                            <p className="text-sm mb-1" style={{ color: theme.lightText }}>
                              {plan.validity}
                            </p>
                            <p 
                              className="text-2xl font-bold mb-3"
                              style={{ color: theme.primaryColor }}
                            >
                              {plan.price}
                            </p>
                            
                            {/* Purchase Button for Each Plan */}
                            <a
                              href={`${purchaseLinks[service.id]}?plan=${plan.validity.toLowerCase().replace(' ', '-')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                                plan.popular 
                                  ? 'hover:opacity-90' 
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`}
                              style={{
                                backgroundColor: plan.popular ? theme.primaryColor : 'transparent',
                                color: plan.popular ? 'white' : theme.primaryColor,
                                border: plan.popular ? 'none' : `1px solid ${theme.primaryColor}50`,
                              }}
                            >
                              Purchase
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        ))}
                      </div>
                      
                      {/* Main Purchase Button */}
                      <a
                        href={purchaseLinks[service.id]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                          color: 'white',
                        }}
                      >
                        <span>Get Started Now</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      
                      <p className="text-xs text-center mt-3" style={{ color: theme.lightText }}>
                        All prices exclusive of GST • Secure payment gateway • Instant access
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 relative">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}05 0%, ${theme.secondaryColor}05 100%)`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${theme.primaryColor}15`,
                  color: theme.primaryColor,
                }}
              >
                <Clock className="w-5 h-5" />
                How It Works
              </div>
              
              <h2 
                className="text-4xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our <span style={{ color: theme.primaryColor }}>4-Step</span> Process
              </h2>
              <p 
                className="max-w-2xl mx-auto text-lg"
                style={{ color: theme.lightText }}
              >
                From analysis to execution, follow our systematic approach to informed investing
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.key} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5" style={{ backgroundColor: theme.primaryColor }}></div>
                  )}
                  
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div 
                        className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor}100%)`,
                          boxShadow: `0 10px 30px ${theme.primaryColor}30`,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div 
                        className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          backgroundColor: theme.background,
                          color: theme.primaryColor,
                          border: `2px solid ${theme.primaryColor}`,
                        }}
                      >
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: theme.textColor }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm" style={{ color: theme.lightText }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We DON'T Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-4xl font-bold mb-4"
                  style={{ color: theme.textColor }}
                >
                  Important <span style={{ color: theme.primaryColor }}>Disclosures</span>
                </h2>
                <p 
                  className="text-lg max-w-2xl mx-auto"
                  style={{ color: theme.lightText }}
                >
                  As a SEBI Registered Research Analyst, its crucial to understand our scope of services
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border" style={{ borderColor: theme.borderColor }}>
                {/* Header */}
                <div 
                  className="p-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}10 0%, ${theme.secondaryColor}10 100%)`,
                    borderBottom: `1px solid ${theme.borderColor}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${theme.primaryColor}20` }}
                      >
                        <AlertTriangle className="w-6 h-6" style={{ color: theme.primaryColor }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: theme.textColor }}>
                          Regulatory Disclosures
                        </h3>
                        <p className="text-sm" style={{ color: theme.lightText }}>
                          SEBI Registration: {userData.regNumber}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" style={{ color: theme.primaryColor }} />
                      <span className="text-sm font-medium" style={{ color: theme.primaryColor }}>
                        Compliant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* What We DON'T Do */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: theme.textColor }}>
                        <span className="text-red-500">✗</span>
                        What We DON&apos;T Do
                      </h4>
                      <ul className="space-y-3">
                        {limitationsList.slice(0, 4).map((item) => (
                          <li key={item.key} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: `${theme.primaryColor}05` }}>
                            <span className="text-red-500 mt-1">✗</span>
                            <span style={{ color: theme.textColor }}>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What We DO */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: theme.textColor }}>
                        <span className="text-green-500">✓</span>
                        What We DO
                      </h4>
                      <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: `${theme.primaryColor}05` }}>
                        <li className="flex items-start gap-3 p-3">
                          <span className="text-green-500 mt-1">✓</span>
                          <span style={{ color: theme.textColor }}>{limitationsList[4].text}</span>
                        </li>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl" style={{ backgroundColor: `${theme.primaryColor}08` }}>
                          <p className="text-sm" style={{ color: theme.lightText }}>
                            This distinction is important as per SEBI regulations. Research Analysts provide advice while Investment Advisors may manage funds (with separate registration).
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-xl border" style={{ borderColor: theme.borderColor }}>
                          <p className="text-sm font-medium" style={{ color: theme.textColor }}>
                            Compliance Officer: {userData.compliance.officer.name}
                          </p>
                          <p className="text-xs mt-1" style={{ color: theme.lightText }}>
                            {userData.compliance.officer.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
            }}
          ></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{ backgroundColor: theme.secondaryColor }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{ backgroundColor: theme.primaryColor }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Crown className="w-12 h-12" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Start Your Alpha Journey Today!
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join hundreds of successful investors using our research-driven strategies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold transition-all duration-300 hover:opacity-90 hover:shadow-2xl"
                >
                  <Users className="w-5 h-5" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {services.map(service => (
                  <a
                    key={`cta-${service.id}`}
                    href={purchaseLinks[service.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
                  >
                    {serviceIcons[service.id - 1]}
                    <span className="font-medium">{service.title.split('–')[0]}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              
              <p className="mt-12 text-sm opacity-80">
                SEBI Registration: {userData.regNumber} • Compliance Officer: {userData.compliance.officer.name}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}