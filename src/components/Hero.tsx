
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Instagram, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textVariants = [
    "Hello, I'm a Game Developer",
    "I build 2D, 3D , Mobile & VR games.",
    "Turning ideas into playable experiences."
  ];
  const currentText = textVariants[currentTextIndex];

  // Generate falling symbols once to avoid re-rendering during typing
  const fallingSymbols = useMemo(() => {
    const symbols = ['0', '1', '{', '}', '(', ')', ';', '++', '--', '==', '!=', '&&', '||', 'if', 'for', 'while', 'class', 'function'];
    return [...Array(15)].map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3
    }));
  }, []);

  useEffect(() => {
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // After completing current text, wait 5-7 seconds then switch to next variant
      const switchTimeout = setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % textVariants.length);
        setDisplayText('');
        setCurrentIndex(0);
      }, Math.random() * 2000 + 5000); // 5-7 seconds
      return () => clearTimeout(switchTimeout);
    }
  }, [currentIndex, currentText, textVariants.length]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + 'cv.pdf'; // Use BASE_URL for GitHub Pages
    link.download = 'Samuel_Hamrak_CV.pdf'; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/frantyshek', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/samuel-hamrák-2a5a65246/', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Falling Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingSymbols.map((item) => (
          <div
            key={item.id}
            className="absolute text-terminal-green/15 font-mono text-sm animate-fall opacity-20"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-terminal-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-terminal-pink rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Typewriter Effect */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold">
              <span className="text-terminal-green glow-text">
                {displayText}
              </span>
              <span className="border-r-2 border-terminal-green animate-blink ml-1"></span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            Building elegant solutions with clean code
          </p>

          <div className="text-lg md:text-xl text-foreground/80 mb-12 space-y-2">
            <p className="font-mono">
              <span className="text-terminal-cyan">$</span> specializes_in: [
              <span className="text-terminal-amber">"unity_engine"</span>,
              <span className="text-terminal-amber">"unreal_engine"</span>,
              <span className="text-terminal-amber">"gameplay_programming"</span>,
              <span className="text-terminal-amber">"rapid_prototyping"</span>
              ]
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold px-8 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-black font-mono font-bold px-8 py-3 transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <button
              onClick={handleInstagramClick}
              className="text-muted-foreground hover:text-terminal-green transition-all duration-200 hover:scale-110 p-2"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </button>
            <button
              onClick={handleLinkedinClick}
              className="text-muted-foreground hover:text-terminal-cyan transition-all duration-200 hover:scale-110 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={handleScrollToProjects}
            className="cursor-pointer hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-terminal-green/10"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-6 w-6 text-terminal-green mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
