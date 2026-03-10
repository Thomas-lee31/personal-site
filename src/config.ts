export const siteConfig = {
  name: "Thomas Lee",
  title: "Software Engineer",
  description:
    "Portfolio of Thomas Lee — Software Engineer interested in Web3 and startups.",
  accentColor: "#1d4ed8",
  social: {
    github: "https://github.com/Thomas-lee31",
    linkedin: "https://www.linkedin.com/in/shangcheng-lee/",
    twitter: "https://x.com/masilee04",
  },
  aboutMe:
    "I'm a software engineer passionate about Web3 and startups. I enjoy building at the intersection of decentralized technology and real-world applications — from DeFi payment infrastructure to AI-powered agents. Always looking to push what's possible.",
  skills: [
    "TypeScript",
    "React",
    "Python",
    "Web3",
    "Node.js",
    "PostgreSQL",
    "Solidity",
  ],
  projects: [
    {
      name: "Hotel Booking AI Agent",
      description:
        "An AI-Agent for handling hotel search, reservation, and payment.",
      link: "https://github.com/SeaPay-ai/hotel-ai",
      skills: ["Python", "TypeScript", "x402"],
    },
    {
      name: "SeaPay",
      description: "Enabling gasless USDC payments on multiple EVM chains.",
      link: "https://github.com/ZzyzxLabs/sea-pay",
      skills: ["TypeScript", "React", "Web3"],
    },
    {
      name: "Bucky's Menu",
      description: "Helping users get notified when their favorite food is served.",
      link: "https://github.com/Thomas-lee31/Bucky-s-Menu",
      skills: ["TypeScript", "PostgreSQL"],
    },
  ],
  experience: [
    {
      company: "Coinbase",
      companyUrl: "https://www.coinbase.com/",
      title: "Software Engineering Intern",
      dateRange: "Summer 2025",
      bullets: [] as string[],
    },
    {
      company: "Academia Sinica",
      companyUrl: "https://www.sinica.edu.tw/en",
      title: "Research Intern",
      dateRange: "Summer 2024",
      bullets: [] as string[],
    },
    {
      company: "Taiwan Asia Semiconductor Corp.",
      companyUrl: "https://en.tascsemi.com/",
      title: "Software Engineering Intern",
      dateRange: "Summer 2023",
      bullets: [] as string[],
    },
  ],
  funFacts: [
    {
      label: "Favorite Artist",
      prompt: "Guess who?",
      answer: "David Tao",
      answerUrl: "https://youtu.be/aidyvlz5vqE?si=19jlcbs3PCDqL-D7",
      image: "/david.jpeg",
    },
    {
      label: "Favorite Basketball Player",
      prompt: "Who dominates?",
      answer: "LeBron James — the 🐐",
      answerUrl: "https://youtube.com/shorts/u_mazHGvjHc?si=R9zV1zlcAm_ntJkB",
      image: "/lebron.jpg",
    },
    {
      label: "Productivity Fuel",
      prompt: "What keeps me building?",
      answer: "Ramen 🍜",
      answerUrl: null,
      image: "/ramen.jpg",
    },
  ],
};
