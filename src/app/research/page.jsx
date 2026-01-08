import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { FileText, BarChart3, TrendingUp, Shield, Scale, DollarSign, Target } from "lucide-react";

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
                Professional equity research backed by comprehensive analysis and SEBI compliance
              </p>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our Research Approach
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Fundamental Analysis",
                  icon: <FileText className="w-8 h-8" />,
                  items: [
                    "Financial Statement Analysis",
                    "Ratio Analysis (Profitability, Liquidity)",
                    "DCF Valuation Models",
                    "Peer Comparison",
                    "Management Quality Assessment"
                  ]
                },
                {
                  title: "Technical Analysis",
                  icon: <BarChart3 className="w-8 h-8" />,
                  items: [
                    "Trend Analysis",
                    "Support & Resistance Levels",
                    "Moving Averages",
                    "Volume Analysis",
                    "Momentum Indicators"
                  ]
                },
                {
                  title: "Qualitative Analysis",
                  icon: <TrendingUp className="w-8 h-8" />,
                  items: [
                    "Industry Analysis",
                    "Competitive Positioning",
                    "Regulatory Environment",
                    "ESG Factors",
                    "Management Evaluation"
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
                    className="text-xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    {method.title}
                  </h3>
                  
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

        {/* Sample Reports */}
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
                  date: "Feb 2024",
                  features: ["DCF Valuation", "Peer Comparison", "Growth Analysis"]
                },
                {
                  title: "Banking Sector Review",
                  sector: "Banking & Financial Services",
                  recommendation: "HOLD",
                  date: "Jan 2024",
                  features: ["NPA Analysis", "Margin Trends", "Regulatory Impact"]
                },
                {
                  title: "Pharma Sector Outlook",
                  sector: "Pharmaceuticals",
                  recommendation: "ACCUMULATE",
                  date: "Dec 2023",
                  features: ["Pipeline Analysis", "Export Trends", "Regulatory Updates"]
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
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: report.recommendation === "BUY" 
                          ? `${theme.primaryColor}15`
                          : report.recommendation === "HOLD"
                          ? `${theme.secondaryColor}15`
                          : `${theme.accentColor}15`,
                        color: report.recommendation === "BUY" 
                          ? theme.primaryColor
                          : report.recommendation === "HOLD"
                          ? theme.secondaryColor
                          : theme.accentColor,
                        border: report.recommendation === "BUY" 
                          ? `1px solid ${theme.primaryColor}30`
                          : report.recommendation === "HOLD"
                          ? `1px solid ${theme.secondaryColor}30`
                          : `1px solid ${theme.accentColor}30`,
                      }}
                    >
                      {report.recommendation}
                    </span>
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
                    title: "Compensation",
                    description: "We receive compensation only from clients for research services, not from companies being researched.",
                    icon: <DollarSign className="w-6 h-6" />
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