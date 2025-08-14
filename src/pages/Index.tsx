
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Blog';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Terminal from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Terminal />
    </div>
  );
};

export default Index;
