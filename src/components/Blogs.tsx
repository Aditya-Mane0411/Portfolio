
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
    <div className="dev-card group overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dev-dark via-dev-dark/70 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-dev/30 rounded-full bg-dev-dark/80 backdrop-blur-sm w-fit font-code text-xs text-dev">
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
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-dev transition-colors">{title}</h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-dev hover:text-dev-secondary transition-colors font-code text-sm group"
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
      title: "Building Scalable React Applications with Custom Hooks",
      excerpt: "Custom hooks are a powerful feature in React that lets you extract component logic into reusable functions. Learn how to leverage them to build more maintainable applications.",
      date: "February 15, 2024",
      category: "React",
      readTime: "8 min",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      slug: "building-scalable-react-applications"
    },
    {
      title: "The Future of Frontend Development: What to Expect in 2024",
      excerpt: "Frontend development is constantly evolving. This article explores upcoming trends, technologies, and best practices that will shape the frontend landscape in 2024.",
      date: "January 28, 2024",
      category: "Web Development",
      readTime: "6 min",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      slug: "frontend-development-trends-2024"
    },
    {
      title: "Optimizing Node.js Applications for Performance",
      excerpt: "Performance optimization is crucial for Node.js applications. Discover effective strategies to improve your app's speed, reduce memory usage, and handle more concurrent users.",
      date: "December 10, 2023",
      category: "Backend",
      readTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2",
      slug: "nodejs-performance-optimization"
    },
    {
      title: "Implementing Authentication with JWT in React Applications",
      excerpt: "Learn how to implement secure authentication in your React applications using JSON Web Tokens (JWT) with best practices for token management and security.",
      date: "November 21, 2023",
      category: "Security",
      readTime: "7 min",
      imageUrl: "https://images.unsplash.com/photo-1614064642639-e398cf05badb",
      slug: "react-jwt-authentication"
    },
    {
      title: "Getting Started with TypeScript in React Projects",
      excerpt: "TypeScript adds static typing to JavaScript, making your code more robust and maintainable. This beginner's guide will help you integrate TypeScript into your React projects.",
      date: "October 15, 2023",
      category: "TypeScript",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      slug: "typescript-react-beginners-guide"
    },
    {
      title: "Building a Responsive Dashboard with Tailwind CSS",
      excerpt: "Tailwind CSS provides a utility-first approach to styling that can significantly speed up your development process. Learn how to build a responsive admin dashboard from scratch.",
      date: "September 8, 2023",
      category: "CSS",
      readTime: "9 min",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
      slug: "responsive-dashboard-tailwind-css"
    }
  ];

  return (
    <section id="blogs" className="section-container bg-dev-dark/50">
      <h2 className="section-title">
        <FileText className="w-6 h-6 text-dev" />
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
          className="px-6 py-3 bg-transparent border border-dev text-dev font-code font-semibold rounded hover:bg-dev/10 transition-colors duration-300 inline-flex items-center gap-2"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Blogs;
