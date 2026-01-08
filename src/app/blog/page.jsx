'use client';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import { useTheme } from "@/utils/theme";
import { Calendar, Clock, Tag } from "lucide-react";

export default function Blog() {
  const theme = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "Market Volatility: Strategies for Long-term Investors",
      excerpt: "Explore proven approaches to navigate market fluctuations while maintaining focus on long-term investment objectives and risk management principles.",
      category: "Investment Strategy",
      date: "Feb 12, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Pharmaceutical Sector: Innovation and Regulatory Dynamics",
      excerpt: "Analysis of pharmaceutical industry trends, regulatory developments, and innovation pipelines shaping investment opportunities in healthcare.",
      category: "Sector Analysis",
      date: "Feb 8, 2024",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Financial Planning for Early Retirement",
      excerpt: "Comprehensive framework for retirement planning including asset allocation, withdrawal strategies, and tax-efficient income planning.",
      category: "Wealth Planning",
      date: "Feb 5, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Renewable Energy Investments: Growth and Challenges",
      excerpt: "Examination of renewable energy sector growth drivers, policy support, and technological advancements creating investment opportunities.",
      category: "Sustainable Investing",
      date: "Jan 28, 2024",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 5,
      title: "Understanding Corporate Governance Metrics",
      excerpt: "Guide to evaluating corporate governance practices and their impact on company performance and investment decisions.",
      category: "Fundamental Analysis",
      date: "Jan 22, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 6,
      title: "Debt Market Opportunities in Current Economic Cycle",
      excerpt: "Analysis of fixed income opportunities, yield curve dynamics, and credit risk assessment in changing interest rate environment.",
      category: "Fixed Income",
      date: "Jan 18, 2024",
      readTime: "6 min read",
      featured: false
    }
  ];

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
                <Tag className="w-4 h-4" />
                Research Insights
              </div>
              
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: theme.textColor }}
              >
                Market <span style={{ color: theme.primaryColor }}>Insights</span> & Analysis
              </h1>
              
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: theme.lightText }}
              >
                Professional analysis, sector research, and investment strategies from SEBI Registered Research Analysts
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                Featured <span style={{ color: theme.primaryColor }}>Research</span>
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: theme.lightText }}
              >
                In-depth analysis and strategic insights from our research team
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => post.featured).map((post) => (
                <div 
                  key={post.id} 
                  className="rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 30px ${theme.primaryColor}08`,
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: `${theme.primaryColor}15`,
                          color: theme.primaryColor,
                          border: `1px solid ${theme.primaryColor}30`,
                        }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm" style={{ color: theme.lightText }}>
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ color: theme.textColor }}
                    >
                      {post.title}
                    </h3>
                    
                    <p 
                      className="mb-6"
                      style={{ color: theme.lightText }}
                    >
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm" style={{ color: theme.lightText }}>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <button 
                        className="font-medium transition-colors hover:opacity-80"
                        style={{ color: theme.primaryColor }}
                      >
                        Read Analysis →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts & Sidebar */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 
                    className="text-2xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    Latest Research Articles
                  </h2>
                </div>

                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl"
                      style={{
                        backgroundColor: theme.background,
                        borderColor: theme.borderColor,
                        boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${theme.primaryColor}10`,
                            color: theme.textColor,
                            border: `1px solid ${theme.borderColor}`,
                          }}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm" style={{ color: theme.lightText }}>
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                      
                      <h3 
                        className="text-xl font-bold mb-4"
                        style={{ color: theme.textColor }}
                      >
                        {post.title}
                      </h3>
                      
                      <p 
                        className="mb-6"
                        style={{ color: theme.lightText }}
                      >
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm" style={{ color: theme.lightText }}>
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <button 
                          className="font-medium transition-colors hover:opacity-80"
                          style={{ color: theme.primaryColor }}
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Categories */}
                <div 
                  className="rounded-2xl p-8 border mb-8"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    Research Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:opacity-80"
                        style={{
                          color: theme.textColor,
                          backgroundColor: `${theme.primaryColor}05`,
                          border: `1px solid ${theme.borderColor}`,
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                

                {/* Popular Topics */}
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.borderColor,
                    boxShadow: `0 4px 20px ${theme.primaryColor}05`,
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-6"
                    style={{ color: theme.textColor }}
                  >
                    Research Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Equity Analysis", "Market Trends", "Portfolio Strategy", "Risk Assessment", "Sector Research", "Economic Outlook", "Company Valuation", "Investment Frameworks"].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm transition-colors hover:opacity-80 cursor-pointer"
                        style={{
                          backgroundColor: `${theme.primaryColor}10`,
                          color: theme.textColor,
                          border: `1px solid ${theme.borderColor}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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