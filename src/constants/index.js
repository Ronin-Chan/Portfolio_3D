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
  blog,
  threejs,
  earth,
  microsoft,
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
    title: "Master of Software Engineering",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Full stack Developer",
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
    title: "Software Development Intern",
    company_name: "Dongguan Guangkida Electronic Technology Co., LTD",
    icon: earth,
    // iconBg: "#383E56",
    iconBg: "#000000",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Secondary development of an employee information system using React, Spring Boot and other related technologies.",
      "Identifying and solving existing faults in the system.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to make sure high-quality.",
    ],
  },
  {
    title: "Assistant Intern",
    company_name: "Microsoft (Guangzhou)",
    icon: microsoft,
    iconBg: "#000000",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developing a web app to identify the Winter Olympic mascots using React, Express and Azure APIs.",
      "Building an anomaly detector to detect abnormal temperatures",
      "Verified about 20 Azure APIs and document relevant data.",
      "Attending regular meeting and summarising key content.",
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
      "Web-based platform that allows users to create posts, chat with others, providing an insteresting real-time social network.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: chatty,
    source_code_link: "https://github.com/Ronin-Chan/Chatty_frontend",
  },
  {
    name: "Blog",
    description:
      "My personal blog website for sharing my notes on technologies.",
    tags: [
      {
        name: "VuePress",
        color: "blue-text-gradient",
      },
      {
        name: "Markdown",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Ronin-Chan/Blog",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
