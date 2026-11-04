// Edit everything about the portfolio here.
import infosysImg from "@/assets/certs/infosys.jpg.asset.json";
import infosysPdf from "@/assets/certs/infosys.pdf.asset.json";
import nptelImg from "@/assets/certs/nptel.jpg.asset.json";
import nptelPdf from "@/assets/certs/nptel.pdf.asset.json";
import spImg from "@/assets/certs/strategic-planning-in-the-ai-age.jpg.asset.json";
import spPdf from "@/assets/certs/strategic-planning-in-the-ai-age.pdf.asset.json";
import aiImg from "@/assets/certs/ai-for-business-professionals.jpg.asset.json";
import aiPdf from "@/assets/certs/ai-for-business-professionals.pdf.asset.json";
import dsImg from "@/assets/certs/data-science-analytics-1.jpg.asset.json";
import dsPdf from "@/assets/certs/data-science-analytics-1.pdf.asset.json";

export const profile = {
  name: "Jackson J",
  tagline: "Curious mind. Building what's next.",
  role: "Student • AI & Machine Learning",
  intro:
    "I'm an undergraduate exploring artificial intelligence and machine learning — learning how data, code and good questions come together to build useful things.",
  portrait: "" as string, // add a portrait image URL here
  college: "Your College Name",
};

export const about = [
  "I've always been the kind of person who wants to know how things work. That curiosity led me from tinkering with computers to studying Artificial Intelligence and Machine Learning, where every week brings a new idea to understand.",
  "Right now I'm focused on building strong foundations — Python, data, and the mathematics behind models — while picking up web development along the way. I learn best by making things, breaking them, and making them better.",
];

export const education = [
  { title: "B.Sc. Artificial Intelligence and Machine Learning", place: profile.college, status: "Currently pursuing" },
  { title: "Higher Secondary Schooling", place: "Infant Jesus Matriculation Higher Secondary School", status: "Completed" },
];

export const skills: Record<string, string[]> = {
  Programming: ["C++", "Java", "Python"],
  "Web Development": ["HTML", "CSS", "Angular"],
  "Artificial Intelligence & Machine Learning": ["Python Programming", "Machine Learning Basics", "Design & Analysis of Algorithms"],
  "Tools & Technologies": ["Visual Studio Code (VS Code)", "Google Colab", "GitHub"],
};

export const certificates = [
  { title: "Angular", org: "Infosys Springboard", image: infosysImg.url, file: infosysPdf.url },
  { title: "Python for Data Science", org: "NPTEL / IIT Madras", image: nptelImg.url, file: nptelPdf.url },
  { title: "Strategic Planning in the AI Age", org: "HP LIFE", image: spImg.url, file: spPdf.url },
  { title: "AI for Business Professionals", org: "HP LIFE", image: aiImg.url, file: aiPdf.url },
  { title: "Data Science & Analytics", org: "HP LIFE", image: dsImg.url, file: dsPdf.url },
];

export const exploring = ["Artificial Intelligence", "Machine Learning", "Python Development", "Data Science"];

export const contacts = [
  { label: "Email", value: "Jackson.25bscaiml@kprcas.ac.in", href: "mailto:Jackson.25bscaiml@kprcas.ac.in" },
  { label: "GitHub", value: "github.com/Jackson07-creator", href: "https://github.com/Jackson07-creator" },
  { label: "LinkedIn", value: "linkedin.com/in/jackson-j-4ba998382", href: "https://www.linkedin.com/in/jackson-j-4ba998382" },
];
