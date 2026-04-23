// ==========================
// PROJECTS DATA
// ==========================

export const projects = [
  {
    title: "Fraud Detection & Risk Monitoring",
    description:
      "Power BI dashboard monitoring fraudulent transactions across payment channels and regions.",
    href: "https://github.com/michaelmaher2252001-create/Fraud-Detection-Risk-Monitoring",
    image: "/projects/fraud.png",
  },
  {
    title: "Financial Performance & Variance Analysis",
    description:
      "Analysis of actual versus target sales performance with variance and profitability insights.",
    href: "https://github.com/michaelmaher2252001-create/Financial-Performance-Variance-Analysis",
    image: "/projects/financial-performance.png",
  },
  {
    title: "Sales Performance & Profitability Analysis",
    description:
      "Dashboard analyzing sales trends, product performance, and profit margins.",
    href: "https://github.com/michaelmaher2252001-create/Sales-Performance-Profitability-Analysis",
    image: "/projects/sales.png",
  },
];

// ==========================
// SITE CONFIG
// ==========================

export const siteConfig = {
  title: "Michael Maher",
  description:
    "Data and Financial Analyst focused on financial performance analysis, profitability, and dashboard-driven business insights.",

  name: "Michael Maher",
  role: "Data Analyst | Financial Analyst",
  location: "Cairo, Egypt",
  email: "michaelmaher2252001@gmail.com",

  social: {
    github: "https://github.com/michaelmaher2252001-create",
    linkedin: "https://www.linkedin.com/in/michael-maher",
    email: "mailto:michaelmaher2252001@gmail.com",
  },

  // references the projects array above
  projects: projects,

  education: [
    {
      degree: "Bachelor’s Degree in Accounting",
      institution: "Helwan University",
      period: "2019 – 2023",
    },
  ],

  microsoftLearnPaths: [
    "Prepare data for analysis with Power BI",
    "Model data with Power BI",
    "Design effective reports in Power BI",
    "Manage and secure Power BI",
    "Use DAX in semantic models",
    "Query and modify data using Transact-SQL",
    "Get started with Microsoft data analytics",
  ],
};
