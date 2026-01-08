import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { FileText, Briefcase, Building2, AlertTriangle, Check, Target, Users } from "lucide-react";

export default function Services() {
  const theme = useTheme();

  const serviceIcons = [
    <FileText key="file-text" className="w-8 h-8" />,
    <Briefcase key="briefcase" className="w-8 h-8" />,
    <Building2 key="building" className="w-8 h-8" />
  ];

  const processSteps = [
    {
      key: "step-1",
      step: "01",
      title: "Requirement Analysis",
      description: "Understand client objectives and risk profile"
    },
    {
      key: "step-2",
      step: "02",
      title: "Research & Analysis",
      description: "Comprehensive fundamental and technical analysis"
    },
    {
      key: "step-3", 
      step: "03",
      title: "Recommendations",
      description: "Buy/Sell/Hold recommendations with rationale"
    },
    {
      key: "step-4",
      step: "04",
      title: "Regular Updates",
      description: "Ongoing monitoring and portfolio reviews"
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
                Our Services
              </div>
              
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Our <span style={{ color: theme.primaryColor }}>Services</span>
              </h1>
              
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Comprehensive research and advisory solutions for informed investment decisions
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Research & Advisory Services
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                As a SEBI Registered Research Analyst, we provide the following services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.services.map((service, index) => (
                <div 
                  key={`service-${service.id}`}
                  className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    }}
                  >
                    {serviceIcons[index] || <FileText className="w-8 h-8" />}
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
                      className="font-semibold mb-3"
                      style={{ color: theme.textColor }}
                    >
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={`feature-${service.id}-${i}`} className="flex items-center gap-2">
                          <span 
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${theme.primaryColor}15` }}
                          >
                            <Check className="w-3 h-3" style={{ color: theme.primaryColor }} />
                          </span>
                          <span className="text-sm" style={{ color: theme.lightText }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4" style={{ borderTopColor: theme.borderColor }}>
                    <p className="text-sm" style={{ color: theme.lightText }}>
                      <strong style={{ color: theme.textColor }}>Delivery:</strong> {service.delivery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Our <span style={{ color: theme.primaryColor }}>Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.key} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ color: theme.textColor }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: theme.lightText }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We DON'T Do (Important for RA) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: `${theme.primaryColor}08`,
                border: `2px solid ${theme.primaryColor}30`,
              }}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${theme.primaryColor}20` }}
                >
                  <AlertTriangle className="w-6 h-6" style={{ color: theme.primaryColor }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: theme.textColor }}
                >
                  Important: What We DON&apos;T Do
                </h2>
              </div>
              
              <div className="space-y-4">
                <p style={{ color: theme.lightText }}>
                  As a SEBI Registered Research Analyst, it&apos;s important to understand our limitations:
                </p>
                
                <ul className="space-y-3">
                  {limitationsList.map((item) => (
                    <li key={item.key} className="flex items-start gap-3">
                      {item.isNegative ? (
                        <span className="text-red-500 mt-1">✗</span>
                      ) : (
                        <span className="text-green-500 mt-1">✓</span>
                      )}
                      <span 
                        style={{ color: theme.textColor }}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-6" style={{ color: theme.lightText }}>
                  This distinction is important as per SEBI regulations. Research Analysts provide advice while Investment Advisors may manage funds (with separate registration).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Users className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Need Professional Research Services?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get in touch for a detailed consultation about our research services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ color: theme.primaryColor }}
                >
                  Schedule Consultation
                </a>
                <a
                  href="/research"
                  className="inline-block px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Research Samples
                </a>
              </div>
              
              <p className="mt-8 text-sm opacity-80">
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