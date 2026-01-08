"use client";

import { useTheme } from "@/utils/theme";
import AnimatedCounter from "@/components/Shared/AnimatedCounter";

const Stats = () => {
  const theme = useTheme();

  const stats = [
    { label: "Years of Experience", value: 8, suffix: "+" },
    { label: "Research Reports", value: 500, suffix: "+" },
    { label: "Clients Served", value: 250, suffix: "+" },
    { label: "Companies Covered", value: 100, suffix: "+" },
    { label: "Accuracy Focus", value: 85, suffix: "%" },
    { label: "Regulatory Compliance", value: 100, suffix: "%" },
  ];

  return (
    <section 
      className="py-20"
      style={{
        background: theme.backgroundGradient,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Our <span style={{ color: theme.primaryColor }}>Track Record</span>
          </h2>
          <p 
            className="max-w-3xl mx-auto"
            style={{ color: theme.lightText }}
          >
            Consistent performance and commitment to excellence in equity research
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl border"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
                boxShadow: `0 4px 20px ${theme.primaryColor}05`,
              }}
            >
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: theme.primaryColor }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p 
                className="text-sm font-medium"
                style={{ color: theme.lightText }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div 
          className="mt-12 p-4 rounded-xl max-w-3xl mx-auto"
          style={{
            backgroundColor: `${theme.background}90`,
            border: `1px solid ${theme.borderColor}`,
          }}
        >
          <p 
            className="text-sm text-center"
            style={{ color: theme.lightText }}
          >
            <strong style={{ color: theme.textColor }}>Note:</strong> These figures represent our cumulative work and commitment to quality. 
            All research is subject to market risks and past performance may not be indicative of future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;