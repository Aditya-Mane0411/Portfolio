
import { Code, Database, Lock, Server, Shield, Terminal } from "lucide-react";

// Skill component
const Skill = ({ icon: Icon, name, level }: { icon: any, name: string, level: number }) => {
  return (
    <div className="cyber-card p-4">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-cyber" />
        <h3 className="font-code text-sm font-medium">{name}</h3>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyber to-cyber-secondary rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: "Network Security", icon: Shield, level: 90 },
    { name: "Penetration Testing", icon: Lock, level: 85 },
    { name: "Python", icon: Code, level: 95 },
    { name: "Linux Administration", icon: Terminal, level: 80 },
    { name: "Cloud Security", icon: Server, level: 75 },
    { name: "Database Security", icon: Database, level: 85 }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <Terminal className="w-6 h-6 text-cyber" />
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-300 mb-6">
            Hello! I'm a final-year B.Tech student specializing in Cybersecurity and Computer Engineering. My journey in the world of technology began when I first discovered my passion for solving complex problems and protecting digital systems from emerging threats.
          </p>
          
          <p className="text-gray-300 mb-6">
            I have a strong foundation in programming, network security, cryptography, and ethical hacking. Throughout my academic career, I've focused on developing practical skills alongside theoretical knowledge to prepare for the rapidly evolving cybersecurity landscape.
          </p>
          
          <p className="text-gray-300">
            When I'm not securing systems or writing code, you can find me participating in CTF (Capture The Flag) competitions, contributing to open-source security tools, and staying updated with the latest cybersecurity research and vulnerabilities.
          </p>
          
          <div className="mt-8 code-block">
            <pre>{`const aboutMe = {
  name: "John Doe",
  role: "Cybersecurity Engineer",
  education: "B.Tech Computer Engineering",
  interests: ["Ethical Hacking", "Secure Coding", "Digital Forensics"],
  languages: ["Python", "C/C++", "JavaScript", "Bash"],
  currentFocus: "Cloud Security & Zero Trust Architecture"
};`}</pre>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-code text-cyber mb-4">Technical Skills</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
          
          <h3 className="text-xl font-code text-cyber mt-8 mb-4">Certifications & Achievements</h3>
          
          <ul className="space-y-3">
            {[
              "Certified Ethical Hacker (CEH)",
              "CompTIA Security+",
              "AWS Certified Security - Specialty",
              "1st Place, National Cybersecurity Hackathon 2023",
              "Bug Bounty Hunter with 15+ verified vulnerabilities"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cyber mt-1">〉</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
