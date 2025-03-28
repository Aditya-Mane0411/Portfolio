
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
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-cyber-dark/90 to-cyber-dark/60 rounded-t-md">
        <div className="absolute inset-0 bg-cyber-pattern opacity-30"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-contain p-6 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300"
        />
      </div>
      
      <div className="p-5 border-t border-cyber/20">
        <h3 className="font-bold text-lg text-white mb-1">{title}</h3>
        <p className="text-gray-300 mb-3">{issuer}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-cyber" />
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
            className="inline-flex items-center gap-2 text-cyber hover:text-cyber-secondary transition-colors mt-2 text-sm font-code"
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
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "December 2023",
      credentialId: "ECC123456789",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      link: "https://aspen.eccouncil.org"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "August 2023",
      credentialId: "COMP987654321",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      link: "https://www.comptia.org/certifications"
    },
    {
      title: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS234567891",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      link: "https://aws.amazon.com/certification"
    },
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "February 2023",
      credentialId: "OS12345678",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      link: "https://www.offensive-security.com/pwk-oscp/"
    },
    {
      title: "GIAC Security Essentials (GSEC)",
      issuer: "GIAC",
      date: "November 2022",
      credentialId: "GIAC98765432",
      imageUrl: "https://images.unsplash.com/photo-1562813733-b31f0941b2b6",
      link: "https://www.giac.org/certification/security-essentials-gsec"
    },
    {
      title: "Microsoft Certified: Azure Security Engineer Associate",
      issuer: "Microsoft",
      date: "September 2022",
      credentialId: "MS87654321",
      imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
      link: "https://learn.microsoft.com/en-us/certifications"
    }
  ];

  return (
    <section id="certifications" className="section-container bg-cyber-dark/50">
      <h2 className="section-title">
        <Award className="w-6 h-6 text-cyber" />
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
