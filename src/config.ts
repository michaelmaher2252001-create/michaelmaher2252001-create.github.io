const siteConfig = {
  name: "Michael Maher",
  role: "Data Analyst | Financial Analyst",
  location: "Cairo, Egypt",

  email: "michael.maher2252001@gmail.com",
  linkedin: "https://www.linkedin.com/in/michaelmaher-analyst",
  github: "https://github.com/michaelmaher2252001-create",

  socials: {
    email: "michael.maher2252001@gmail.com",
    linkedin: "https://www.linkedin.com/in/michaelmaher-analyst",
    github: "https://github.com/michaelmaher2252001-create",
  },

  hero: {
    eyebrow: "Data & Financial Analyst",
    headline:
      "Turning financial and business data into clear, actionable insights.",
    subheadline:
      "I build analytical dashboards and financial reports that help businesses understand performance, monitor risk, and make better decisions.",
  },

  about:
    "I am a Data and Financial Analyst with a background in accounting, finance, and business administration. I focus on transforming raw data into meaningful dashboards, financial insights, and performance reports using Power BI, Excel, SQL, and DAX.",

  skills: {
    analytics: ["Power BI", "Excel", "SQL", "DAX", "Power Query"],
    finance: ["Financial Analysis", "Variance Analysis", "Profitability Analysis", "KPI Reporting"],
    business: ["Dashboard Design", "Data Storytelling", "Insight Generation", "Decision Support"],
  },

  projects: [
    {
      category: "Tax & Financial Analytics",
      title: "Effective Tax Rates on the Egyptian Exchange",
      description:
        "An end-to-end analysis of what EGX-listed companies actually pay in corporate tax against Egypt's 22.5% statutory rate. Built from audited financial statements for 10 companies across 6 sectors, FY2021-2024, through Excel, SQL Server, and Power BI.",
      image: "/projects/egx-tax-rates.png",
      href: "/projects/egx-effective-tax-rates.pdf",
      tags: ["Power BI", "SQL Server", "Star Schema", "DAX"],
      insights: [
        "Weighted-average effective tax rate of 20.4%, below the 22.5% statutory rate.",
        "Sample-wide rate declined from 23.8% in 2021 to 18.3% in 2024, tracking Egypt's currency devaluations.",
        "Rates ranged from 11.3% to 25.8%; only Food & Beverage and Real Estate exceeded statutory as sectors.",
      ],
      impact: [
        "Showed that headline effective rates are not comparable without adjusting for reporting basis and income mix.",
        "Isolated associate income and fair-value gains as the main distortions in reported tax rates.",
        "Provided a reusable dimensional model for sector and company-level tax benchmarking.",
      ],
    },
    {
      category: "Data Validation & Monitoring",
      title: "Transaction Monitoring & Fraud Flag Validation",
      description:
        "A Power BI monitoring dashboard over 5.0M transactions across 4 payment channels and 9 cities, paired with a validation exercise testing whether the dataset's fraud flag carried any signal at all.",
      image: "/projects/fraud-analysis.png",
      href: "/projects/fraud-analysis.pdf",
      tags: ["Power BI", "DAX", "Data Validation", "Data Quality"],
      insights: [
        "Flag rate of 3.59% overall, but between 3.58% and 3.60% in every city and on every payment channel.",
        "Risk scores were identical for flagged and unflagged transactions: velocity 10.50 vs 10.51, geo-anomaly 0.50 vs 0.50.",
        "Score averages matched the means of uniform distributions, indicating the values and the flag were generated independently at random.",
      ],
      impact: [
        "Established that no detection model or risk pattern could be derived from this dataset before any was built.",
        "Documented the negative finding rather than reporting channel or regional patterns the data could not support.",
        "Separated what the data can describe (volumes, values, channel mix) from what it cannot.",
      ],
    },
    {
      category: "Pricing & Margin Analysis",
      title: "Discount Impact & Margin Analysis",
      description:
        "An analysis of what discounting actually costs, across 1.13M units, 5 countries and 6 products. Built in Power BI on Microsoft's Financial Sample dataset (USD).",
      image: "/projects/financial-performance.png",
      href: "/projects/financial-performance.pdf",
      tags: ["Power BI", "DAX", "Margin Analysis", "Pricing"],
      insights: [
        "Discounting cost 7.20% of list revenue — $127.93M gross sales converted to $118.73M net.",
        "Profit margin fell from 21.86% on undiscounted sales to 9.07% at the highest discount band.",
        "Heavily discounted sales took 35% of volume but returned only 20% of profit; lightly discounted sales took 23% of volume and returned 37%.",
      ],
      impact: [
        "Identified the point at which discounting stops paying: profit per unit peaks in the low band at 2.8x the high band, and exceeds undiscounted sales.",
        "Quantified where discounting runs deepest — the US at 8.21% against Germany at 5.68%, and Velo at 7.95% against VTT at 6.63%.",
        "Noted that part of the margin decline is definitional rather than behavioural, so the volume and profit-per-unit views carry the argument.",
      ],
    },
    {
      category: "Sales & Profitability Analysis",
      title: "Sales Performance & Profitability Analysis",
      description:
        "A Power BI dashboard analyzing sales trends, cost structure, and profit margins across regions, products, and segments, covering September 2013 to December 2014.",
      image: "/projects/sales.png",
      href: "/projects/sales.pdf",
      tags: ["Power BI", "Profitability Analysis", "KPI Reporting"],
      insights: [
        "1.13M units sold generating $118.73M in sales, at a 14.23% profit margin.",
        "Government was the largest segment at 41.8% of units sold.",
        "France, Germany and Canada led on profit; the United States and Mexico trailed.",
      ],
      impact: [
        "Highlighted margin pressure areas for management review.",
        "Supported pricing and cost optimization discussions.",
        "Improved focus on high-performing markets and products.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Commerce",
      school: "Faculty of Commerce, English Section, Helwan University",
      dateRange: "2019 - 2023",
      achievements: [
        "Major in Accounting, Finance, and Business Administration.",
        "Built a strong foundation in financial reporting, analysis, and business decision-making.",
        "Graduated in 2023.",
      ],
    },
    {
      degree: "Data Analytics & Power BI Learning Paths",
      school: "Microsoft Learn",
      dateRange: "2024 - Present",
      achievements: [
        "Preparing, modeling, and visualizing data with Power BI.",
        "Using DAX to create measures and analytical models.",
        "Designing effective reports and dashboards.",
        "Querying and modifying data using T-SQL.",
      ],
    },
  ],
};

export default siteConfig;
