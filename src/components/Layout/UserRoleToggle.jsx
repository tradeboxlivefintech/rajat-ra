"use client";

import { useState } from "react";
import { User, Briefcase } from "lucide-react";
import { useTheme } from "@/utils/theme";

export default function PremiumCompactToggle({ onChange, defaultValue = "USER" }) {
  const [active, setActive] = useState(defaultValue);
  const theme = useTheme();

  const handleToggle = (role) => {
    if (active === role) return;
    setActive(role);
    if (onChange) onChange(role);
  };

  return (
    <div className="relative inline-block group">
      {/* Outer glow effect */}
      <div 
        className="absolute -inset-2 rounded-full opacity-40 blur-xl transition-all duration-500"
        style={{
          background: active === "USER"
            ? `radial-gradient(circle, ${theme.primaryColor} 0%, ${theme.secondaryColor} 50%, transparent 70%)`
            : `radial-gradient(circle, ${theme.secondaryColor} 0%, ${theme.primaryColor} 50%, transparent 70%)`,
        }}
      />

      {/* Main toggle container */}
      <div 
        className="relative rounded-full p-1 backdrop-blur-xl border transition-all duration-500"
        style={{
          background: `linear-gradient(145deg, ${theme.background}dd 0%, ${theme.borderColor}20 100%)`,
          borderColor: active === "USER" ? `${theme.primaryColor}40` : `${theme.secondaryColor}40`,
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.2),
            0 4px 16px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 ${theme.borderColor}10
          `,
        }}
      >
        <div className="relative flex items-center gap-1">
          {/* Animated sliding background */}
          <div
            className={`absolute inset-0.5 w-[calc(50%-4px)] rounded-full transition-all duration-500 ease-out ${
              active === "PROVIDER" ? "translate-x-[calc(100%+8px)]" : ""
            }`}
            style={{
              background: active === "USER" 
                ? `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.primaryColor}CC 100%)`
                : `linear-gradient(135deg, ${theme.secondaryColor} 0%, ${theme.secondaryColor}CC 100%)`,
              boxShadow: active === "USER"
                ? `0 4px 20px ${theme.primaryColor}60, 0 2px 8px ${theme.primaryColor}40, inset 0 1px 1px rgba(255, 255, 255, 0.2)`
                : `0 4px 20px ${theme.secondaryColor}60, 0 2px 8px ${theme.secondaryColor}40, inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
            }}
          >
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-30 overflow-hidden"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                animation: "shimmer 2.5s infinite",
              }}
            />
          </div>
          
          {/* User Button */}
          <button
            onClick={() => handleToggle("USER")}
            className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] ${
              active === "USER" 
                ? "text-white" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={{
              textShadow: active === "USER" ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
            }}
          >
            <div className="relative">
              <User className={`w-4 h-4 transition-all duration-300 ${
                active === "USER" ? "scale-110 drop-shadow-md" : ""
              }`} />
              {active === "USER" && (
                <div 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white"
                  style={{
                    boxShadow: `0 0 8px white, 0 0 16px ${theme.primaryColor}80`,
                  }}
                />
              )}
            </div>
            <span className="text-xs font-bold tracking-wide">User</span>
          </button>
          
          {/* Provider Button */}
          <button
            onClick={() => handleToggle("PROVIDER")}
            className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] ${
              active === "PROVIDER" 
                ? "text-white" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={{
              textShadow: active === "PROVIDER" ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
            }}
          >
            <div className="relative">
              <Briefcase className={`w-4 h-4 transition-all duration-300 ${
                active === "PROVIDER" ? "scale-110 drop-shadow-md" : ""
              }`} />
              {active === "PROVIDER" && (
                <div 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white"
                  style={{
                    boxShadow: `0 0 8px white, 0 0 16px ${theme.secondaryColor}80`,
                  }}
                />
              )}
            </div>
            <span className="text-xs font-bold tracking-wide">Provider</span>
          </button>
        </div>
      </div>

      {/* Corner status indicator */}
      <div 
        className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full transition-all duration-500 ${
          active === "USER" ? "opacity-100" : "opacity-100 translate-x-6"
        }`}
        style={{
          background: active === "USER" ? theme.primaryColor : theme.secondaryColor,
          boxShadow: active === "USER"
            ? `0 0 12px ${theme.primaryColor}, 0 0 24px ${theme.primaryColor}60`
            : `0 0 12px ${theme.secondaryColor}, 0 0 24px ${theme.secondaryColor}60`,
        }}
      />

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}