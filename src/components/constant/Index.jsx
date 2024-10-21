import {
  BookOpenText,
  Code,
  Dock,
  Facebook,
  Figma,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiFigma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import elysium from "@assets/elysium.png";
import primo from "@assets/primo.png";
import helpdesk from "@assets/helpdesk.png";
import cms from "@assets/cms.png";
import sass from "@assets/sass.png";

// This is for Navbar
export const NavItems = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/edmark-gariando-497794275/",
    icon: <Linkedin size={20} />,
  },
  {
    id: 2,
    href: "https://github.com/kramislife",
    icon: <Github size={20} />,
  },
  {
    id: 3,
    href: "mailto:edmark@example.com",
    icon: <Mail size={20} />,
  },
  {
    id: 4,
    href: "https://www.facebook.com/marky.gariando",
    icon: <Facebook size={20} />,
  },
  {
    id: 5,
    href: "https://www.instagram.com/markeyyy._/",
    icon: <Instagram size={20} />,
  },
];

//This is for Technologies Section
export const Technology = [
  {
    id: 1,
    name: "HTML 5",
    icon: <FaHtml5 size={50} />,
    color: "#E34F26", // HTML5 Orange
  },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={50} />,
    color: "#38B2AC", // Tailwind Teal
  },
  {
    id: 3,
    name: "React JS",
    icon: <FaReact size={50} />,
    color: "#61DAFB", // React Blue
  },
  {
    id: 4,
    name: "ShadCn",
    icon: <SiShadcnui size={50} />,
    color: "#D1D5DB", // ShadCn Gray
  },
  {
    id: 5,
    name: "Framer Motion",
    icon: <TbBrandFramerMotion size={50} />,
    color: "white", // Framer Motion Pink
  },
  {
    id: 6,
    name: "Figma",
    icon: <SiFigma size={50} />,
    color: "#F24E1E", // Figma Orange
  },
  {
    id: 7,
    name: "GitHub",
    icon: <FaGithub size={50} />,
    color: "white", // GitHub Dark Gray
  },
];

// This is for Projects Section
export const Project = [
  {
    id: 1,
    name: "Elysium VR",
    type: "Personal Project",
    image: elysium,
    description:
      "This virtual reality (VR) website was designed to educate users on how VR technology works. It also leverages UI elements to create a smooth, immersive experience.",
    link: "https://elysium-virtual-reality.vercel.app/",
    tool: ["HTML", "Tailwind CSS", "React JS", "Framer Motion", "ShadCN"],
  },
  {
    id: 2,
    name: "IT Help Desk Portal",
    type: "Internship",
    image: helpdesk,
    description:
      "The IT Help Desk Portal was built to streamline the process of helping users find solutions to their technical problems. It leverages a comprehensive knowledge base, interactive guides, and a simple interface that ensures users can resolve issues quickly and independently.",
    link: "https://drive.google.com/file/d/1VPJwF3EvOj-7PGX7b9T55mrgXkV8ppCu/view",
    tool: [
      "HTML",
      "Tailwind CSS",
      "React JS",
      "Framer Motion",
      "ShadCN",
      "Laravel",
      "MySQL",
    ],
  },
  {
    id: 3,
    name: "Primos's Coffee Shop",
    type: "Personal Project",
    image: primo,
    description:
      "A virtual reality platform that allows users to explore and interact with a 3D environment using VR headsets.",
    link: "https://primos-coffee-shop.vercel.app/",
    tool: ["HTML", "Tailwind CSS", "React JS", "Framer Motion", "ShadCN"],
  },
  {
    id: 4,
    name: "Student Academic Services System",
    type: "Capstone | Front-end Web Developer",
    image: sass,
    description:
      "A virtual reality platform that allows users to explore and interact with a 3D environment using VR headsets.",
    link: "https://www.google.com",
    tool: ["HTML", "Bootstrap CSS", "Vanilla JavaScript", "Python", "MySQL"],
  },
  {
    id: 5,
    name: "Complaint Management System using Naive Bayes Algorithm",
    type: "Research | Full-stack Web Developer",
    image: cms,
    description:
      "A virtual reality platform that allows users to explore and interact with a 3D environment using VR headsets.",
    link: "https://www.google.com",
    tool: ["HTML", "Bootstrap CSS", "Vanilla JavaScript"],
  },
];

export const brandColors = {
  HTML: "#E44D26",
  CSS: "#1572B6",
  "Bootstrap CSS": "#7952B3",
  "Tailwind CSS": "#38B2AC",
  "React JS": "#61DAFB",
  "Framer Motion": "#FF0081",
  ShadCN: "#F6B93B",
  "Vanilla JavaScript": "#F7DF1E",
  Laravel: "#FF2D20",
  Python: "#306998",
  MySQL: "#4479A1",
};

// This is for Experience Section
export const Experience = [
  {
    id: 1,
    company: "ABC Corp.",
    title: "Software Engineer",
    location: "San Francisco, CA",
    duration: "2020 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// This is for Services Section
export const Service = [
  {
    id: 1,
    title: "Responsive Design",
    description:
      "Responsive design ensures websites adjust to any device, from desktops to smartphones.",
    icon: <Dock size={30} />,
  },
  {
    id: 2,
    title: "UI/UX",
    description:
      "UI focuses on the look and feel of the website, while UX ensures it's easy to use and provides a smooth, enjoyable experience.",
    icon: <Figma size={30} />,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    icon: <Code size={30} />,
  },
  {
    id: 4,
    title: "Dependencies",
    description:
      "Dependencies enhance functionality and streamline development processes, ensuring efficient code execution and improved user experience.",
    icon: <BookOpenText size={30} />,
  },
];
