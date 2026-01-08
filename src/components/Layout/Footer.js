'use client'
import Link from "next/link";
import { userData } from "@/data/userData";
import Image from 'next/image';
import { Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "@/utils/theme";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <footer 
      className="relative"
      style={{
        background: theme.footerGradient,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Optional gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${theme.primaryColor}20 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center border-2"
                style={{
                  backgroundColor: theme.background,
                  borderColor: `${theme.primaryColor}40`,
                  boxShadow: `0 4px 20px ${theme.primaryColor}15`,
                }}
              >
                <Image
                  src={theme.logoPath}
                  alt={`${theme.companyName} logo`}
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 
                  className="text-xl font-bold mb-1"
                  style={{ color: theme.background }}
                >
                  {theme.companyName}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: theme.lightTextOnDark }}
                >
                  {theme.tagline} | Reg: {theme.regNumber}
                </p>
              </div>
            </div>
            
            <p 
              className="mb-6 leading-relaxed max-w-md"
              style={{ color: `${theme.lightTextOnDark}dd` }}
            >
              Providing professional equity research and investment advisory
              services with complete regulatory compliance and transparency.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {Object.entries(userData.social).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${theme.background}15`,
                      color: theme.background,
                      border: `1px solid ${theme.borderColorDark}`,
                    }}
                    aria-label={platform}
                  >
                    {platform === "linkedin" && "in"}
                    {platform === "twitter" && "𝕏"}
                    {platform === "instagram" && "📸"}
                    {platform === "youtube" && "▶"}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: theme.background }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {userData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="transition-all duration-300 hover:translate-x-1 hover:opacity-100 block"
                    style={{ 
                      color: `${theme.lightTextOnDark}dd`,
                    }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/research"
                  className="transition-all duration-300 hover:translate-x-1 hover:opacity-100 block"
                  style={{ color: `${theme.lightTextOnDark}dd` }}
                >
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="transition-all duration-300 hover:translate-x-1 hover:opacity-100 block"
                  style={{ color: `${theme.lightTextOnDark}dd` }}
                >
                  Compliance & Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: theme.background }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin 
                  className="w-4 h-4 mt-1 flex-shrink-0" 
                  style={{ color: theme.primaryColor }} 
                />
                <address 
                  className="not-italic leading-relaxed"
                  style={{ color: `${theme.lightTextOnDark}dd` }}
                >
                  {theme.contact.address.line1},<br />
                  {theme.contact.address.line2},<br />
                  {theme.contact.address.city} - {theme.contact.address.pincode}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: theme.primaryColor }} />
                <a 
                  href={`tel:${theme.contact.phone}`}
                  className="transition-colors hover:opacity-80"
                  style={{ color: `${theme.lightTextOnDark}dd` }}
                >
                  {theme.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: theme.primaryColor }} />
                <a 
                  href={`mailto:${theme.contact.email}`}
                  className="transition-colors hover:opacity-80"
                  style={{ color: `${theme.lightTextOnDark}dd` }}
                >
                  {theme.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Section */}
        <div 
          className="py-8 border-t"
          style={{ 
            borderTopColor: `${theme.borderColorDark}40`,
          }}
        >
          <div 
            className="rounded-xl p-6"
            style={{
              background: `linear-gradient(135deg, ${theme.background}08 0%, ${theme.primaryColor}08 100%)`,
              border: `1px solid ${theme.borderColorDark}30`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <h5 
              className="font-semibold mb-4 text-lg"
              style={{ color: theme.primaryColor }}
            >
              Regulatory Compliance
            </h5>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm mb-2" style={{ color: theme.lightTextOnDark }}>
                  <strong>SEBI Registration:</strong> {theme.regNumber}
                </p>
              </div>
              <div>
                <p className="text-sm" style={{ color: theme.lightTextOnDark }}>
                  <strong>Compliance Officer:</strong> {userData.compliance.officer.name}
                </p>
                <p className="text-sm" style={{ color: theme.lightTextOnDark }}>
                  Email: {userData.compliance.officer.email}
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed" style={{ color: `${theme.lightTextOnDark}dd` }}>
              <strong>Disclaimer:</strong> Investment in securities market are subject to market risks. 
              Read all related documents carefully before investing. Past performance may not be indicative 
              of future results. We do not guarantee any returns or assure profit.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="py-6 border-t"
          style={{ 
            borderTopColor: `${theme.borderColorDark}40`,
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p style={{ color: `${theme.lightTextOnDark}dd` }}>
              © {currentYear} {theme.companyName}. All rights reserved.
            </p>
            
            <div 
              className="font-semibold px-3 py-1 rounded-md"
              style={{ 
                color: theme.secondaryColor,
                backgroundColor: `${theme.background}10`,
              }}
            >
              Crafted By TradeBox
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link 
                href="/privacy" 
                className="transition-colors hover:opacity-80"
                style={{ color: `${theme.lightTextOnDark}dd` }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="transition-colors hover:opacity-80"
                style={{ color: `${theme.lightTextOnDark}dd` }}
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/disclaimer" 
                className="transition-colors hover:opacity-80"
                style={{ color: `${theme.lightTextOnDark}dd` }}
              >
                Disclaimer
              </Link>
              <a
                href="https://scores.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: `${theme.lightTextOnDark}dd` }}
              >
                SEBI SCORES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;