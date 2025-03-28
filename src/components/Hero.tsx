
import { ChevronDown, Lock, Shield, Terminal } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-cyber-dark py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cyber-pattern opacity-10 z-0"></div>
      
      {/* Animated Code Lines */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 font-code text-xs text-cyber whitespace-nowrap">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2 animate-pulse-cyber" style={{ animationDelay: `${i * 0.1}s` }}>
              {`const secureConnection = async () => { try { await crypto.encrypt(data, publicKey); } catch (e) { console.error("Security breach:", e); } }`}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 font-code text-xs text-cyber-secondary whitespace-nowrap">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2 animate-pulse-cyber" style={{ animationDelay: `${i * 0.15}s` }}>
              {`function detectIntrusion(networkTraffic) { return networkTraffic.filter(packet => packet.signature.match(maliciousPatterns)); }`}
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyber/30 rounded-full bg-cyber/5 w-fit">
              <Shield className="w-4 h-4 text-cyber" />
              <span className="text-sm font-code text-cyber">Cybersecurity Engineer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block text-white">Hi, I'm </span>
              <span className="cyber-title">John Doe</span>
            </h1>
            
            <div className="typing-container">
              <span className="typing-text">// B.Tech Engineering Student</span>
            </div>
            
            <p className="text-gray-300 max-w-lg">
              I specialize in cybersecurity solutions, ethical hacking, and secure software development. With a passion for protecting digital assets, I continuously explore the evolving landscape of cyber threats and defenses.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-6 py-3 bg-cyber text-cyber-dark font-code font-semibold rounded hover:bg-cyber/80 transition-colors duration-300 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                View Projects
              </button>
              
              <button className="px-6 py-3 bg-transparent border border-cyber text-cyber font-code font-semibold rounded hover:bg-cyber/10 transition-colors duration-300 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-full max-w-md mx-auto aspect-square rounded-lg bg-gradient-to-br from-cyber/20 to-cyber-tertiary/20 p-1">
              <div className="w-full h-full bg-cyber-dark rounded-lg overflow-hidden border border-cyber/30 relative">
                <img 
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051" 
                  alt="John Doe - Cybersecurity Engineer" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-24 h-1 bg-cyber"></div>
                <div className="absolute top-4 left-4 w-1 h-24 bg-cyber"></div>
                <div className="absolute bottom-4 right-4 w-24 h-1 bg-cyber-tertiary"></div>
                <div className="absolute bottom-4 right-4 w-1 h-24 bg-cyber-tertiary"></div>
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
            <ChevronDown className="w-6 h-6 text-cyber" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
