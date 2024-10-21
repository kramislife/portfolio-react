import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiFigma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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
    name: "React",
    icon: <FaReact size={50} />,
    color: "#61DAFB", // React Blue
  },
  {
    id: 2,
    name: "HTML 5",
    icon: <FaHtml5 size={50} />,
    color: "#E34F26", // HTML5 Orange
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={50} />,
    color: "#38B2AC", // Tailwind Teal
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
    name: "GitHub",
    icon: <FaGithub size={50} />,
    color: "white", // GitHub Dark Gray
  },
  {
    id: 7,
    name: "Figma",
    icon: <SiFigma size={50} />,
    color: "#F24E1E", // Figma Orange
  },
];
