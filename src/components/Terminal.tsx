
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Minus, Square } from 'lucide-react';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => `Available commands:
  help      - Show this help message
  about     - Learn more about me
  skills    - List my technical skills
  projects  - Show featured projects
  contact   - Get my contact information
  cv        - Download my CV
  clear     - Clear the terminal
  whoami    - Display current user info
  date      - Show current date and time
  ls        - List available sections
  steam     - Open my Steam game`,
    
    about: () => `Hi! I'm Samuel Hamrák, a passionate Game Developer specializing in Unity and game systems.
I love creating engaging gameplay experiences and building robust game architectures.
Currently working on various indie game projects and prototypes.
My passion lies in creating fun, innovative games that players will remember.`,
    
    skills: () => `Technical Skills:
  Game Engines: Unity, Unreal Engine
  Languages: C#, C++, JavaScript, TypeScript
  Frameworks: React, Node.js, .NET
  Game Dev: Gameplay Programming, Rapid Prototyping
  Tools: Git, Visual Studio, Blender, Photoshop
  Concepts: Game Design, Performance Optimization, Clean Architecture`,
    
    projects: () => `Featured Projects:
  • LOGIN - Puzzle Game (Steam) - The world's most difficult login screen
  • Romoji - Word Game - Available on Google Play & App Store
  • Capybara Game - Casual Adventure Game
  • Various Unity Prototypes - Experimental gameplay concepts
  
  Type 'steam' to check out LOGIN on Steam!`,
    
    contact: () => `Contact Information:
  Instagram: @frantyshek
  LinkedIn: linkedin.com/in/samuel-hamrák-2a5a65246/
  Location: Slovakia
  Status: Open for game development opportunities`,
    
    cv: () => {
      // Trigger CV download
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Samuel_Hamrak_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return 'CV download initiated...';
    },
    
    steam: () => {
      window.open('https://store.steampowered.com/app/3896370/LOGIN/', '_blank');
      return 'Opening LOGIN on Steam... Prepare for the most frustrating login experience of your life!';
    },
    
    clear: () => { setHistory([]); return ''; },
    
    whoami: () => 'game_developer@unity:~$',
    
    date: () => new Date().toString(),
    
    ls: () => `total 8
drwxr-xr-x  2 dev dev 4096 Jan 15 12:00 games/
drwxr-xr-x  2 dev dev 4096 Jan 15 12:00 prototypes/
drwxr-xr-x  2 dev dev 4096 Jan 15 12:00 contact/
-rw-r--r--  1 dev dev 2048 Jan 15 12:00 CV.pdf
-rw-r--r--  1 dev dev 1337 Jan 15 12:00 README.md
-rw-r--r--  1 dev dev  420 Jan 15 12:00 skills.txt`
  };

  const executeCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    
    if (command === '') return;

    let output = '';
    if (command in commands) {
      output = commands[command as keyof typeof commands]();
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    if (command !== 'clear') {
      setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    }
    
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Terminal Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold animate-glow"
        >
          <span className="mr-2">$</span>
          Terminal
        </Button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div className="terminal-window w-96 h-80 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-primary/20">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                title="Close terminal"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"
                title="Minimize terminal"
              />
              <button 
                onClick={() => {
                  setHistory([]);
                  setInput('');
                }}
                className="w-3 h-3 rounded-full bg-terminal-green hover:bg-green-600 transition-colors cursor-pointer"
                title="Clear terminal"
              />
            </div>
            <span className="font-mono text-sm text-muted-foreground">portfolio-terminal</span>
            <div className="flex items-center space-x-1">
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-6 w-6 p-0 hover:bg-muted"
                onClick={() => setIsOpen(false)}
                title="Minimize"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-6 w-6 p-0 hover:bg-muted"
                onClick={() => {
                  setHistory([]);
                  setInput('');
                }}
                title="Clear"
              >
                <Square className="h-3 w-3" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-6 w-6 p-0 hover:bg-muted"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 h-full overflow-y-auto bg-background/95 font-mono text-sm">
            {/* Welcome Message */}
            {history.length === 0 && (
              <div className="text-terminal-green mb-4">
                <p>Welcome to Portfolio Terminal v1.0.0</p>
                <p>Type 'help' to see available commands.</p>
                <p></p>
              </div>
            )}

            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center">
                  <span className="text-terminal-green mr-2">$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
                {entry.output && (
                  <div className="text-terminal-cyan whitespace-pre-line ml-4 mb-2">
                    {entry.output}
                  </div>
                )}
              </div>
            ))}

            {/* Current Input */}
            <div className="flex items-center">
              <span className="text-terminal-green mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-foreground font-mono flex-1"
                placeholder="Type a command..."
              />
              <span className="animate-blink border-r-2 border-terminal-green ml-1"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
