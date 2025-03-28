
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  link?: string;
}

const ExperienceItem = ({
  title,
  company,
  duration,
  location,
  description,
  responsibilities,
  technologies,
  link
}: ExperienceItemProps) => {
  return (
    <div className="relative pb-12">
      {/* Timeline styling */}
      <div className="absolute top-0 left-6 -ml-[6.5px] h-full w-0.5 bg-gradient-to-b from-dev-secondary via-dev-secondary/20 to-transparent"></div>
      <div className="absolute top-0 left-6 -ml-2.5 h-5 w-5 rounded-full border-2 border-dev-secondary bg-dev-dark"></div>
      
      <div className="ml-12 dev-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-dev-secondary/30 rounded-full bg-dev-secondary/5 w-fit font-code text-sm text-dev-secondary">
            <Calendar className="w-4 h-4" />
            {duration}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <Briefcase className="w-4 h-4 text-dev-secondary" />
            <span className="font-medium">{company}</span>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-dev-secondary hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="text-xs">Visit</span>
              </a>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-dev-secondary" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-code text-dev-secondary mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-dev-secondary mt-1">〉</span>
                <span className="text-gray-300">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-dev-dark border border-dev-secondary/30 rounded text-xs font-code text-dev-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "InnovateTech Solutions",
      duration: "May 2023 - Aug 2023",
      location: "Remote",
      description: "Worked with the development team to build and maintain web applications, focusing on responsive UI design and API integration.",
      responsibilities: [
        "Developed responsive frontend components using React and TypeScript",
        "Implemented RESTful APIs using Node.js and Express",
        "Participated in code reviews and pair programming sessions",
        "Optimized application performance through lazy loading and code splitting"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Git"],
      link: "https://innovatetech.com"
    },
    {
      title: "Junior Web Developer",
      company: "CodeCraft Technologies",
      duration: "June 2022 - Aug 2022",
      location: "Bangalore, India",
      description: "Worked on the frontend team to develop user interfaces and implement responsive designs for various client projects.",
      responsibilities: [
        "Created interactive UI components with React and Styled Components",
        "Implemented state management using Redux and Context API",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Fixed cross-browser compatibility issues and improved accessibility"
      ],
      technologies: ["React", "JavaScript", "Redux", "CSS3", "HTML5", "Figma"],
      link: "https://codecraft.tech"
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      duration: "Jan 2022 - May 2022",
      location: "Bangalore, India",
      description: "Assisted professor in research focused on machine learning applications in web development and user experience optimization.",
      responsibilities: [
        "Developed data collection and analysis scripts using Python",
        "Created visualizations of user interaction patterns",
        "Implemented machine learning models to predict user behavior",
        "Contributed to research publication on AI-enhanced web experiences"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib", "Jupyter", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <Briefcase className="w-6 h-6 text-dev" />
        Experience
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
