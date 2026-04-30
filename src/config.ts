// ==========================
// PROJECTS DATA
// ==========================

const projects = [
  {
    title: "Fraud Detection & Risk Monitoring",
    description:
      "Power BI dashboard monitoring fraudulent transactions across payment channels and geographic regions.",
    image: "/projects/fraud.png",
    insights: [
      "Detected unusual transaction patterns across specific regions",
      "Identified high-risk payment channels with elevated fraud rates",
      "Highlighted time periods with increased fraud activity",
    ],
    impact: [
      "Supported fraud risk monitoring and investigation efforts",
      "Improved visibility into high-risk transactions",
      "Enabled faster identification of fraud-prone areas",
    ],
    href: "https://github.com/michaelmaher2252001-create/Fraud-Detection-Risk-Monitoring",
  },
  {
    title: "Financial Performance & Variance Analysis",
    description:
      "Analysis of actual versus target performance to identify revenue, cost, and profitability variances.",
    image: "/projects/financial-performance.png",
    insights: [
      "Identified unfavorable variances between actual and target performance",
      "Highlighted cost drivers impacting profitability",
      "Detected segments consistently underperforming targets",
    ],
    impact: [
      "Supported performance review and planning discussions",
      "Improved understanding of variance drivers",
      "Enabled more informed financial decision-making",
    ],
    href: "https://github.com/michaelmaher2252001-create/Financial-Performance-Variance-Analysis",
  },
  {
    title: "Sales Performance & Profitability Analysis",
    description:
      "Power BI dashboard analyzing sales trends, cost structure, and profit margins across regions and time periods.",
    image: "/projects/sales.png",
    insights: [
      "Top-performing regions contributed the majority of total sales",
      "COGS growth reduced profitability in specific markets",
      "Clear seasonal sales patterns observed across the year",
    ],
    impact: [
      "Highlighted margin pressure areas for management review",
      "Supported pricing and cost optimization discussions",
      "Improved focus on high-performing markets and products",
    ],
    href: "https://github.com/michaelmaher2252001-create/Sales-Performance-Profitability-Analysis",
  },
];

// ==========================
// SITE CONFIG
// ==========================

const siteConfig = {
  title: "Michael Maher",
  description:
    "Data and Financial Analyst focused on financial performance analysis, profitability, and dashboard-driven business insights.",

  name: "Michael Maher",
  role: "Data Analyst | Financial Analyst",
  location: "Cairo, Egypt",

  socials: {
    email: "michael.maher225200@gmail.com",
    github: "https://github.com/michaelmaher2252001-create",
    linkedin: "https://www.linkedin.com/in/michael-maher-3104ab216",
  },

  education: [
    {
      degree: "Bachelor of Commerce",
      school: "Faculty of Commerce (English Section), Helwan University",
      dateRange: "2019 – 2023",
      achievements: [
        "Major in Accounting, Finance, and Business Administration",
        "Strong foundation in financial analysis, reporting, and business decision-making",
        "Graduated in 2023",
      ],
    },
    {
      degree: "Microsoft Learn – Data Analytics & Power BI Learning Paths",
      school: "Microsoft Learn",
      dateRange: "2024 – Present",
      achievements: [
        "Get started with Microsoft Data Analytics",
        "Prepare data for analysis with Power BI",
        "Model data using Power BI",
        "Use DAX in semantic models",
        "Design effective Power BI reports and dashboards",
        "Manage and secure Power BI environments",
        "Query and modify data using Transact-SQL (T-SQL)",
      ],
    },
  ],

  projects,
};

export default siteConfig;
