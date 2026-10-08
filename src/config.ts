type TimelineItem = {
  title: string;
  org: string;
  orgUrl?: string;
  team?: string;
  dateRange?: string;
};

type Project = {
  name: string;
  description: string;
  link?: string;
};

type Interest = {
  title: string;
  body: string;
};

export const siteConfig = {
  name: "Thomas Lee",
  title: "Software Engineer",
  siteUrl: "https://thomaslee.dev",
  description:
    "Thomas Lee is a software engineer at IXL Learning, previously at Coinbase.",
  email: "PLACEHOLDER@example.com",
  linkedin: "https://www.linkedin.com/in/shangcheng-lee/",
  tagline: "Software engineer building reliable products and platforms.",
  about: [
    "I'm a software engineer on the Business Platform team at IXL Learning. Before that, I interned at Coinbase on Growth & App Infra.",
    "I studied Computer Sciences and Economics at the University of Wisconsin–Madison.",
  ],
  timeline: [
    {
      title: "Software Engineer",
      org: "IXL Learning",
      orgUrl: "https://www.ixl.com/",
      team: "Business Platform",
    },
    {
      title: "Software Engineering Intern",
      org: "Coinbase",
      orgUrl: "https://www.coinbase.com/",
      team: "Growth & App Infra",
      dateRange: "Summer 2025",
    },
    {
      title: "B.S. Computer Sciences & Economics",
      org: "University of Wisconsin–Madison",
      orgUrl: "https://www.wisc.edu/",
    },
  ] as TimelineItem[],
  projects: [] as Project[],
  beyondWork: [
    { title: "Finance", body: "[Placeholder: a few words about finance]" },
    { title: "Prediction markets", body: "[Placeholder: a few words about prediction markets]" },
    { title: "Working out", body: "[Placeholder: a few words about training]" },
    { title: "Tennis", body: "[Placeholder: a few words about tennis]" },
    { title: "Basketball", body: "[Placeholder: a few words about basketball]" },
    { title: "Nutrition", body: "[Placeholder: a few words about nutrition]" },
  ] as Interest[],
};
