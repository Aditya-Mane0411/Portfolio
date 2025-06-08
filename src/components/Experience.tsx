
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
      title: "Full Stack Web Development Intern",
      company: "Placify Technologies",
      duration: "June 2024 - Aug 2024",
      location: "Remote",
      description: "Worked on building responsive, cross-platform web applications using modern web development technologies.",
      responsibilities: [
        "Developed and maintained responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap",
        "Designed and deployed a personal portfolio website showcasing projects, certifications, and technical skills.",
        "Ensured cross-browser compatibility and responsive design across multiple screen sizes and devices",
        "Troubleshot and debugged issues in both front-end and back-end codebases"
      ],
      technologies: ["React", "HTML", "CSS", "Node.js", "Express", "MongoDB", "Git"],
     // link: "https://www.playbook.com/s/adityamane/hY3kngkWVX8Pw2mUYam5kWmE?assetToken=jN14r7fuf7Mkq21F9WPDmL4L"
    },
    {
      title: "Cybersecurity Intern",
      company: "Cyber Vidyapeeth",
      duration: "June 2023 - Aug 2023",
      location: "Remote",
      description: "gained hands-on experience in core cybersecurity concepts, tools, and practices by actively participating in real-world projects under expert mentorship.",
      responsibilities: [
        "Implemented cybersecurity basics in actual live projects using Kali Linux",
        "Developing tools and applications for cybersecurity purposes",
        "Worked closely with mentors to design and implement security-focused Python applications",
        "Explored tools and techniques used in ethical hacking, OSINT (Open Source Intelligence), and vulnerability assessment"
      ],
      technologies: ["Python", "Wireshark", "Nmap"],
    //  link: "https://www.playbook.com/s/adityamane/zH2QaEenEJwSwvDaNeUpwJxa?assetToken=L84iDBg2ptQxAVKkJvCVh7b3"
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
