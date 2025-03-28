
import { Book, Calendar, GraduationCap, MapPin } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

const EducationItem = ({ degree, institution, duration, location, description, achievements }: EducationItemProps) => {
  return (
    <div className="relative pb-12">
      {/* Timeline styling */}
      <div className="absolute top-0 left-6 -ml-[6.5px] h-full w-0.5 bg-gradient-to-b from-cyber via-cyber/20 to-transparent"></div>
      <div className="absolute top-0 left-6 -ml-2.5 h-5 w-5 rounded-full border-2 border-cyber bg-cyber-dark"></div>
      
      <div className="ml-12 cyber-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{degree}</h3>
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyber/30 rounded-full bg-cyber/5 w-fit font-code text-sm text-cyber">
            <Calendar className="w-4 h-4" />
            {duration}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <GraduationCap className="w-4 h-4 text-cyber" />
            <span>{institution}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-cyber" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="font-code text-cyber mb-2">Key Achievements:</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyber mt-1">〉</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "University Institute of Technology",
      duration: "2020 - 2024",
      location: "Bangalore, India",
      description: "Specialized in Cybersecurity and Network Administration with a minor in Artificial Intelligence.",
      achievements: [
        "Maintained a CGPA of 9.2/10 throughout the program",
        "Led the university's Cybersecurity Club for 2 years",
        "Developed an intrusion detection system as part of final year project",
        "Received merit scholarship for academic excellence"
      ]
    },
    {
      degree: "High School Diploma (Science)",
      institution: "Delhi Public School",
      duration: "2018 - 2020",
      location: "Delhi, India",
      description: "Focused on Computer Science, Mathematics and Physics with special emphasis on programming fundamentals.",
      achievements: [
        "Graduated with 95% aggregate marks",
        "Won first place in National Science Olympiad",
        "Developed a school management system as a final project"
      ]
    },
    {
      degree: "Cybersecurity Bootcamp",
      institution: "Cyber Defense Institute",
      duration: "Summer 2022",
      location: "Online",
      description: "Intensive 12-week bootcamp focused on practical cybersecurity skills and ethical hacking methodologies.",
      achievements: [
        "Achieved top 5% ranking among 500+ participants",
        "Successfully identified and reported 3 zero-day vulnerabilities",
        "Received Excellence in Penetration Testing certificate"
      ]
    }
  ];

  return (
    <section id="education" className="section-container bg-cyber-dark/50">
      <h2 className="section-title">
        <Book className="w-6 h-6 text-cyber" />
        Education
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {educationHistory.map((education, index) => (
          <EducationItem key={index} {...education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
