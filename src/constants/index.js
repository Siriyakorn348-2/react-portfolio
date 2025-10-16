

export const HERO_CONTENT = `I am a third-year student at Khon Kaen University with a strong interest in web application development. 
Although I don't have real-world experience yet, I am eager to learn new technologies and enhance 
my skills in building efficient applications. I have gained knowledge in programming languages 
and frameworks such as HTML, CSS, JavaScript, React, and Node.js, which has helped me understand the web development process more clearly. I am ready to apply the skills 
I have learned in real projects and collaborate with teams to develop web applications that meet user and organizational needs.`;

export const ABOUT_TEXT = `I am a Computer Science student at Khon Kaen University with a current GPA of 3.75.
I have a strong passion for software development and data analysis and am preparing for an internship soon.
Through my academic journey, I have honed skills in programming, problem-solving, and teamwork. I aim to apply these skills in challenging and innovative projects to contribute to organizational growth while continuing to develop myself professionally.`;

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
    description: "Web Food review.",
    github: "https://github.com/Siriyakorn348-2/Food_review", 
    techStack: "Node JS, Express, MongoDB",
    year: "2023", 
  },
  {
    name: "Project 3",
    description: "Web Blog .",
    github: "https://github.com/Siriyakorn348-2/react-web_blog", 
    techStack: "Node JS, Express, MongoDB",
    year: "2024 - Present", 
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
    { name: 'Git & GitHub' },
    { name: 'Visual Studio Code' },
    { name: 'Webpack' },
    { name: 'Responsive Design' },
    { name: 'Figma' },
  ],
  softSkills: [
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Teamwork' },
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
    company: "Your Company / Organization Name",
    duration: "Jun - Nov 2025",
    details: `
- Gathered user requirements and identified key issues by analyzing root causes
- Designed interactive prototypes to communicate ideas
- Developed web applications using TypeScript, Node.js, Next.js, and MUI
- Conducted UAT and tested system performance
- Deployed to production and monitored post-launch
    `,
  },
]
