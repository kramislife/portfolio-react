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
    description:
      "The standard markup language for creating web pages, enabling structure and multimedia support.",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={50} />,
    color: "#38B2AC", // Tailwind Teal
    description:
      "A utility-first CSS framework for rapid UI development, promoting responsive design and consistency.",
  },
  {
    id: 3,
    name: "React JS",
    icon: <FaReact size={50} />,
    color: "#61DAFB", // React Blue
    description:
      "A popular JavaScript library for building user interfaces, focusing on component-based architecture.",
  },
  {
    id: 4,
    name: "ShadCn",
    icon: <SiShadcnui size={50} />,
    color: "#F08080", // ShadCn Gray
    description:
      "A design system and component library for React, providing customizable and reusable UI components.",
  },
  {
    id: 5,
    name: "Framer Motion",
    icon: <TbBrandFramerMotion size={50} />,
    color: "#FF0081", // Framer Motion Pink
    description:
      "An animation library for React, enabling smooth and complex animations with a simple API.",
  },
  {
    id: 6,
    name: "Figma",
    icon: <SiFigma size={50} />,
    color: " #3CB371", // Figma Orange
    description:
      "A collaborative design tool for creating interfaces and prototypes in real-time.",
  },
  {
    id: 7,
    name: "GitHub",
    icon: <FaGithub size={50} />,
    color: "#F5F5DC", // GitHub Dark Gray
    description:
      "A platform for version control and collaboration, allowing developers to manage code repositories.",
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
      "This virtual reality (VR) website was meticulously designed and developed to provide users with an engaging and educational experience about how VR technology operates. Utilizing cutting-edge web technologies, the platform features interactive UI elements and captivating visuals that immerse users in the world of VR. With a focus on intuitive navigation, the site guides users through the various aspects of VR, including its applications, benefits, and underlying technology. ",
    link: "https://elysium-virtual-reality.vercel.app/",
    tool: ["HTML", "Tailwind CSS", "React JS", "Framer Motion", "ShadCN"],
  },
  {
    id: 2,
    name: "IT Help Desk Portal",
    type: "Internship | Front-end Web Developer",
    image: helpdesk,
    description:
      "The IT Help Desk Portal was built to streamline the process of helping users find solutions to their technical problems. It leverages a comprehensive knowledge base, interactive guides, and a simple interface that ensures users can resolve issues quickly and independently. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
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
      "Primo's Coffee Shop is crafted to create a delightful and engaging online experience for coffee lovers. Built with React.js and styled using TailwindCSS, the interface features a clean and responsive design that allows users to easily browse the menu, learn about our specialty brews, and place orders with just a few clicks. Emphasizing user experience, the portal includes interactive elements and visually appealing graphics, ensuring that customers can find their favorite drinks and discover new offerings effortlessly.",
    link: "https://primos-coffee-shop.vercel.app/",
    tool: ["HTML", "Tailwind CSS", "React JS", "Framer Motion", "ShadCN"],
  },
  {
    id: 4,
    name: "Student Academic Services System",
    type: "Capstone | Front-end Web Developer",
    image: sass,
    description:
      "The Student Academic Services System is a modern solution designed to provide students with seamless, paperless access to essential academic services online. This system streamlines processes such as course registration, grade inquiries, and document requests, allowing students to manage their academic needs conveniently from anywhere. With a user-friendly interface, the platform enhances accessibility and efficiency, enabling students to navigate services with ease. By eliminating the need for physical paperwork, this system promotes sustainability while ensuring that students can focus on their academic success without the hassle of traditional administrative tasks.",
    tool: ["HTML", "Bootstrap CSS", "Vanilla JavaScript", "Python", "MySQL"],
  },
  {
    id: 5,
    name: "Complaint Management System using Naive Bayes Algorithm",
    type: "Research | Full-stack Web Developer",
    image: cms,
    description:
      "The University Complaint Management System is an innovative solution designed to streamline the process of handling student grievances. Utilizing the Naive Bayes algorithm, this system intelligently categorizes and analyzes complaints, enabling efficient resolution by administrative staff. The user-friendly interface allows students to submit their issues easily and track their status in real-time. By leveraging data-driven insights, the system enhances responsiveness and ensures that complaints are addressed promptly, ultimately fostering a supportive academic environment. This project not only improves communication between students and the administration but also demonstrates the application of machine learning in enhancing university services.",
    link: "https://www.youtube.com/watch?v=3jJVojIvULg&t=12s",
    tool: ["HTML", "Bootstrap CSS", "Vanilla JavaScript", "PHP", "MySQL"],
  },
];

export const brandColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Bootstrap CSS": "#7952B3",
  "Tailwind CSS": "#38B2AC",
  "React JS": "#61DAFB",
  "Framer Motion": "#FF0081",
  ShadCN: "#F08080",
  "Vanilla JavaScript": "#F6B93B",
  Laravel: "#FF2D20",
  Python: "#306998",
  MySQL: "#4479A1",
  PHP: "#DC143C",
};

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

//This is for Contact Section
// export const Contacts = [
//   {
//     id: 1,
//     name: "Email",
//     value: "info@example.com",
//     icon: <ImMail size={25} />,
//   },
//   {
//     id: 2,
//     name: "Phone",
//     value: "+1 123-456-7890",
//     icon: <ImPhone size={25} />,
//   },
//   {
//     id: 3,
//     name: "Address",
//     value: "123 Main St, City, State, 12345",
//     icon: <ImLocation size={25} />,
//   },
// ];
