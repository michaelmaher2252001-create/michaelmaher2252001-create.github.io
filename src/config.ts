// ==========================
// PROFILE INFORMATION
// ==========================

export const profile = {
  name: "Michael Maher",
  role: "Data Analyst | Financial Analyst",
  location: "Cairo, Egypt",
  email: "michaelmaher2252001@gmail.com",
  summary:
    "Data and Financial Analyst experienced in transforming financial and business data into actionable insights using Power BI, Excel, SQL, and Excel-based financial analysis. Strong focus on performance tracking, risk analysis, and decision support.",

  social: {
    github: "https://github.com/michaelmaher2252001-create",
    linkedin: "https://www.linkedin.com/in/michael-maher",
    email: "mailto:michaelmaher2252001@gmail.com"
  }
};

// ==========================
// PROJECTS (CASE‑STUDY STYLE)
// ==========================

export const projects = [
  {
    title: "Fraud Detection & Risk Monitoring",
    shortDescription:
      "Fraud analysis dashboard highlighting risk exposure across transactions, channels, and regions.",
    fullDescription:
      "This project analyzes financial transaction data to detect fraudulent activity, evaluate risk exposure, and support fraud monitoring decisions. The dashboard enables financial institutions to identify high‑risk channels and regions and track fraud impact over time.",
    image: "/projects/fraud.png",
    tools: ["Power BI", "DAX", "Excel"],
    githubUrl:
      "https://github.com/michaelmaher2252001-create/Fraud-Detection-Risk-Monitoring",
    insights: [
      "Fraud represents a small share of transactions but a significant financial impact",
      "Certain payment channels show higher fraud exposure",
      "Fraud activity is concentrated in specific geographic regions"
    ]
  },
  {
    title: "Financial Performance & Variance Analysis",
    shortDescription:
      "Financial dashboard comparing actual versus target performance with variance analysis.",
    fullDescription:
      "This dashboard evaluates financial performance by comparing actual sales against targets, analyzing variance, profitability, and country‑level performance to support management decision‑making.",
    image: "/projects/financial-performance.png",
    tools: ["Power BI", "DAX", "Excel"],
    githubUrl:
      "https://github.com/michaelmaher2252001-create/Financial-Performance-Variance-Analysis",
    insights: [
      "Overall sales slightly underperformed compared to financial targets",
      "A limited number of countries generate most profits",
      "Discount strategies have a direct impact on margin performance"
    ]
  },
  {
    title: "Sales Performance & Profitability Analysis",
    shortDescription:
      "Sales and profitability analysis across products, regions, and time.",
    fullDescription:
      "This project analyzes sales trends, product category performance, and profit margins to evaluate business performance and identify revenue and efficiency improvement opportunities.",
    image: "/projects/sales.png",
    tools: ["Power BI", "Excel"],
    githubUrl:
      "https://github.com/michaelmaher2252001-create/Sales-Performance-Profitability-Analysis",
    insights: [
      "Sales exhibit clear seasonal trends",
      "A small number of product categories drive most profits",
      "Profit margins vary significantly across regions"
    ]
  }
];
