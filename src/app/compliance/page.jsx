import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { FileText, Shield, AlertTriangle, Building2, Users, Phone } from "lucide-react";

export default function Compliance() {
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
                <Shield className="w-4 h-4" />
                Regulatory Compliance
              </div>
              
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Compliance & <span style={{ color: theme.primaryColor }}>Disclosures</span>
              </h1>
              
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Complete transparency and regulatory compliance as per SEBI Research Analyst Regulations
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Regulatory <span style={{ color: theme.primaryColor }}>Information</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* SEBI Registration */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  borderLeft: `4px solid ${theme.primaryColor}`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                    }}
                  >
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: theme.textColor }}
                  >
                    SEBI Registration
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1" style={{ color: theme.lightText }}>Registration Number</p>
                    <p 
                      className="text-lg font-bold font-mono"
                      style={{ color: theme.textColor }}
                    >
                      {userData.regNumber}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-1" style={{ color: theme.lightText }}>Validity</p>
                    <p style={{ color: theme.textColor }}>Perpetual</p>
                  </div>
                  
                  <div className="pt-4 border-t" style={{ borderTopColor: theme.borderColor }}>
                    <p className="text-sm" style={{ color: theme.lightText }}>
                      Registered under SEBI (Research Analyst) Regulations, 2014
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Officers */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  borderLeft: `4px solid ${theme.secondaryColor}`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4"
                    style={{
                      background: `linear-gradient(135deg, ${theme.secondaryColor} 0%, ${theme.accentColor} 100%)`,
                    }}
                  >
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: theme.textColor }}
                  >
                    Contact Officers
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* Compliance Officer */}
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Compliance Officer
                    </h4>
                    <p style={{ color: theme.textColor }}>{userData.compliance.officer.name}</p>
                    <p className="text-sm" style={{ color: theme.lightText }}>Email: {userData.compliance.officer.email}</p>
                    <p className="text-sm" style={{ color: theme.lightText }}>Phone: {userData.compliance.officer.phone}</p>
                  </div>
                  
                  {/* Grievance Officer */}
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Grievance Officer
                    </h4>
                    <p style={{ color: theme.textColor }}>{userData.compliance.grievance.name}</p>
                    <p className="text-sm" style={{ color: theme.lightText }}>Email: {userData.compliance.grievance.email}</p>
                    <p className="text-sm" style={{ color: theme.lightText }}>Phone: {userData.compliance.grievance.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclosures */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Important <span style={{ color: theme.primaryColor }}>Disclosures</span>
              </h2>
            </div>

            <div 
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 30px ${theme.primaryColor}08`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Investment Risk Disclosure",
                    content: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Past performance may not be indicative of future results.",
                    icon: <AlertTriangle className="w-5 h-5" />
                  },
                  {
                    title: "No Guarantee of Returns",
                    content: "We do not guarantee any returns or assure profit. All investment decisions should be made based on your own risk assessment and financial goals.",
                    icon: <Shield className="w-5 h-5" />
                  },
                  {
                    title: "Research Limitations",
                    content: "Our research is based on publicly available information and our analysis. Market conditions may change rapidly, making past research outdated.",
                    icon: <FileText className="w-5 h-5" />
                  },
                  {
                    title: "Client Responsibilities",
                    content: "Clients are responsible for their own investment decisions. Our research should be considered as one of many inputs in the decision-making process.",
                    icon: <Users className="w-5 h-5" />
                  }
                ].map((disclosure, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl border"
                    style={{
                      backgroundColor: `${theme.background}90`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${theme.primaryColor}15` }}
                      >
                        {disclosure.icon}
                      </div>
                      <h3 
                        className="text-lg font-semibold"
                        style={{ color: theme.textColor }}
                      >
                        {disclosure.title}
                      </h3>
                    </div>
                    <p style={{ color: theme.lightText }}>{disclosure.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grievance Redressal */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Grievance <span style={{ color: theme.primaryColor }}>Redressal</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  borderTop: `4px solid ${theme.primaryColor}`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: theme.textColor }}
                  >
                    For Investor Grievances
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p style={{ color: theme.lightText }}>
                    In case of any grievance or complaint, please contact our Grievance Officer:
                  </p>
                  
                  <div 
                    className="p-4 rounded-lg border"
                    style={{
                      backgroundColor: `${theme.primaryColor}08`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <p 
                      className="font-semibold"
                      style={{ color: theme.textColor }}
                    >
                      {userData.compliance.grievance.name}
                    </p>
                    <p className="text-sm" style={{ color: theme.lightText }}>
                      Email: {userData.compliance.grievance.email}
                    </p>
                    <p className="text-sm" style={{ color: theme.lightText }}>
                      Phone: {userData.compliance.grievance.phone}
                    </p>
                  </div>
                  
                  <p className="text-sm" style={{ color: theme.lightText }}>
                    We strive to resolve all grievances within 30 days of receipt.
                  </p>
                </div>
              </div>

              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  borderTop: `4px solid ${theme.secondaryColor}`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4"
                    style={{ backgroundColor: theme.secondaryColor }}
                  >
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: theme.textColor }}
                  >
                    SEBI SCORES Portal
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p style={{ color: theme.lightText }}>
                    Investors can also register complaints on SEBI&apos;s centralized web-based grievance redress system:
                  </p>
                  
                  <a
                    href="https://scores.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      color: "white",
                      boxShadow: `0 4px 20px ${theme.primaryColor}30`,
                    }}
                  >
                    Visit SEBI SCORES Portal
                  </a>
                  
                  <p className="text-sm" style={{ color: theme.lightText }}>
                    SCORES (SEBI Complaints Redress System) facilitates online submission and tracking of investor complaints.
                  </p>
                </div>
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
                <Shield className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Committed to Transparency & Compliance
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                We maintain the highest standards of regulatory compliance and investor protection
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                style={{ color: theme.primaryColor }}
              >
                Contact for Clarifications
              </a>
              
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