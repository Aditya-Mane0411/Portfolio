
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
  className="w-full h-full object-contain p-6 mix-blend-normal transition-all duration-300"
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
      title: "JavaScript Essentials ",
      issuer: "Cisco",
      date: "July 2023",
      //credentialId: "AWS123456789",
      imageUrl: "https://www.infoworld.com/wp-content/uploads/2025/05/2263137-0-24139200-1747637392-shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all",
      link: "https://www.playbook.com/s/adityamane/4ULpMiTZvThDSGC8YP4G6ry6?assetToken=3Lo14krewBXkxTknPfWNShHv"
    },
    {
      title: "Python Essentials",
      issuer: "Cisco",
      date: "July 2023",
      //credentialId: "MS987654321",
      imageUrl: "https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg",
      link: "https://www.playbook.com/s/adityamane/Wyyysz1deNgtbFygm7igU9kL?assetToken=4E4Bz7HkSeffJUJrdVPXuvgx"
    },
    {      
      title: "Java Programming",
      issuer: "Udemy",
      date: "April 2023",
   //   credentialId: "SCRUM87654321",
      imageUrl: "https://amigoscode.com/assets/thumbnails/courses/java-for-developers.webp",
      link: "https://www.scrum.org/certificates"
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      date: "June 2024",
    //  credentialId: "GCP234567891",
      imageUrl: "https://www.computerworld.com/wp-content/uploads/2025/02/2517498-0-09119900-1740378700-shutterstock_offset_2321455729.jpg?quality=50&strip=all&w=1024",
      link: "https://www.playbook.com/s/adityamane/Wyyysz1deNgtbFygm7igU9kL?assetToken=4E4Bz7HkSeffJUJrdVPXuvgx"
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco",
      date: "April 2024",
    //  credentialId: "META12345678",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      link: "https://www.playbook.com/s/adityamane/n9FnsCozJ5zodGsQfuzjFQMJ?assetToken=LRRscicTb7H3TCpaUkmCvRvX"
    },
    {
      title: "Google Cybersecurity",
      issuer: "Coursera",
      date: "June 2024",
    //  credentialId: "NODE98765432",
      imageUrl: "https://images.credly.com/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png",
      link: "https://www.playbook.com/s/adityamane/KKST8gt6xWAieTH1Da1tv8gj?assetToken=okuVtfpAWkDex88sDRNBTM7u"
    },
    {
      title: "DSA in Python",
      issuer: "Udemy",
      date: "March 2025",
   //   credentialId: "SCRUM87654321",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTp5_rdoavOMP26C_CmQO_NqSzMw-qA-OVQ&s",
      link: "https://www.playbook.com/s/adityamane/KKST8gt6xWAieTH1Da1tv8gj?assetToken=okuVtfpAWkDex88sDRNBTM7u"
    }
  ];

  return (
    <section id="certifications" className="section-container bg-dev-/50">
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