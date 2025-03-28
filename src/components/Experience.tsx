
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
      <div className="absolute top-0 left-6 -ml-[6.5px] h-full w-0.5 bg-gradient-to-b from-cyber-secondary via-cyber-secondary/20 to-transparent"></div>
      <div className="absolute top-0 left-6 -ml-2.5 h-5 w-5 rounded-full border-2 border-cyber-secondary bg-cyber-dark"></div>
      
      <div className="ml-12 cyber-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyber-secondary/30 rounded-full bg-cyber-secondary/5 w-fit font-code text-sm text-cyber-secondary">
            <Calendar className="w-4 h-4" />
            {duration}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <Briefcase className="w-4 h-4 text-cyber-secondary" />
            <span className="font-medium">{company}</span>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-cyber-secondary hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="text-xs">Visit</span>
              </a>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-cyber-secondary" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-code text-cyber-secondary mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cyber-secondary mt-1">〉</span>
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
                className="px-2 py-1 bg-cyber-dark border border-cyber-secondary/30 rounded text-xs font-code text-cyber-secondary"
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
      title: "Cybersecurity Intern",
      company: "TechSecure Solutions",
      duration: "May 2023 - Aug 2023",
      location: "Remote",
      description: "Worked with the security operations team to monitor network traffic, analyze potential threats, and improve existing security infrastructure.",
      responsibilities: [
        "Assisted in conducting vulnerability assessments and penetration testing for client applications",
        "Developed automation scripts to streamline security monitoring processes",
        "Participated in threat hunting and incident response activities",
        "Contributed to the development of security documentation and guidelines"
      ],
      technologies: ["Kali Linux", "Metasploit", "Wireshark", "Python", "Burp Suite", "SIEM"],
      link: "https://techsecuresolutions.com"
    },
    {
      title: "Software Development Intern",
      company: "CodeCraft Technologies",
      duration: "June 2022 - Aug 2022",
      location: "Bangalore, India",
      description: "Worked on the backend team to develop secure API endpoints and implement proper authentication mechanisms.",
      responsibilities: [
        "Developed RESTful APIs with security best practices",
        "Implemented JWT-based authentication system",
        "Conducted code reviews focusing on security vulnerabilities",
        "Worked on fixing OWASP Top 10 vulnerabilities in the existing codebase"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "Git"],
      link: "https://codecraft.tech"
    },
    {
      title: "Research Assistant",
      company: "University Cybersecurity Lab",
      duration: "Jan 2022 - May 2022",
      location: "Bangalore, India",
      description: "Assisted professor in research focused on IoT security and privacy concerns in smart home devices.",
      responsibilities: [
        "Conducted literature reviews on IoT security vulnerabilities",
        "Designed and executed experiments to test security of smart home devices",
        "Documented findings and contributed to research publication",
        "Developed proof-of-concept exploits for discovered vulnerabilities"
      ],
      technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT", "ZigBee", "Network Analysis Tools"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <Briefcase className="w-6 h-6 text-cyber" />
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
