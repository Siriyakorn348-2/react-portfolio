
export const HERO_CONTENT = `I am a recent Computer Science graduate from Khon Kaen University with a strong interest in UX/UI design and digital product development.
I have experience in UX/UI design, starting from gathering user requirements, analyzing user problems and behavior, to creating user flows, wireframes, prototypes, and final UI designs that align with real user needs.
With a background in design and front-end development, I create intuitive and practical interfaces using Figma, Next.js, TypeScript, and MUI.
I am committed to creating meaningful user experiences and continuously improving my skills as a UX/UI Designer.
`;

export const ABOUT_TEXT = `I hold a degree in Computer Science with a cumulative GPA of 3.48. Through my studies and internship, I developed strong skills in problem-solving, teamwork, and digital product development. With experience in both design and front-end development, 
I am passionate about creating intuitive and user-centered interfaces. I am eager to apply my skills, contribute to meaningful projects, and continue growing as a UX/UI Designer.`;

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
    { name: 'GitHub' },
    { name: 'Visual Studio Code' },
    { name: 'Figma' },
  ],
  frontend: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    {name : 'TypeScript'},
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Nuxt.js' },
    { name: 'TailwindCSS' },
    { name: 'MUI' },
  ],
  backend: [
    { name: 'C#' },
    { name: '.NET' },
    { name: 'Kotlin' },
  ],

  softSkills: [
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Teamwork' },
    { name: 'Responsibility'}
  ],
};

export const CONTACT = {
  address: "Khon Kean, Thailand",
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
- Gathered user requirements and identified user pain points to translate business goals into user-centered solutions.
- Designed end-to-end user journeys, task flows, and user flows to create clear and intuitive product experiences.
- Planned information architecture and interaction patterns to improve navigation and reduce user friction throughout the product.
- Created wireframes, interactive prototypes, and final UI designs in Figma, focusing on usability, accessibility, and visual consistency.
- Designed and developed responsive web interfaces using Next.js, TypeScript, and MUI, transforming approved designs into fully functional products.
- Built reusable UI components and collaborated with backend developers to integrate RESTful APIs, ensuring smooth implementation and seamless user experiences across devices.
    `,
  },
]
