"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/utils/theme";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Research", path: "/research" },
    { name: "Compliance", path: "/compliance" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <> 
      <header
        style={{
          fontFamily: theme.fontFamily,
          height: theme.headerHeight,
          background: isScrolled 
            ? `linear-gradient(135deg, ${theme.background}dd 0%, ${theme.background}ee 100%)`
            : theme.backgroundGradient,
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled ? `1px solid ${theme.borderColor}80` : "none",
          boxShadow: isScrolled 
            ? "0 4px 30px rgba(0, 0, 0, 0.1)"
            : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 70% 20%, ${theme.primaryColor}40 0%, transparent 50%)`,
          }}
        />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div 
                className="relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: theme.borderRadius,
                  backgroundColor: theme.background,
                  border: `1px solid ${theme.borderColor}`,
                }}
              >
                <Image
                  src={theme.logoPath}
                  alt={`${theme.companyName} Logo`}
                  fill
                  sizes="50px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 
                  style={{
                    color: theme.textColor,
                    fontWeight: 700,
                    fontSize: "1.125rem",
                  }}
                  className="transition-colors duration-300 group-hover:text-opacity-80"
                >
                  {theme.companyName}
                </h1>
                <p 
                  style={{
                    color: theme.lightText,
                    fontWeight: 500,
                  }}
                  className="text-xs hidden sm:block"
                >
                  {theme.tagline} | Reg: {theme.regNumber}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    fontWeight: 500,
                    color: pathname === item.path 
                      ? theme.primaryColor 
                      : theme.textColor,
                  }}
                  className={`
                    relative px-4 py-2.5 rounded-lg transition-all duration-300
                    hover:opacity-90
                    ${pathname === item.path 
                      ? `bg-gradient-to-r ${theme.primaryColor}10 ${theme.secondaryColor}10`
                      : ""
                    }
                  `}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Contact Button */}
              <Link
                href="/contact"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                  color: "white",
                  fontWeight: 600,
                  borderRadius: theme.borderRadius,
                  marginLeft: "1rem",
                  boxShadow: `0 4px 20px ${theme.primaryColor}30`,
                }}
                className="px-6 py-2.5 flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                borderRadius: theme.borderRadius,
                backgroundColor: `${theme.primaryColor}10`,
                border: `1px solid ${theme.borderColor}`,
              }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" style={{ color: theme.primaryColor }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: theme.primaryColor }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 border-t shadow-xl backdrop-blur-xl"
            style={{
              background: `linear-gradient(135deg, ${theme.background}ee 0%, ${theme.background}ff 100%)`,
              borderTopColor: theme.borderColor,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    style={{
                      fontWeight: 500,
                      color: pathname === item.path 
                        ? theme.primaryColor 
                        : theme.textColor,
                      backgroundColor: pathname === item.path 
                        ? `${theme.primaryColor}10` 
                        : "transparent",
                      borderLeft: pathname === item.path 
                        ? `3px solid ${theme.primaryColor}`
                        : "3px solid transparent",
                    }}
                    className="block px-4 py-3.5 rounded-lg hover:bg-opacity-10 transition-all duration-300 hover:translate-x-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
               
                {/* Mobile Contact Button */}
                <div 
                  className="pt-6 mt-4"
                  style={{ 
                    borderTop: `1px solid ${theme.borderColor}80`,
                  }}
                >
                  <Link
                    href="/contact"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
                      color: "white",
                      fontWeight: 600,
                      borderRadius: theme.borderRadius,
                      boxShadow: `0 4px 20px ${theme.primaryColor}40`,
                    }}
                    className="w-full px-6 py-3.5 flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    {theme.contact.phone}
                  </Link>
                </div>
              </div>
            </div>
            

          </div>
        )}
      </header>
      
      {/* Spacer */}
      <div style={{ height: theme.headerHeight }} />
    </>
  );
};

export default Header;