import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { MapPin, Phone, Mail, Shield, Clock, Send } from "lucide-react";

export default function Contact() {
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
                Get in Touch
              </div>
              
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Contact <span style={{ color: theme.primaryColor }}>Us</span>
              </h1>
              
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Connect with SEBI Registered Research Analysts for professional research and advisory services
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 
                  className="text-3xl font-bold mb-8"
                  style={{ color: theme.textColor }}
                >
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div 
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: `${theme.primaryColor}08`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      }}
                    >
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        Registered Office
                      </h3>
                      <p style={{ color: theme.lightText }}>
                        {userData.contact.address.line1}<br />
                        {userData.contact.address.line2}<br />
                        {userData.contact.address.city}, {userData.contact.address.state} - {userData.contact.address.pincode}<br />
                        {userData.contact.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div 
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: `${theme.secondaryColor}08`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: theme.secondaryColor }}
                    >
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        Phone & WhatsApp
                      </h3>
                      <p style={{ color: theme.lightText }} className="mb-1">{userData.contact.phone}</p>
                      <p className="text-sm" style={{ color: theme.lightText }}>Available: Mon-Fri, 10 AM - 6 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div 
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: `${theme.accentColor}08`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: theme.accentColor }}
                    >
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        Email Address
                      </h3>
                      <p style={{ color: theme.lightText }}>{userData.contact.email}</p>
                      <p className="text-sm mt-1" style={{ color: theme.lightText }}>
                        For research inquiries and consultations
                      </p>
                    </div>
                  </div>

                  {/* Compliance Contact */}
                  <div 
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: `${theme.borderColor}40`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: theme.textColor }}
                    >
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: theme.textColor }}
                      >
                        Compliance & Grievance
                      </h3>
                      <p style={{ color: theme.lightText }} className="mb-1">
                        Email: {userData.compliance.officer.email}
                      </p>
                      <p className="text-sm" style={{ color: theme.lightText }}>
                        For regulatory compliance and grievance-related matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                }}
              >
                <h2 
                  className="text-2xl font-bold mb-6"
                  style={{ color: theme.textColor }}
                >
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                      }}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Service Interest
                    </label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                        color: theme.textColor,
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="equity-research">Equity Research Reports</option>
                      <option value="portfolio-advisory">Portfolio Advisory</option>
                      <option value="sector-research">Sector Research</option>
                      <option value="consultation">Initial Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: theme.textColor }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors resize-none"
                      style={{
                        backgroundColor: `${theme.background}90`,
                        borderColor: theme.borderColor,
                      }}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div 
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: `${theme.primaryColor}08`,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="disclaimer" 
                        required 
                        className="mt-1"
                        style={{ accentColor: theme.primaryColor }}
                      />
                      <label 
                        htmlFor="disclaimer" 
                        className="text-sm"
                        style={{ color: theme.lightText }}
                      >
                        I understand that investment in securities market are subject to market risks. 
                        I have read and understood the disclaimer on the website.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      boxShadow: `0 4px 20px ${theme.primaryColor}30`,
                    }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Business Hours */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Location Card */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: theme.textColor }}
                >
                  Our Location
                </h3>
                <div 
                  className="rounded-xl h-64 flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}10 0%, ${theme.secondaryColor}10 100%)`,
                    border: `2px dashed ${theme.primaryColor}30`,
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      <MapPin className="w-8 h-8" />
                    </div>
                    <p className="font-medium" style={{ color: theme.textColor }}>{userData.contact.address.city}</p>
                    <p className="text-sm" style={{ color: theme.lightText }}>{userData.contact.address.state}</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: theme.lightText }}>
                  {userData.contact.address.line1}, {userData.contact.address.line2}, {userData.contact.address.city}
                </p>
              </div>

              {/* Business Hours */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor,
                  boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: theme.textColor }}
                >
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b"
                      style={{ borderBottomColor: theme.borderColor }}
                    >
                      <span className="font-medium" style={{ color: theme.textColor }}>{schedule.day}</span>
                      <span style={{ color: theme.lightText }}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div 
                  className="mt-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${theme.primaryColor}08`,
                    borderColor: theme.borderColor,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5" style={{ color: theme.primaryColor }} />
                    <h4 className="font-semibold" style={{ color: theme.textColor }}>Response Time</h4>
                  </div>
                  <p className="text-sm" style={{ color: theme.lightText }}>
                    We strive to respond to all inquiries within 24 hours on business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        
      </main>
      <Footer />
    </>
  );
}