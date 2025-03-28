
import { Code, Database, FileCode, Server, Settings, Terminal } from "lucide-react";

// Skill component
const Skill = ({ icon: Icon, name, level }: { icon: any, name: string, level: number }) => {
  return (
    <div className="dev-card p-4">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-dev" />
        <h3 className="font-code text-sm font-medium">{name}</h3>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-dev to-dev-tertiary rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "Backend Development", icon: Server, level: 85 },
    { name: "React & Next.js", icon: FileCode, level: 95 },
    { name: "DevOps & CI/CD", icon: Terminal, level: 80 },
    { name: "Database Design", icon: Database, level: 75 },
    { name: "System Architecture", icon: Settings, level: 85 }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <Terminal className="w-6 h-6 text-dev" />
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-300 mb-6">
            Hello! I'm a final-year B.Tech student specializing in Computer Engineering with a focus on full-stack development. My journey in software engineering began when I discovered my passion for building applications that solve real-world problems.
          </p>
          
          <p className="text-gray-300 mb-6">
            I have a strong foundation in modern web technologies, cloud infrastructure, and software design patterns. Throughout my academic career, I've focused on developing practical skills alongside theoretical knowledge to build scalable and maintainable software solutions.
          </p>
          
          <p className="text-gray-300">
            When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, and exploring emerging technologies like serverless architectures and edge computing.
          </p>
          
          <div className="mt-8 code-block">
            <pre>{`const aboutMe = {
  name: "John Doe",
  role: "Software Developer",
  education: "B.Tech Computer Engineering",
  interests: ["Web Development", "Cloud Computing", "UI/UX Design"],
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  currentFocus: "Building scalable applications with React and Node.js"
};`}</pre>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-code text-dev mb-4">Technical Skills</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
          
          <h3 className="text-xl font-code text-dev mt-8 mb-4">Certifications & Achievements</h3>
          
          <ul className="space-y-3">
            {[
              "AWS Certified Developer - Associate",
              "Microsoft Certified: Azure Developer Associate",
              "Google Cloud Professional Developer",
              "1st Place, National Coding Challenge 2023",
              "Open Source Contributor with 25+ pull requests merged"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-dev mt-1">〉</span>
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
