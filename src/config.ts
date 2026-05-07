   // ==========================
// PROJECTS DATA
// ==========================

const projects = [
  {
    title: "Fraud Detection & Risk Monitoring",
    category: "Risk Analytics Dashboard",
    tools: ["Power BI", "DAX", "Data Modeling", "Risk Analysis"],
    description:
      "An interactive Power BI dashboard designed to monitor fraudulent transactions across payment channels, regions, and time periods.",
    image: "/projects/Fraud analysis.png",
    insights: [
      "Detected unusual transaction behavior across specific regions.",
      "Identified high-risk payment channels with elevated fraud activity.",
      "Highlighted peak periods where fraud cases increased noticeably.",
    ],
    impact: [
      "Improved visibility into risky transactions.",
      "Supported fraud monitoring and investigation workflows.",
      "Helped identify fraud-prone areas faster.",
    ],
    href: "https://github.com/michaelmaher2252001-create/Fraud-Detection-Risk-Monitoring",
  },
  {
    title: "Financial Performance & Variance Analysis",
    category: "Financial Analysis",
    tools: ["Power BI", "Excel", "Variance Analysis", "Financial Reporting"],
    description:
      "A financial analysis project comparing actual performance against targets to uncover revenue, cost, and profitability variances.",
    image: "/projects/financial-performance.png",
    insights: [
      "Identified unfavorable gaps between actual and target performance.",
      "Highlighted cost drivers affecting profitability.",
      "Detected underperforming segments that required management attention.",
    ],
    impact: [
      "Supported financial planning and performance review discussions.",
      "Improved understanding of key variance drivers.",
      "Enabled more informed financial decision-making.",
    ],
    href: "https://github.com/michaelmaher2252001-create/Financial-Performance-Variance-Analysis",
  },
  {
    title: "Sales Performance & Profitability Analysis",
    category: "Sales Analytics Dashboard",
    tools: ["Power BI", "DAX", "Profitability Analysis", "KPI Reporting"],
    description:
      "A Power BI dashboard analyzing sales trends, cost structure, and profit margins across regions, products, and time periods.",
    image: "/projects/sales.png",
    insights: [
      "Top-performing regions contributed the majority of total sales.",
      "COGS growth reduced profitability in selected markets.",
      "Clear seasonal sales patterns appeared across the year.",
    ],
    impact: [
      "Highlighted margin pressure areas for management review.",
      "Supported pricing and cost optimization discussions.",
      "Improved focus on high-performing markets and products.",
    ],
    href: "https://github.com/michaelmaher2252001-create/Sales-Performance-Profitability-Analysis",
  },
];

// ==========================
// SITE CONFIG
// ==========================

const siteConfig = {
  title: "Michael Maher | Data & Financial Analyst",
  description:
    "Portfolio of Michael Maher, a Data and Financial Analyst focused on Power BI dashboards, financial performance analysis, profitability insights, and business decision support.",

  name: "Michael Maher",
  role: "Data Analyst | Financial Analyst",
  location: "Cairo, Egypt",

  hero: {
    eyebrow: "Data & Financial Analyst",
    headline:
      "Turning financial and business data into clear, actionable insights.",
    subheadline:
      "I build analytical dashboards and financial reports that help businesses understand performance, monitor risk, and make better decisions.",
    primaryCTA: "View Projects",
    secondaryCTA: "Contact Me",
  },

  about:
    "I am a Data and Financial Analyst with a background in accounting, finance, and business administration. I focus on transforming raw data into meaningful dashboards, financial insights, and performance reports using tools such as Power BI, Excel, SQL, and DAX.",

  skills: {
    analytics: ["Power BI", "Excel", "SQL", "DAX", "Power Query"],
    finance: [
      "Financial Analysis",
      "Variance Analysis",
      "Profitability Analysis",
      "KPI Reporting",
      "Business Performance Review",
    ],
    business: [
      "Dashboard Design",
      "Data Storytelling",
      "Insight Generation",
      "Decision Support",
    ],
  },

  socials: {
    email: "michael.maher225200@gmail.com",
    github: "https://github.com/michaelmaher2252001-create",
    linkedin: "https://www.linkedin.com/in/michael-maher-3104ab216",
  },

  education: [
    {
      degree: "Bachelor of Commerce",
      school: "Faculty of Commerce, English Section, Helwan University",
      dateRange: "2019 – 2023",
      achievements: [
        "Major in Accounting, Finance, and Business Administration.",
        "Built a strong foundation in financial reporting, analysis, and business decision-making.",
        "Graduated in 2023.",
      ],
    },
    {
      degree: "Data Analytics & Power BI Learning Paths",
      school: "Microsoft Learn",
      dateRange: "2024 – Present",
      achievements: [
        "Preparing, modeling, and visualizing data with Power BI.",
        "Using DAX to create measures and analytical models.",
        "Designing effective reports and dashboards.",
        "Querying and modifying data using T-SQL.",
      ],
    },
  ],

  projects,
};

export default siteConfig;
