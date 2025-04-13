
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";
import { X, Menu, Code, FileCode, SquareCode } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Events", id: "events" },
  { name: "Blogs", id: "blogs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-dev-dark/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-dev" />
          <span className="font-code text-xl font-bold tracking-tight text-dev">
            Aditya<span className="text-white">.codes</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer font-code text-sm text-white hover:text-dev transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dev transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <button
            className="px-4 py-2 bg-dev-dark border border-dev text-dev font-code rounded hover:bg-dev hover:text-dev-dark transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-dev transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-[60px] left-0 w-full bg-dev-dark border-t border-dev/20 transition-all duration-300 md:hidden overflow-hidden",
          isMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer font-code text-white hover:text-dev py-2 transition-colors border-b border-dev/20"
            >
              {item.name}
            </Link>
          ))}
          <button
            className="py-2 mt-2 bg-dev-dark border border-dev text-dev font-code rounded hover:bg-dev hover:text-dev-dark transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
