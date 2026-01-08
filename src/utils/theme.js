// utils/theme.js
import { userData } from "@/data/userData";

// SINGLE THEME PRESET - Edit this directly for each client
const THEME = {
  /* ================= COLORS ================= */
  
  // Brand Colors (Finance / Research Analyst)
  primaryColor: "#2563eb",       // Blue (trust)
  primaryHover: "#1d4ed8",
  secondaryColor: "#1e40af",     // Deep blue
  accentColor: "#7c3aed",        // Purple (intelligence)

  // CSS GRADIENT for backgrounds
 backgroundGradient: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 50%, #dcfce7 100%)",
footerGradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",

  // Text Colors
  textColor: "#0f172a",          // Slate-900 (dark text)
  lightText: "#475569",          // Slate-600
  
  // Light text for dark backgrounds
  lightTextOnDark: "#cbd5e1",    // Slate-300 (light text for dark backgrounds)

  /* ================= BACKGROUNDS ================= */
  background: "#ffffff",
  footerBackground: "#020617",   // Dark finance footer

  /* ================= UI ================= */
  borderColor: "#e2e8f0",
  
  // Dark border for footer
  borderColorDark: "#334155",

  /* ================= STATUS COLORS ================= */
  successColor: "#16a34a",
  warningColor: "#d97706",
  errorColor: "#dc2626",

  /* ================= TYPOGRAPHY ================= */
  fontFamily: "'Poppins', sans-serif",

  /* ================= LAYOUT ================= */
  borderRadius: "12px",
  headerHeight: "85px",
  mobileBreakpoint: "lg",

  /* ================= CLIENT DATA ================= */
  companyName: userData.companyName,
  tagline: userData.tagline,
  regNumber: userData.regNumber,
  logoPath: "/logo.jpeg",

  /* ================= CONTACT ================= */
  contact: {
    phone: userData.contact.phone,
    email: userData.contact.email,
    address: userData.contact.address,
  },
};

// Export the theme
export const getTheme = () => THEME;

// Generate CSS variables
export const generateThemeCSS = () => {
  return `
    :root {
      /* Brand Colors */
      --primary-color: ${THEME.primaryColor};
      --primary-hover: ${THEME.primaryHover};
      --secondary-color: ${THEME.secondaryColor};
      --accent-color: ${THEME.accentColor};
      
      /* Gradients */
      --background-gradient: ${THEME.backgroundGradient};
      --footer-gradient: ${THEME.footerGradient};
      
      /* Text Colors */
      --text-color: ${THEME.textColor};
      --light-text: ${THEME.lightText};
      --light-text-on-dark: ${THEME.lightTextOnDark};
      
      /* Backgrounds */
      --background: ${THEME.background};
      --footer-bg: ${THEME.footerBackground};
      
      /* Borders */
      --border-color: ${THEME.borderColor};
      --border-color-dark: ${THEME.borderColorDark};
      
      /* Typography */
      --font-family: ${THEME.fontFamily};
      
      /* Layout */
      --border-radius: ${THEME.borderRadius};
      --header-height: ${THEME.headerHeight};
    }
  `;
};

// Hook to use theme
export const useTheme = () => THEME;