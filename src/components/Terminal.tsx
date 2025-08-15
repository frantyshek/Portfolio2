
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
  const terminalRef = useRef<HTMLDivElement>(null);

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
  steam     - Open my Steam game
  matrix    - Enter the Matrix
  hack      - Initiate hacking sequence
  ascii     - Display ASCII art
  joke      - Get a programming joke
  fortune   - Programming wisdom
  tree      - Show project structure
  uptime    - System uptime
  ping      - Ping a website`,
    
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
-rw-r--r--  1 dev dev  420 Jan 15 12:00 skills.txt`,

    matrix: () => {
      const lines = [
        '01001000 01100101 01101100 01101100 01101111',
        '01010100 01101000 01100101 01110010 01100101',
        '11100100 10101100 11001010 01010101 01111000',
        '01001001 01110011 00100000 01101110 01101111',
        '01110011 01110000 01101111 01101111 01101110',
        '',
        'Welcome to the Matrix, Neo...',
        'Game development is just another form of reality manipulation.',
        'The code is the truth behind the illusion.',
        '',
        'Matrix Protocol: ENGAGED',
        'Reality.exe has stopped responding...'
      ];
      return lines.join('\n');
    },

    hack: () => {
      const steps = [
        'Initializing hacking sequence...',
        'Scanning network ports...',
        'Port 80: OPEN',
        'Port 443: OPEN', 
        'Port 22: OPEN',
        '',
        'Attempting to bypass firewall...',
        'Firewall bypassed successfully!',
        '',
        'Accessing mainframe...',
        'Login: admin',
        'Password: ••••••••••',
        'Access GRANTED!',
        '',
        'Downloading secret files...',
        '██████████ 100% Complete',
        '',
        'Just kidding! This is just a portfolio terminal 😄',
        'But I do know how to code secure applications!'
      ];
      return steps.join('\n');
    },

    ascii: () => `
  ____    _    __  __ _   _ _____ _     
 / ___|  / \  |  \/  | | | | ____| |    
 \___ \ / _ \ | |\/| | | | |  _| | |    
  ___) / ___ \| |  | | |_| | |___| |___ 
 |____/_/   \_\_|  |_|\___/|_____|_____|
                                              
     Game Developer & Unity Enthusiast
           Building Digital Worlds`,

    joke: () => {
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs! 🐛',
        'Why do Java developers wear glasses? Because they cannot C# 😄',
        'How many programmers does it take to change a light bulb? None, that\'s a hardware problem.',
        'Why did the developer go broke? Because he used up all his cache! 💰',
        'A SQL query goes into a bar, walks up to two tables and asks: "Can I join you?" 🍺',
        'Why do programmers hate nature? It has too many bugs! 🌿',
        'There are only 10 types of people: those who understand binary and those who don\'t.',
        'Why did the programmer quit his job? He didn\'t get arrays! 📊'
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    },

    fortune: () => {
      const quotes = [
        '"The best error message is the one that never shows up." - Thomas Fuchs',
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"Programming isn\'t about what you know; it\'s about what you can figure out." - Chris Pine',
        '"The most important property of a program is whether it accomplishes the intention of its user." - C.A.R. Hoare',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },

    tree: () => `
portfolio/
├── games/
│   ├── LOGIN/
│   │   ├── Steam Release ⭐
│   │   └── puzzle-mechanics.cs
│   ├── Romoji/
│   │   ├── Google Play 📱
│   │   ├── App Store 🍎
│   │   └── word-game-engine.cs
│   └── Capybara Game/
│       ├── casual-adventure.unity
│       └── character-controller.cs
├── prototypes/
│   ├── experimental-gameplay/
│   ├── rapid-prototypes/
│   └── unity-experiments/
├── skills/
│   ├── Unity.engine
│   ├── CSharp.lang
│   ├── React.framework
│   └── TypeScript.lang
└── contact/
    ├── instagram -> @frantyshek
    └── linkedin -> samuel-hamrák`,

    uptime: () => {
      const startDate = new Date('2020-01-01'); // Career start
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30);
      
      return `System Uptime: ${years} years, ${months} months
Game Developer Mode: ACTIVE
Current Project: Portfolio Terminal
Status: Ready for new challenges
Coffee Level: ████████░░ 80%
Motivation: ██████████ 100%`;
    },

    ping: () => {
      const sites = ['github.com', 'unity.com', 'stackoverflow.com'];
      const site = sites[Math.floor(Math.random() * sites.length)];
      const time = Math.floor(Math.random() * 100) + 1;
      
      return `PING ${site} (127.0.0.1): 56 data bytes
64 bytes from ${site}: icmp_seq=0 ttl=64 time=${time}.${Math.floor(Math.random() * 999)}ms
64 bytes from ${site}: icmp_seq=1 ttl=64 time=${time + 1}.${Math.floor(Math.random() * 999)}ms
64 bytes from ${site}: icmp_seq=2 ttl=64 time=${time - 1}.${Math.floor(Math.random() * 999)}ms

--- ${site} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max/stddev = ${time-1}.000/${time}.000/${time+1}.000/0.500 ms`;
    }
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
    
    // Refocus input and scroll to bottom after command execution
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
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
          <div className="flex flex-col bg-background/95" style={{ height: 'calc(100% - 3rem)' }}>
            {/* Scrollable Content Area */}
            <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto font-mono text-sm">
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
            </div>

            {/* Fixed Input Area */}
            <div className="p-4 border-t border-primary/20 bg-background/95">
              <div className="flex items-center font-mono text-sm">
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
        </div>
      )}
    </div>
  );
};

export default Terminal;
