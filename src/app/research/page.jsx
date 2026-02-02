import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { FileText, BarChart3, TrendingUp, Shield, Scale, DollarSign, Target, Search, Monitor, AlertTriangle, CheckCircle, Eye, ChartBar, Filter, TrendingUp as TrendingUpIcon, TrendingDown } from "lucide-react";

export default function Research() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <main style={{ background: theme.backgroundGradient }}>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
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
              
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Research <span style={{ color: theme.primaryColor }}>Methodology</span>
              </h1>
              
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: theme.lightText }}
              >
                A structured, research-driven approach combining fundamental analysis, technical validation, and risk assessment
              </p>
            </div>
          </div>
        </section>

        {/* Research Process Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div 
              className="rounded-2xl p-8 border max-w-4xl mx-auto"
              style={{
                backgroundColor: `${theme.primaryColor}08`,
                borderColor: `${theme.primaryColor}30`,
                borderLeft: `4px solid ${theme.primaryColor}`,
              }}
            >
              <p className="text-lg" style={{ color: theme.textColor }}>
                {userData.companyName} follows a structured, research-driven approach combining fundamental analysis, 
                technical validation, and risk assessment. Our research is prepared in compliance with SEBI (Research Analyst) 
                Regulations and is purely informational, with no execution, PMS, or discretionary portfolio management.
              </p>
            </div>
          </div>
        </section>

        {/* Research Methodology Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our Research Process
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                A systematic approach to identifying and evaluating investment opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "1. Idea Generation",
                  subtitle: "Business & Sector Screening",
                  icon: <Search className="w-8 h-8" />,
                  description: "We identify investment ideas through comprehensive business and sector screening processes",
                  items: [
                    "Industry trend analysis",
                    "Market opportunity assessment",
                    "Competitive landscape mapping",
                    "Macro-economic factor consideration"
                  ]
                },
                {
                  title: "2. Fundamental Evaluation",
                  subtitle: "Company Assessment",
                  icon: <BarChart3 className="w-8 h-8" />,
                  description: "Evaluate companies on earnings quality, balance sheet strength, scalability, and governance",
                  items: [
                    "Earnings quality analysis",
                    "Balance sheet strength assessment",
                    "Scalability potential evaluation",
                    "Corporate governance review"
                  ]
                },
                {
                  title: "3. Technical Validation",
                  subtitle: "Price Trend Analysis",
                  icon: <ChartBar className="w-8 h-8" />,
                  description: "Validate views using price trends, momentum, and volume analysis",
                  items: [
                    "Trend analysis and confirmation",
                    "Momentum indicator assessment",
                    "Volume pattern analysis",
                    "Support/resistance identification"
                  ]
                }
              ].map((method, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    }}
                  >
                    {method.icon}
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.textColor }}
                  >
                    {method.title}
                  </h3>
                  <p 
                    className="text-sm font-medium mb-4"
                    style={{ color: theme.primaryColor }}
                  >
                    {method.subtitle}
                  </p>
                  
                  <p className="mb-6" style={{ color: theme.lightText }}>
                    {method.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {method.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                        <span style={{ color: theme.lightText }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Management Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Risk Management Framework
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Proactive risk assessment integrated throughout our research process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    title: "4. Risk Identification",
                    description: "All risks are identified upfront before any investment decision",
                    icon: <AlertTriangle className="w-6 h-6" />,
                    color: theme.primaryColor
                  },
                  {
                    title: "5. Position Sizing",
                    description: "Positions are indicatively sized based on risk-reward parameters",
                    icon: <Filter className="w-6 h-6" />,
                    color: theme.secondaryColor
                  },
                  {
                    title: "6. Continuous Monitoring",
                    description: "Ideas are continuously monitored for changes in fundamentals, market conditions, and risk-reward dynamics",
                    icon: <Monitor className="w-6 h-6" />,
                    color: theme.accentColor
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-6 rounded-xl border"
                    style={{
                      backgroundColor: `${step.color}08`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <div style={{ color: step.color }}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ color: theme.lightText }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${theme.primaryColor}15` }}
                  >
                    <Shield className="w-6 h-6" style={{ color: theme.primaryColor }} />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Key Risk Parameters
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Market risk assessment",
                    "Liquidity risk evaluation",
                    "Company-specific risk factors",
                    "Sector-specific challenges",
                    "Regulatory risk consideration",
                    "Macro-economic risk analysis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" style={{ color: theme.primaryColor }} />
                      <span style={{ color: theme.lightText }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Research Reports */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Sample <span style={{ color: theme.primaryColor }}>Research Reports</span>
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Examples of our comprehensive research analysis and reporting style
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technology Sector Analysis",
                  sector: "Information Technology",
                  recommendation: "BUY",
                  date: "March 2024",
                  features: ["Deep Fundamental Analysis", "Valuation Modeling", "Growth Outlook"],
                  trend: "positive"
                },
                {
                  title: "Banking Sector Review",
                  sector: "Banking & Financial Services",
                  recommendation: "ACCUMULATE",
                  date: "February 2024",
                  features: ["NPA Trend Analysis", "Margin Assessment", "Digital Transformation"],
                  trend: "neutral"
                },
                {
                  title: "Pharma Sector Outlook",
                  sector: "Pharmaceuticals",
                  recommendation: "BUY",
                  date: "January 2024",
                  features: ["Pipeline Analysis", "Export Market Study", "Regulatory Review"],
                  trend: "positive"
                }
              ].map((report, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 
                        className="text-lg font-bold mb-1"
                        style={{ color: theme.textColor }}
                      >
                        {report.title}
                      </h3>
                      <p className="text-sm" style={{ color: theme.lightText }}>{report.sector}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {report.trend === "positive" && (
                        <TrendingUpIcon className="w-4 h-4" style={{ color: theme.primaryColor }} />
                      )}
                      {report.trend === "neutral" && (
                        <TrendingUpIcon className="w-4 h-4" style={{ color: theme.secondaryColor }} />
                      )}
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: report.recommendation === "BUY" 
                            ? `${theme.primaryColor}15`
                            : report.recommendation === "ACCUMULATE"
                            ? `${theme.secondaryColor}15`
                            : `${theme.accentColor}15`,
                          color: report.recommendation === "BUY" 
                            ? theme.primaryColor
                            : report.recommendation === "ACCUMULATE"
                            ? theme.secondaryColor
                            : theme.accentColor,
                          border: report.recommendation === "BUY" 
                            ? `1px solid ${theme.primaryColor}30`
                            : report.recommendation === "ACCUMULATE"
                            ? `1px solid ${theme.secondaryColor}30`
                            : `1px solid ${theme.accentColor}30`,
                        }}
                      >
                        {report.recommendation}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 
                      className="text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Analysis Includes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {report.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: `${theme.primaryColor}10`,
                            color: theme.lightText,
                            border: `1px solid ${theme.borderColor}`,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4" style={{ borderTopColor: theme.borderColor }}>
                    <div className="flex justify-between items-center text-sm">
                      <span style={{ color: theme.lightText }}>Published: {report.date}</span>
                      <button 
                        className="font-medium transition-colors hover:opacity-80"
                        style={{ color: theme.primaryColor }}
                      >
                        View Sample →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mandatory Disclosures */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Mandatory <span style={{ color: theme.primaryColor }}>Disclosures</span>
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                As per SEBI Research Analyst Regulations, 2014
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: `${theme.background}90`,
                borderColor: theme.borderColor,
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Conflict of Interest",
                    description: "We maintain independence in our research. Any potential conflicts are disclosed in research reports.",
                    icon: <Scale className="w-6 h-6" />
                  },
                  {
                    title: "Investment Holdings",
                    description: "Any positions held by the analyst or related parties in recommended securities are disclosed.",
                    icon: <FileText className="w-6 h-6" />
                  },
                  {
                    title: "Research Independence",
                    description: "Our research is independent and not influenced by any external parties or brokerages.",
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    title: "Service Scope",
                    description: "Our research is purely informational, with no execution, PMS, or discretionary portfolio management services.",
                    icon: <Eye className="w-6 h-6" />
                  }
                ].map((disclosure, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-6 rounded-xl border"
                    style={{
                      backgroundColor: theme.background,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${theme.primaryColor}15` }}
                    >
                      {disclosure.icon}
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        {disclosure.title}
                      </h3>
                      <p style={{ color: theme.lightText }}>{disclosure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}