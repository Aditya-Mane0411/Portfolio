
import { ChevronDown, Code, FileCode, SquareCode } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-dev-dark py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dev-pattern opacity-10 z-0"></div>
      
      {/* Animated Code Lines */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 font-code text-xs text-dev whitespace-nowrap">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2 animate-pulse-dev" style={{ animationDelay: `${i * 0.1}s` }}>
              {`function optimizePerformance(code) { const parsed = ast.parse(code); return transformer.apply(parsed, optimizations); }`}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 font-code text-xs text-dev-tertiary whitespace-nowrap">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2 animate-pulse-dev" style={{ animationDelay: `${i * 0.15}s` }}>
              {`const createComponent = ({ name, props, children }) => { return React.createElement(name, props, ...children); }`}
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 py-1 px-3 border border-dev/30 rounded-full bg-dev/5 w-fit">
              <Code className="w-4 h-4 text-dev" />
              <span className="text-sm font-code text-dev">Software Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block text-white">Hi, I'm </span>
              <span className="dev-title">Aditya Mane</span>
            </h1>
            
            <div className="typing-container">
              <span className="typing-text">B.Tech Engineering Student</span>
            </div>
            
            <p className="text-gray-300 max-w-lg">
              I specialize in full-stack development, UI/UX design, and creating scalable web applications. With a passion for clean code and innovative solutions, I continuously explore new technologies and development methodologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="https://github.com/Aditya-Mane0411" ></a>
              <button className="px-6 py-3 bg-dev text-dev-dark font-code font-semibold rounded hover:bg-dev/80 transition-colors duration-300 flex items-center gap-2">
                <SquareCode className="w-5 h-5" />
             <a href="https://github.com/Aditya-Mane0411" >View Projects</a>
              </button>
              
              <button className="px-6 py-3 bg-transparent border border-dev text-dev font-code font-semibold rounded hover:bg-dev/10 transition-colors duration-300 flex items-center gap-2">
                <FileCode className="w-5 h-5" />
              <a href="https://drive.google.com/file/d/1p4lEB2ofpbjb3E_3TdNgbVs8UQe938Ct/view?usp=sharing" >Download CV</a>  
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-full max-w-md mx-auto aspect-square rounded-lg bg-gradient-to-br from-dev/20 to-dev-tertiary/20 p-1">
              <div className="w-full h-full bg-dev-dark rounded-lg overflow-hidden border border-dev/30 relative">
                <img 
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051" 
                  alt=" - Software Developer" 
                  className="w-full h-full "
                />
                // object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-24 h-1 bg-dev"></div>
                <div className="absolute top-4 left-4 w-1 h-24 bg-dev"></div>
                <div className="absolute bottom-4 right-4 w-24 h-1 bg-dev-tertiary"></div>
                <div className="absolute bottom-4 right-4 w-1 h-24 bg-dev-tertiary"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 font-code">Scroll to explore</span>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 text-dev" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
