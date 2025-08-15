
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { getAssetPath } from '@/lib/assets';
import { Mail, Github, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Error", 
        description: "Email is required",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Error",
        description: "Subject is required", 
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Message is required",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        }]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-pink glow-text">Let's get in touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono mb-4">
            I'm looking for a job! Feel free to contact me about any opportunity, or just to chat.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-terminal-green shadow-lg shadow-terminal-green/20 overflow-hidden bg-terminal-green/10">
                <img 
                  src={getAssetPath("/lovable-uploads/5e6bb33e-5bf2-4eb8-8c6b-5dc414bf864d.png")} 
                  alt="Samuel Hamrák profile photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-terminal-cyan mb-6">
                Let's collaborate
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                I'm looking for a job! Feel free to contact me about any opportunity, 
                or just to chat about game development, Unity projects, or any interesting ideas. 
                Whether you're looking to build something amazing or need help with game development, let's connect!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:samuel.hamrak@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-terminal-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-terminal-green" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold">Email</h4>
                  <p className="text-muted-foreground font-mono">samuel.hamrak@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/frantyshek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-terminal-cyan/20 rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-terminal-cyan" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold">GitHub</h4>
                  <p className="text-muted-foreground font-mono">github.com/frantyshek</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/samuel-hamrák-2a5a65246/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-terminal-amber/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-terminal-amber" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground font-mono">samuel-hamrák</p>
                </div>
              </a>

              <a
                href="https://frantyshek.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-terminal-pink/20 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-terminal-pink" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 8.1c0-.5.5-1 1-1h1v5.9c0 1.1.9 2 2 2s2-.9 2-2V7.1h2v5.9c0 1.1.9 2 2 2s2-.9 2-2V7.1h2v5.9c0 1.1.9 2 2 2s2-.9 2-2V7.1h1c.5 0 1 .5 1 1v7.8c0 1.7-1.3 3.1-3 3.1H6c-1.7 0-3-1.4-3-3.1V8.1z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">itch.io</h4>
                  <p className="text-muted-foreground font-mono">frantyshek.itch.io</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/frantyshek/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">Instagram</h4>
                  <p className="text-muted-foreground font-mono">@frantyshek</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle className="font-mono text-terminal-green">
                Send a Message
              </CardTitle>
              <CardDescription className="font-mono">
                Fill out the form below and I'll get back to you soon!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration"
                    required
                    disabled={isSubmitting}
                    className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="bg-muted/50 border-primary/30 focus:border-primary font-mono resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
