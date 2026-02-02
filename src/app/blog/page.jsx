'use client';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { useTheme } from "@/utils/theme";
import { Calendar, Clock, Tag } from "lucide-react";

export default function Blog() {
  const theme = useTheme();

  // ================= BLOG DATA (STATIC) =================
  const blogPosts = [
    {
      id: 1,
      title: "Market Volatility: Strategies for Long-term Investors",
      excerpt:
        "Explore proven approaches to navigate market fluctuations while maintaining focus on long-term investment objectives and risk management principles.",
      category: "Investment Strategy",
      date: "Jan 4, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Pharmaceutical Sector: Innovation and Regulatory Dynamics",
      excerpt:
        "Analysis of pharmaceutical industry trends, regulatory developments, and innovation pipelines shaping investment opportunities in healthcare.",
      category: "Sector Analysis",
      date: "Feb 8, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Financial Planning for Early Retirement",
      excerpt:
        "Comprehensive framework for retirement planning including asset allocation, withdrawal strategies, and tax-efficient income planning.",
      category: "Wealth Planning",
      date: "Feb 5, 2026",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Renewable Energy Investments: Growth and Challenges",
      excerpt:
        "Examination of renewable energy sector growth drivers, policy support, and technological advancements creating investment opportunities.",
      category: "Sustainable Investing",
      date: "Jan 28, 2026",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Understanding Corporate Governance Metrics",
      excerpt:
        "Guide to evaluating corporate governance practices and their impact on company performance and investment decisions.",
      category: "Fundamental Analysis",
      date: "Jan 22, 2026",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Debt Market Opportunities in Current Economic Cycle",
      excerpt:
        "Analysis of fixed income opportunities, yield curve dynamics, and credit risk assessment in changing interest rate environment.",
      category: "Fixed Income",
      date: "Jan 18, 2026",
      readTime: "6 min read"
    }
  ];

  // ================= LATEST 3 BLOGS (STATIC LOGIC) =================
  const latestBlogs = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const categories = [
    "Sector Analysis",
    "Investment Strategy",
    "Wealth Planning",
    "Risk Management",
    "Fixed Income",
    "Sustainable Investing",
    "Fundamental Analysis",
    "Market Trends"
  ];

  return (
    <>
      <Header />

      <main style={{ background: theme.backgroundGradient }}>
        {/* ================= HERO ================= */}
        <section className="pt-32 pb-20 text-center">
          <div className="container mx-auto px-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: `${theme.primaryColor}15`,
                color: theme.primaryColor,
                border: `1px solid ${theme.primaryColor}30`
              }}
            >
              <Tag className="w-4 h-4" />
              Research Insights
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.textColor }}>
              Market <span style={{ color: theme.primaryColor }}>Insights</span> & Analysis
            </h1>

            <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.lightText }}>
              Professional analysis and investment insights from SEBI Registered Research Analysts
            </p>
          </div>
        </section>

        {/* ================= LATEST 3 BLOGS ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.textColor }}>
              Latest <span style={{ color: theme.primaryColor }}>Blogs</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {latestBlogs.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border p-6 hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}08`
                  }}
                >
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${theme.primaryColor}15`,
                      color: theme.primaryColor
                    }}
                  >
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold mt-4 mb-3" style={{ color: theme.textColor }}>
                    {post.title}
                  </h3>

                  <p className="mb-4" style={{ color: theme.lightText }}>
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between text-sm" style={{ color: theme.lightText }}>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ALL BLOGS ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl p-8 border hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor
                  }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: theme.textColor }}>
                    {post.title}
                  </h3>
                  <p className="mb-4" style={{ color: theme.lightText }}>
                    {post.excerpt}
                  </p>
                  <div className="flex gap-4 text-sm" style={{ color: theme.lightText }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.borderColor
                }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.textColor }}>
                  Categories
                </h3>
                {categories.map((cat, i) => (
                  <div key={i} className="py-2" style={{ color: theme.lightText }}>
                    {cat}
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
