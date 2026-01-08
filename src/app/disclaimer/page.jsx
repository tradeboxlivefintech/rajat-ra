import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { Shield, AlertTriangle, FileText, Lock, Scale, Mail, Phone } from "lucide-react";

export default function Disclaimer() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <main style={{ background: theme.backgroundGradient }}>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div 
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium mb-6"
                  style={{
                    backgroundColor: `${theme.primaryColor}15`,
                    color: theme.primaryColor,
                    border: `1px solid ${theme.primaryColor}30`,
                  }}
                >
                  <AlertTriangle className="w-5 h-5" />
                  Important Legal Disclaimer
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: theme.textColor }}
                >
                  Legal <span style={{ color: theme.primaryColor }}>Disclaimer</span>
                </h1>
                <p 
                  className="text-xl"
                  style={{ color: theme.lightText }}
                >
                  {userData.companyName} is registered with SEBI as a Research Entity under the SEBI (Research Analyst) Regulations, 2014
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Disclaimer Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Registration Box */}
              <div 
                className="rounded-2xl p-8 text-white mb-12"
                style={{
                  background: `linear-gradient(135deg, ${theme.textColor} 0%, ${theme.textColor}80 100%)`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">SEBI Registration</h2>
                    <p className="opacity-90">Research Analyst Regulations, 2014</p>
                  </div>
                </div>
                <div 
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Registration Number</p>
                    <div 
                      className="inline-block px-6 py-3 rounded-lg font-mono text-xl font-bold"
                      style={{
                        backgroundColor: theme.background,
                        color: theme.textColor,
                      }}
                    >
                      {userData.regNumber}
                    </div>
                    <p className="opacity-90 mt-4">
                      {userData.companyName} and its associates have not been debarred or suspended by SEBI or any other regulatory authority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Investment Disclaimer */}
              <div 
                className="rounded-2xl p-8 mb-8"
                style={{
                  backgroundColor: `${theme.primaryColor}15`,
                  border: `2px solid ${theme.primaryColor}30`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${theme.primaryColor}30` }}
                  >
                    <Scale className="w-6 h-6" style={{ color: theme.primaryColor }} />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Important Investment Disclaimer
                    </h3>
                    <p className="mt-2" style={{ color: theme.primaryColor, fontWeight: 600 }}>
                      READ THIS SECTION CAREFULLY
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.background,
                      border: `1px solid ${theme.borderColor}`,
                    }}
                  >
                    <p 
                      className="font-semibold text-lg"
                      style={{ color: theme.textColor }}
                    >
                      Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Research analyst will not exceed the SEBI prescribed limit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer Sections */}
              <div className="space-y-8">
                {/* Information Accuracy */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme.primaryColor}15` }}
                    >
                      <AlertTriangle className="w-6 h-6" style={{ color: theme.primaryColor }} />
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Information Accuracy & Reliability
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p style={{ color: theme.lightText }}>
                      The information, analysis, opinions, and views provided through our website, reports, publications, and services (&apos;Research Information&apos;) are believed to be reliable; however, <strong style={{ color: theme.textColor }}>{userData.companyName} does not guarantee the accuracy, completeness, or adequacy of such information</strong>.
                    </p>
                    <p style={{ color: theme.lightText }}>
                      Users and investors are <strong style={{ color: theme.textColor }}>advised to independently evaluate</strong> market conditions, risks, and suitability before making any trading or investment decisions.
                    </p>
                  </div>
                </div>

                {/* Purpose & Limitations */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme.secondaryColor}15` }}
                    >
                      <FileText className="w-6 h-6" style={{ color: theme.secondaryColor }} />
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Purpose & Limitations of Research
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p style={{ color: theme.lightText }}>
                      The Research Information provided is <strong style={{ color: theme.textColor }}>not intended to be an exhaustive statement</strong> on any financial instruments, issuers, markets, or economic developments.
                    </p>
                    <p style={{ color: theme.lightText }}>
                      While reasonable care has been taken to ensure that the information is not misleading or incorrect at the time of publication, <strong style={{ color: theme.textColor }}>opinions expressed are subject to change without prior notice</strong>.
                    </p>
                    <p style={{ color: theme.lightText }}>
                      All research reports and content are provided <strong style={{ color: theme.textColor }}>for educational and informational purposes only</strong> and are meant for private use. Nothing contained on this website shall be construed as an offer, solicitation, or recommendation to buy or sell any securities or financial instruments.
                    </p>
                  </div>
                </div>

                {/* Privacy & Data Collection */}
                <div 
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: `${theme.accentColor}08`,
                    border: `2px solid ${theme.accentColor}30`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme.accentColor}20` }}
                    >
                      <Lock className="w-6 h-6" style={{ color: theme.accentColor }} />
                    </div>
                    <div>
                      <h3 
                        className="text-2xl font-bold"
                        style={{ color: theme.textColor }}
                      >
                        Privacy & Data Collection
                      </h3>
                      <p className="mt-2" style={{ color: theme.accentColor, fontWeight: 600 }}>
                        Updated as per Client Requirements
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div 
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: theme.background,
                        border: `1px solid ${theme.borderColor}`,
                      }}
                    >
                      <p className="font-semibold text-lg" style={{ color: theme.textColor }}>
                        We collect and use your contact information for legitimate business purposes, including providing updates on our products and services. We do not sell or rent your contact information to third parties. By submitting your details, you authorize us to contact you via Call/SMS, even if you are registered under DND. This authorization remains valid for 12 months.
                      </p>
                    </div>
                    <p style={{ color: theme.lightText }}>
                      {userData.companyName} shall not be liable for any losses, damages, or consequences arising directly or indirectly from the use of such information.
                    </p>
                  </div>
                </div>

                {/* Prohibited Actions */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme.primaryColor}15` }}
                    >
                      <Lock className="w-6 h-6" style={{ color: theme.primaryColor }} />
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: theme.textColor }}
                    >
                      Prohibited Actions & Intellectual Property
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p style={{ color: theme.lightText }}>
                      Users are <strong style={{ color: theme.textColor }}>strictly prohibited</strong> from forwarding, sharing, copying, reproducing, or redistributing any reports, calls, SMS, emails, or proprietary content provided by {userData.companyName}, whether directly or indirectly.
                    </p>
                    <div 
                      className="p-5 rounded-xl border"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                      }}
                    >
                      <p className="font-semibold mb-2" style={{ color: theme.textColor }}>⚠️ Legal Consequences:</p>
                      <p style={{ color: theme.lightText }}>
                        Any unauthorized use or distribution may result in strict legal action. All rights reserved. Unauthorized reproduction, copying, or distribution of any content from this website without prior written permission from {userData.companyName} is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms of Use */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`,
                  }}
                >
                  <h3 
                    className="text-2xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    Terms of Use & Jurisdiction
                  </h3>
                  <div className="space-y-4">
                    <p style={{ color: theme.lightText }}>
                      By accessing our website, you agree to abide by the terms and conditions stated herein.
                    </p>
                    <p style={{ color: theme.lightText }}>
                      The website may contain views of individual contributors that do not necessarily reflect the official views of {userData.companyName}. External links, if any, are provided for convenience only, and {userData.companyName} is not responsible for their content or updates.
                    </p>
                    <p style={{ color: theme.lightText }}>
                      All services are provided on a best-effort basis. {userData.companyName} does not accept liability for service interruptions, technical errors, delays in communication (including SMS or email), or system failures beyond its control.
                    </p>
                  </div>
                </div>

                {/* Communication & Dispute Resolution */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: `${theme.background}90`,
                    borderColor: theme.borderColor,
                  }}
                >
                  <h3 
                    className="text-2xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    Communication & Dispute Resolution
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 
                        className="font-bold mb-3 flex items-center gap-2"
                        style={{ color: theme.textColor }}
                      >
                        <Mail className="w-5 h-5" style={{ color: theme.lightText }} />
                        Communication Consent
                      </h4>
                      <p style={{ color: theme.lightText }} className="pl-7">
                        By submitting your contact details or filling out any form on this website, you consent to receive communication (including calls, emails, or SMS) from {userData.companyName}, even if your number is registered under the National &apos;Do Not Disturb&apos; (DND) registry.
                      </p>
                    </div>
                    
                    <div>
                      <h4 
                        className="font-bold mb-3 flex items-center gap-2"
                        style={{ color: theme.textColor }}
                      >
                        <Phone className="w-5 h-5" style={{ color: theme.lightText }} />
                        Dispute Resolution
                      </h4>
                      <div 
                        className="p-5 rounded-xl border pl-7"
                        style={{
                          backgroundColor: theme.background,
                          borderColor: theme.borderColor,
                        }}
                      >
                        <p style={{ color: theme.lightText }}>
                          All disputes shall first be subject to mediation, and if unresolved, arbitration under Indian law. Any legal disputes shall be subject to the exclusive jurisdiction of courts in <strong style={{ color: theme.textColor }}>{userData.contact.address.city}, {userData.contact.address.state}, India</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Disclaimer */}
                <div 
                  className="rounded-2xl p-8"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}08 0%, ${theme.secondaryColor}08 100%)`,
                    border: `2px solid ${theme.primaryColor}30`,
                  }}
                >
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: theme.primaryColor }} />
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ color: theme.textColor }}
                    >
                      Final Disclaimer
                    </h3>
                    <p className="text-lg" style={{ color: theme.lightText }}>
                      We expressly disclaim all warranties, whether express or implied, to the fullest extent permitted under law. {userData.companyName} reserves the right to terminate access and initiate legal proceedings in case of violation of proprietary rights.
                    </p>
                    <div className="mt-6 pt-6" style={{ borderTopColor: `${theme.borderColor}80` }}>
                      <p className="text-sm" style={{ color: theme.lightText }}>
                        Last Updated: {new Date().toLocaleDateString('en-IN', { 
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acknowledgment Box */}
              <div 
                className="mt-12 rounded-2xl p-8"
                style={{
                  backgroundColor: `${theme.primaryColor}08`,
                  border: `2px solid ${theme.primaryColor}30`,
                }}
              >
                <div className="text-center">
                  <h4 
                    className="text-xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    By using this website, you acknowledge:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {[
                      "I have read and understood this disclaimer",
                      "I accept all terms and conditions",
                      "I understand the market risks involved",
                      "I will make independent investment decisions"
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-lg border"
                        style={{
                          backgroundColor: theme.background,
                          borderColor: theme.borderColor,
                        }}
                      >
                        <p className="text-sm" style={{ color: theme.textColor }}>
                          ✓ {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Clarification */}
        <section className="py-12 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Clarification?</h3>
              <p className="opacity-90 mb-6">
                If you have any questions about this disclaimer or our services, please contact us:
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                style={{ color: theme.primaryColor }}
              >
                Contact Us
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