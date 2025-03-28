
import { Bookmark, Calendar, Cpu, ExternalLink, MapPin, Trophy, Users } from "lucide-react";

interface EventProps {
  title: string;
  type: "hackathon" | "conference" | "workshop";
  date: string;
  location: string;
  description: string;
  achievement?: string;
  imageUrl: string;
  link?: string;
}

const EventCard = ({ title, type, date, location, description, achievement, imageUrl, link }: EventProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "hackathon":
        return <Cpu className="w-4 h-4" />;
      case "conference":
        return <Users className="w-4 h-4" />;
      case "workshop":
        return <Bookmark className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "hackathon":
        return "Hackathon";
      case "conference":
        return "Conference";
      case "workshop":
        return "Workshop";
      default:
        return type;
    }
  };

  return (
    <div className="cyber-card group overflow-hidden">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/60 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyber/30 rounded-full bg-cyber-dark/80 backdrop-blur-sm w-fit font-code text-xs text-cyber mb-2">
            {getTypeIcon()}
            {getTypeLabel()}
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4 text-cyber" />
            <span className="text-sm">{date}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-cyber" />
            <span className="text-sm">{location}</span>
          </div>
          
          {achievement && (
            <div className="flex items-center gap-2 text-cyber mt-1">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">{achievement}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyber hover:text-cyber-secondary transition-colors mt-2 text-sm font-code"
          >
            <ExternalLink className="w-4 h-4" />
            Event Details
          </a>
        )}
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: "National Cybersecurity Championship",
      type: "hackathon" as const,
      date: "October 2023",
      location: "Virtual Event",
      description: "A 48-hour capture-the-flag competition focused on web security, cryptography, reverse engineering, and forensics challenges.",
      achievement: "1st Place Winner",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      link: "https://nationalcyberchampionship.com"
    },
    {
      title: "DEF CON 31",
      type: "conference" as const,
      date: "August 2023",
      location: "Las Vegas, NV, USA",
      description: "The world's largest hacker convention, featuring the latest research, developments, and emerging threats in information security.",
      imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae",
      link: "https://defcon.org"
    },
    {
      title: "Cloud Security Summit",
      type: "conference" as const,
      date: "May 2023",
      location: "Bangalore, India",
      description: "A specialized conference on securing cloud infrastructure, featuring talks from industry experts on best practices and emerging threats.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "https://cloudsecuritysummit.dev"
    },
    {
      title: "Ethical Hacking Bootcamp",
      type: "workshop" as const,
      date: "March 2023",
      location: "Delhi, India",
      description: "An intensive 3-day workshop covering practical ethical hacking techniques, tools, and methodologies for penetration testing.",
      imageUrl: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2",
      link: "https://ethicalhackingbootcamp.com"
    },
    {
      title: "University CTF Challenge",
      type: "hackathon" as const,
      date: "February 2023",
      location: "University Campus",
      description: "An inter-university competition to solve cybersecurity challenges and capture flags in a simulated environment.",
      achievement: "2nd Place",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      link: "https://university-ctf.edu"
    },
    {
      title: "Network Security Workshop",
      type: "workshop" as const,
      date: "December 2022",
      location: "Mumbai, India",
      description: "A hands-on workshop focused on securing network infrastructure, detecting intrusions, and implementing defense mechanisms.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      link: "https://networksecurityworkshop.com"
    }
  ];

  return (
    <section id="events" className="section-container">
      <h2 className="section-title">
        <Calendar className="w-6 h-6 text-cyber" />
        Events & Conferences
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
