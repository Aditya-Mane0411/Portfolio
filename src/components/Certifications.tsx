
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl: string;
  link?: string;
}

const CertificationCard = ({ title, issuer, date, credentialId, imageUrl, link }: CertificationProps) => {
  return (
    <div className="dev-card group hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-dev-dark/90 to-dev-dark/60 rounded-t-md">
        <div className="absolute inset-0 bg-dev-pattern opacity-30"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-contain p-6 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300"
        />
      </div>
      
      <div className="p-5 border-t border-dev/20">
        <h3 className="font-bold text-lg text-white mb-1">{title}</h3>
        <p className="text-gray-300 mb-3">{issuer}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-dev" />
          <span className="text-sm text-gray-300">{date}</span>
        </div>
        
        {credentialId && (
          <p className="text-xs text-gray-400 mb-3 font-code">Credential ID: {credentialId}</p>
        )}
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dev hover:text-dev-secondary transition-colors mt-2 text-sm font-code"
          >
            <ExternalLink className="w-4 h-4" />
            Verify Certificate
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS123456789",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      link: "https://aws.amazon.com/certification"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "August 2023",
      credentialId: "MS987654321",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      link: "https://learn.microsoft.com/en-us/certifications"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "March 2023",
      credentialId: "GCP234567891",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      link: "https://cloud.google.com/certification"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "February 2023",
      credentialId: "META12345678",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      link: "https://www.meta.com/certificates"
    },
    {
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "November 2022",
      credentialId: "NODE98765432",
      imageUrl: "https://images.unsplash.com/photo-1562813733-b31f0941b2b6",
      link: "https://openjsf.org"
    },
    {
      title: "Professional Scrum Developer",
      issuer: "Scrum.org",
      date: "September 2022",
      credentialId: "SCRUM87654321",
      imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
      link: "https://www.scrum.org/certificates"
    }
  ];

  return (
    <section id="certifications" className="section-container bg-dev-dark/50">
      <h2 className="section-title">
        <Award className="w-6 h-6 text-dev" />
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} {...certification} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
