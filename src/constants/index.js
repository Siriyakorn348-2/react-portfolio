import { p } from "framer-motion/client";

export const HERO_CONTENT = `Computer Science graduate from Khon Kaen University with hands-on experience in web application development using C#, ASP.NET Core, SQL Server, JavaScript, and Next.js. Experienced in developing and maintaining applications, integrating RESTful APIs, and working with SQL Server databases.
 Strong analytical, problem-solving, and teamwork skills with the ability to learn quickly and adapt to new technologies.
`;


export const ABOUT_TEXT = `During my studies and internship, I worked on web applications, from gathering requirements and understanding user needs to designing user flows, wireframes, and building responsive interfaces.`;

export const PROJECTS = [
  {
    name: "Project 1",
    description: "An application for dog owners.",
    github: "https://github.com/Siriyakorn348-2/PettyHub", 
    techStack: "Kotlin, Firebase",
    year: "2024 - Present", 
    images: [
      "/images/project1/1.png",
      "/images/project1/2.png",
      "/images/project1/3.png",
      "/images/project1/4.png",
      "/images/project1/5.png",
    ],
    details: `
- Features: Record pet information, medication reminders, share photos with friends
- Uses Firebase for data storage and push notifications
- Developed in Kotlin using Android Studio
    `,
  },
    {
    name: "Project 2",
    description: "Web Movie Reviews.",
    github: "https://github.com/Siriyakorn348-2/movies-review", 
    liveUrl: "https://movies-review-gamma.vercel.app/",
    techStack: "React,Tailwind CSS,Node.js, Express, PostgreSQL ",
    year: "2025", 
    images: [
      "/images/project2-1/1.png",
    ],
    details: `
-Developed a full-stack movie review web app with React, Tailwind CSS, Node.js, Express, and PostgreSQL
-Built RESTful APIs for movies, reviews, favorites, blogs, and comments using Prisma ORM
-Implemented JWT authentication, bcrypt, and integrated TMDB API for movie data
-Created a responsive and interactive user interface for browsing movies and interacting with content
    `,
  },
  {
    name: "Project 3",
    description: "Web Blog platform.",
    github: "https://github.com/Siriyakorn348-2/react-web_blog", 
    techStack: "Node.js, Express, MongoDB",
    year: "2024 - Present", 
    images: [
      "/images/project3/1.jpg",
    ],
    details: `
- Blog website for posting articles and comments
- Frontend built with React + TailwindCSS
- Backend built with Node.js + Express + MongoDB
    `,
  },
];


export const SKILLS = {
  Design: [
    { name: 'Figma' },
    { name: 'Wireframing' },
    { name: 'Prototyping' },
    { name: 'User Flow' }
  ],
  frontend: [
    { name: 'HTML,CSS' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'MUI' },
  ],
  backend: [
    { name: 'C#' },
    { name: '.NET' },
    { name: 'SQL Server' },
  ],

  softSkills: [
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Teamwork' },
    { name: 'Responsibility' }
  ],
};

export const CONTACT = {
  address: "Kalasin , Thailand",
  phoneNo: "+66 649 056 690",
  email: "siriyakorn0327@gmail.com",
  github: "Siriyakorn348-2"
};


export const WORK_EXPERIENCES = [
  {
    position: "Web Developer Intern",
    company: "REPCO NEX INDUSTRIAL SOLUTIONS ",
    duration: "Jun - Nov 2025",
    details: `
- Collected user requirements and designed user interfaces using Figma.
- Developed interactive web interfaces using Next.js, TypeScript, and MUI.
- Implemented TypeScript across the project, reducing runtime errors and bugs.
- Applied responsive design principles to ensure correct display across devices, improving mobile user experience.
- Designed and optimized reusable components, enhancing development efficiency.
- Collaborated with backend developers to integrate RESTful APIs and improve web performance, resulting in faster data retrieval and smoother user experiences.
    `,
  },
  {
    position: "Full Stack Developer",
    company: "Techbox Innovation Co., Ltd. ( Senior Com Ltd.) ",
    duration: "Feb - May 2026",
    details: ` 
-Developed and maintained business applications using C# and ASP.NET Core 8.
-Designed and optimized SQL Server queries and database operations.
-Integrated RESTful APIs and supported backend services.
-Resolved system issues and enhanced application performance.
-Used GitLab for version control and collaborative development.
    `,
  }
]
