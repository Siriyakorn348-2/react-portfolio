
export const HERO_CONTENT = `I am a recent Computer Science graduate from Khon Kaen University with skills in web development and UI design.
 I am familiar with technologies such as TypeScript, JavaScript, Node.js, React, Next.js, MUI, and Figma.
I am passionate about building web applications and am always eager to learn new technologies.
 I am committed to growing as a developer and continuously improving my skills.`;

export const ABOUT_TEXT = `I hold a degree in Computer Science with a cumulative GPA of 3.46.
I am passionate about software development and data analysis, and I am ready to take on new challenges.
Through my studies and internship, I have developed strong skills in programming, problem-solving, and teamwork.
I am committed to applying these skills to deliver effective projects, support organizational growth, and continue developing professionally.`;

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
-Enabled rich text blogging with Quill/Lexical, image uploads via Cloudinary, and smooth UI with Framer Motion
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
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'MongoDB' },
    { name: 'Kotlin' },
  ],
  tools: [
    { name: 'GitHub' },
    { name: 'Visual Studio Code' },
    { name: 'Figma' },
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
-Collected user requirements and designed user interfaces using Figma.
-Developed interactive web interfaces using Next.js, TypeScript, and MUI.
-Implemented TypeScript across the project, reducing runtime errors and bugs.
-Applied responsive design principles to ensure correct display across devices, improving mobile user experience.
-Designed and optimized reusable components, enhancing development efficiency.
-Collaborated with backend developers to integrate RESTful APIs and improve web performance, resulting in faster data retrieval and smoother user experiences.
    `,
  },
]
