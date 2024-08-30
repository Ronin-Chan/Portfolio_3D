import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  chatty,
  tiktik,
  portfolio,
  threejs,
  earth,
  microsoft,
  ciilock,
  gpt,
  quill,
  car,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "AWS Cloud Practitioner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "CiiLOCK Engineering",
    icon: ciilock,
    iconBg: "#000000",
    date: "May 2024 - Present",
    points: [
      "Developed and optimised automation programs for WERS to improve the reliability and usability of programs for use by non-IT personnel, ensuring code security and enhancing overall process efficiency.",
      "Assisted in developing a web-based door customisation application, allowing customers to visually build and configure doors with real-time updates.",
      "Conducted data scraping to extract and process diverse resources that contribute to the company's business growth."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "CiiLOCK Engineering",
    icon: ciilock,
    iconBg: "#000000",
    date: "Nov 2023 - May 2024",
    points: [
      "Contributed to the full stack redevelopment of a web application utilised for controlling machines within the testing laboratory, ensuring its functionality and user experience aligned with project requirements.",
      "Assisted in the company's official website based on a Figma prototype, translating design concepts into a functional website to enhance the company's online presence.",
      "Implemented a program to enable secondary processing of data derived from files exported from thermal simulation software (THERM), improving data utilisation during follow-up inspections.",
      "Developed an automated program to utilise THERM for matching models with glass and accurately recording the corresponding data into a database file of WINDOW software."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Kwong Kei Tat Technology Co., Ltd.",
    icon: earth,
    // iconBg: "#383E56",
    iconBg: "#000000",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Developed a dynamic tagging functionality within the employee information system, enabling managers to assign multiple tags or attributes to each employee, streamlining resource allocation and talent management.",
      "Identified and resolved existing system issues, including fixing broken links, thereby improving overall system reliability and user experience.",
    ],
  },
  {
    title: "Test Engineer Intern",
    company_name: "Microsoft (Guangzhou)",
    icon: microsoft,
    iconBg: "#000000",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Conducted comprehensive testing on a website implementing image recognition technology and an anomaly detector, focusing on Azure API integration to ensure accuracy and reliability.",
      "Verified and documented approximately 20 Azure APIs, ensuring their reliability, and reporting relevant data for future reference",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chatty",
    description:
      "A web-based platform that allows users to create posts and chat with others, providing an interesting real-time social network.",
    tags: [
      {
        name: "MERN",
        color: "text-blue-300",
      },
      {
        name: "AWS/Terraform",
        color: "text-green-300",
      },
      {
        name: "Redis",
        color: "text-yellow-300",
      },
      {
        name: "Scss",
        color: "text-red-300",
      },
    ],
    image: chatty,
    source_code_link: "https://github.com/Ronin-Chan/Chatty_frontend",
  },
  {
    name: "Portfolio",
    description:
      "A 3D Developer Portfolio using 3D graphics and animations to bring content to life.",
    tags: [
      {
        name: "Vite.js/React",
        color: "text-blue-300",
      },
      {
        name: "Three.js",
        color: "text-green-300",
      },
      {
        name: "EmailJS",
        color: "text-yellow-300",
      },
      {
        name: "Tailwind",
        color: "text-red-300",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Ronin-Chan/Portfolio_3D",
  },
  {
    name: "Quill",
    description:
      "An AI-driven project allows users to have conversations with any PDF document",
    tags: [
      {
        name: "Next.js",
        color: "text-blue-300",
      },
      {
        name: "Prisma",
        color: "text-green-300",
      },
      {
        name: "Pinecone",
        color: "text-yellow-300",
      },
      {
        name: "tRPC",
        color: "text-red-300",
      },
    ],
    image: quill,
    source_code_link: "https://github.com/Ronin-Chan/Quill",
  },
  {
    name: "TikTik",
    description:
      "A social media website that allows users to share, comment on, and like videos, including advanced search, suggested accounts, and much more.",
    tags: [
      {
        name: "Next.js",
        color: "text-blue-300",
      },
      {
        name: "Sanity",
        color: "text-green-300",
      },
      {
        name: "Google OAuth",
        color: "text-yellow-200",
      },
      {
        name: "Tailwind",
        color: "text-red-300",
      },
    ],
    image: tiktik,
    source_code_link: "https://github.com/Ronin-Chan/TikTik",
  },
];

export { services, technologies, experiences, testimonials, projects };
