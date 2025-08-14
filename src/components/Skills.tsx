import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Brain, Globe } from 'lucide-react';
import { useMemo } from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'C#', level: 75 },
    { name: 'Unity Engine', level: 80 },
    { name: 'C++', level: 45 },
    { name: 'Unreal Engine', level: 50 },
    { name: 'Game Design', level: 70 },
    { name: 'Github', level: 70 },
    { name: 'Godot Engine', level: 40 }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 80 },
    { name: 'Teamwork', level: 85 },
    { name: 'Adaptability', level: 75 },
    { name: 'Creativity', level: 70 },
    { name: 'Communication', level: 75 }
  ];

  const languages = [
    { name: 'Slovak', level: 'Native (C2)', description: 'Fluent in both written and spoken Slovak.' },
    { name: 'English', level: 'Advanced (B2)', description: 'Advanced level of English.' }
  ];


  const renderSkillProgress = (skill: { name: string; level: number }) => (
    <div key={skill.name} className="space-y-2">
      <div className="flex justify-between font-mono text-sm">
        <span className="text-terminal-cyan">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress 
        value={skill.level} 
        className="h-2 bg-muted/30"
      />
    </div>
  );

  const renderLanguageCard = (language: { name: string; level: string; description: string }) => (
    <Card key={language.name} className="project-card">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Globe className="h-5 w-5 text-terminal-green" />
          <CardTitle className="font-mono text-lg text-terminal-cyan">
            {language.name}
          </CardTitle>
          <Badge className="bg-terminal-amber text-black font-mono text-xs">
            {language.level}
          </Badge>
        </div>
        <CardDescription className="font-mono">
          {language.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-amber glow-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> cat ~/skills/programming-expertise.md
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="h-5 w-5 text-terminal-green" />
                  <CardTitle className="font-mono text-xl text-terminal-cyan">
                    Programming & Technical Skills
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  {technicalSkills.map(renderSkillProgress)}
                </div>
              </CardHeader>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-terminal-green" />
                  <CardTitle className="font-mono text-xl text-terminal-cyan">
                    Soft Skills
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  {softSkills.map(renderSkillProgress)}
                </div>
              </CardHeader>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-mono font-bold text-terminal-amber mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6" />
              Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map(renderLanguageCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;