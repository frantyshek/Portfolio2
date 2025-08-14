
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      id: 1,
      period: '2022 - Present',
      title: 'Theory of Digital Games',
      institution: 'Faculty of Mass Media Communication, University of Ss. Cyril and Methodius in Trnava',
      description: 'Specialized in digital game theory, game design principles, and interactive media.',
      tags: ['Game Theory', 'Digital Media', 'Interactive Design']
    },
    {
      id: 2,
      period: '2018 - 2022',
      title: 'Information Technology',
      institution: 'Súkromná stredná odborná škola Tatranská Akadémia',
      description: 'Comprehensive education in information technology fundamentals and programming.',
      tags: ['Information Technology', 'Programming', 'Computer Science']
    },
    {
      id: 3,
      period: '2022',
      title: 'Summer Game Dev 2022',
      institution: 'Game Development course under professional supervision',
      description: 'Intensive game development course focusing on practical game creation skills.',
      tags: ['Game Development', 'Unity', 'Professional Training']
    }
  ];

  const workExperience = [
    {
      id: 1,
      period: '02/2023 – Present',
      title: 'Programmer at Impact Games',
      company: 'Impact Games',
      description: 'Worked on Rocket Brains and Romoji, responsible for game mechanics and multiplayer systems, using Unity Engine for 3D development.',
      tags: ['Unity Engine', 'Game Mechanics', 'Multiplayer Systems', '3D Development'],
      current: true
    },
    {
      id: 2,
      period: '09/2023 – 09/2024',
      title: 'Programmer Intern at Fono Labs',
      company: 'Fono Labs',
      description: 'Contributed to Desert Drifters and ClaustrOff, focusing on gameplay and UI programming in Unity Engine.',
      tags: ['Unity Engine', 'Gameplay Programming', 'UI Programming', 'Game Development'],
      current: false
    },
    {
      id: 3,
      period: '09/2022 – 02/2023',
      title: 'Programmer at ARTillery',
      company: 'ARTillery',
      description: 'Worked on Forest Invaders, a 2D game developed using Unity Engine.',
      tags: ['Unity Engine', '2D Game Development', 'Game Programming'],
      current: false
    }
  ];

  const renderExperienceCard = (item: any, type: 'education' | 'work') => (
    <Card key={item.id} className="project-card">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="font-mono text-xl text-terminal-cyan">
                {item.title}
              </CardTitle>
              {item.current && (
                <Badge className="bg-terminal-green text-black font-mono text-xs">
                  Current
                </Badge>
              )}
            </div>
            <CardDescription className="font-mono text-terminal-amber">
              {type === 'education' ? item.institution : item.company}
            </CardDescription>
            <CardDescription className="font-mono mt-2">
              {item.description}
            </CardDescription>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <Calendar className="h-4 w-4" />
          <span>{item.period}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-amber glow-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> cat ~/career/journey.md
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
              <TabsTrigger 
                value="work" 
                className="font-mono data-[state=active]:bg-terminal-green data-[state=active]:text-black"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Work Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="font-mono data-[state=active]:bg-terminal-green data-[state=active]:text-black"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="work" className="space-y-6">
              {workExperience.map((item) => renderExperienceCard(item, 'work'))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {education.map((item) => renderExperienceCard(item, 'education'))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
