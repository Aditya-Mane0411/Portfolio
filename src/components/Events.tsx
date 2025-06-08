
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
    <div className="dev-card group overflow-hidden">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dev-dark via-dev-dark/60 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-dev/30 rounded-full bg-dev-dark/80 backdrop-blur-sm w-fit font-code text-xs text-dev mb-2">
            {getTypeIcon()}
            {getTypeLabel()}
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4 text-dev" />
            <span className="text-sm">{date}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-dev" />
            <span className="text-sm">{location}</span>
          </div>
          
          {achievement && (
            <div className="flex items-center gap-2 text-dev mt-1">
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
            className="inline-flex items-center gap-2 text-dev hover:text-dev-secondary transition-colors mt-2 text-sm font-code"
          >
            <ExternalLink className="w-4 h-4" />
            Verify
          </a>
        )}
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: "Hack IITK",
      type: "hackathon" as const,
      date: "February 2025",
      location: "On-site event",
      description: "A coding competition focused on developing innovative AI integrated software solutions for real-world problems.",
      achievement: "Finalist",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      link: "https://www.playbook.com/s/adityamane/JAiV1QMJVKtKPyUgSqrrXebN?assetToken=iHxT2E1YZWY3pEHPLjibKa5o"
    },
    {
      title: "Cybersecurity with Ethical Hacking",
      type: "workshop" as const,
      date: "January 2025",
      location: "IIT Hyderabad, India",
      description: "A hands-on workshop focused on core cybersecurity principles and ethical hacking practices, conducted by industry experts and faculty at IIT Hyderabad.",
      imageUrl: "https://www.shutterstock.com/image-vector/anonymous-hacker-using-laptop-on-260nw-2318813861.jpg",
      link: "https://www.playbook.com/s/adityamane/s1q5u23H7jRMP6XUaU5GLJHN?assetToken=kz1M1xdEeT5EXhhhuUH3QYJo"
    },
    {
      title: "Identity Shield Summit",
      type: "conference" as const,
      date: "Jaunary 2025",
      location: "Pune, India",
      description: "The IdentityShield Summit '25 conference united the cybersecurity community, highlighting innovation and collaboration in the age of AI.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGyG65QJf-CvOylaxQR3C8ZjstjwT78QpnQ&s",
      link: "https://webdevsummit.dev"
    },
   
  ];

  return (
    <section id="events" className="section-container">
      <h2 className="section-title">
        <Calendar className="w-6 h-6 text-dev" />
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
