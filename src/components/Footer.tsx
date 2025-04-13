import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-dev/30 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Aditya</h3>
            <p className="text-gray-400 mb-6">
              B.Tech Engineering Student specializing in Software Development. Passionate about web technologies, cloud computing, and creating intuitive user experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-dev/30 text-dev hover:bg-dev hover:text-dev-dark transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-dev/30 text-dev hover:bg-dev hover:text-dev-dark transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-dev/30 text-dev hover:bg-dev hover:text-dev-dark transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:aditya@example.com" className="w-10 h-10 rounded-full flex items-center justify-center border border-dev/30 text-dev hover:bg-dev hover:text-dev-dark transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-dev transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-dev transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-dev transition-colors">Projects</a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-400 hover:text-dev transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-dev transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Latest Articles</h3>
            <ul className="space-y-4">
              {[
                "Building Scalable React Applications",
                "The Future of Frontend Development",
                "Optimizing Node.js Applications"
              ].map((article, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-dev mt-1 flex-shrink-0" />
                  <a href="#" className="text-gray-400 hover:text-dev transition-colors text-sm">{article}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aditya. All rights reserved.
          </div>
          
          <div className="inline-flex items-center">
            <span className="text-xs text-gray-500 mr-2">Made with</span>
            <span className="text-dev">❤</span>
            <span className="text-xs text-gray-500 ml-2">by Aditya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
