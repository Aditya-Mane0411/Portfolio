
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

const BlogPostCard = ({ title, excerpt, date, category, readTime, imageUrl, slug }: BlogPostProps) => {
  return (
    <div className="cyber-card group overflow-hidden hover:shadow-[0_0_15px_rgba(12,255,225,0.3)] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/70 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyber/30 rounded-full bg-cyber-dark/80 backdrop-blur-sm w-fit font-code text-xs text-cyber">
            {category}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          <div className="text-gray-400 text-sm">{readTime} read</div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber transition-colors">{title}</h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-cyber hover:text-cyber-secondary transition-colors font-code text-sm group"
        >
          Read Article 
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Zero Trust Architecture in Modern Networks",
      excerpt: "Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters. Learn how to implement this approach in your organization.",
      date: "February 15, 2024",
      category: "Network Security",
      readTime: "8 min",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      slug: "understanding-zero-trust-architecture"
    },
    {
      title: "Secure Coding Practices Every Developer Should Know",
      excerpt: "Security vulnerabilities often stem from poor coding practices. This guide covers essential secure coding techniques that can prevent common security flaws in your applications.",
      date: "January 28, 2024",
      category: "Secure Development",
      readTime: "6 min",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      slug: "secure-coding-practices"
    },
    {
      title: "Introduction to Cloud Security: Protecting Your AWS Infrastructure",
      excerpt: "As organizations migrate to the cloud, securing cloud infrastructure becomes critical. Learn about AWS security best practices and common pitfalls to avoid.",
      date: "December 10, 2023",
      category: "Cloud Security",
      readTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2",
      slug: "aws-cloud-security-intro"
    },
    {
      title: "The Rise of Ransomware: Trends and Protection Strategies",
      excerpt: "Ransomware attacks continue to increase in sophistication and frequency. Discover the latest trends and effective strategies to protect your organization.",
      date: "November 21, 2023",
      category: "Threat Intelligence",
      readTime: "7 min",
      imageUrl: "https://images.unsplash.com/photo-1614064642639-e398cf05badb",
      slug: "ransomware-trends-protection"
    },
    {
      title: "CTF Guide: Getting Started with Capture The Flag Competitions",
      excerpt: "Capture The Flag competitions are a great way to practice cybersecurity skills. This beginner's guide will help you get started with CTF challenges and competitions.",
      date: "October 15, 2023",
      category: "Ethical Hacking",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      slug: "ctf-beginners-guide"
    },
    {
      title: "IoT Security: Protecting Your Connected Devices",
      excerpt: "The proliferation of IoT devices has created new security challenges. Learn how to secure your connected devices and protect your privacy in an increasingly connected world.",
      date: "September 8, 2023",
      category: "IoT Security",
      readTime: "9 min",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
      slug: "iot-security-connected-devices"
    }
  ];

  return (
    <section id="blogs" className="section-container bg-cyber-dark/50">
      <h2 className="section-title">
        <FileText className="w-6 h-6 text-cyber" />
        Blog Articles
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a
          href="#"
          className="px-6 py-3 bg-transparent border border-cyber text-cyber font-code font-semibold rounded hover:bg-cyber/10 transition-colors duration-300 inline-flex items-center gap-2"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Blogs;
