
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Calendar, Users, Gamepad2, Smartphone, Play } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import VideoPlayer from './VideoPlayer';
import MediaCarousel from './MediaCarousel';
import { getAssetPath } from '@/lib/assets';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    // Personal Projects - Featured
    {
      id: 1,
      title: 'LOGIN',
      description: 'A puzzle game where simply logging in is the real challenge - the world\'s most unnecessarily difficult login screen.',
      detailedDescription: `LOGIN is a game about… well, logging in.
But what if every step of the process was designed purely to troll you?
Welcome to the world's most unnecessarily difficult login screen.

Every form, every field, every button – nothing is safe.

Why? Because somewhere, deep down, you deserve it.

Key Features:
• 15+ ridiculous login "levels"
• Rage moments, and maybe some therapy required
• Speedruns, and leaderboard for masochists
• No spoilers – discover the suffering for yourself
• Retro-aesthetic pixel art style
• Atmospheric sound design that adds to the frustration

This experimental indie title turns the mundane act of logging in into a nightmarish puzzle experience that will test your patience, sanity, and determination. Each level presents increasingly absurd authentication challenges that defy logic and common sense.

Perfect for streamers, speedrunners, and anyone who enjoys digital masochism.`,
      media: [
        {
          type: 'video' as const,
          original: '',
          thumbnail: '',
          videoUrl: 'https://www.youtube.com/watch?v=ApDoLvDwwYQ',
          title: 'LOGIN Game Trailer'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/8b82c4f4-11bd-4ca2-b703-96a94d4b5cd4.png',
          thumbnail: '/lovable-uploads/8b82c4f4-11bd-4ca2-b703-96a94d4b5cd4.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/2abf7171-dcfb-4e77-bbcb-98459d6c7e28.png',
          thumbnail: '/lovable-uploads/2abf7171-dcfb-4e77-bbcb-98459d6c7e28.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/c08df632-8b8d-47f5-b35d-cec632d6e2b0.png',
          thumbnail: '/lovable-uploads/c08df632-8b8d-47f5-b35d-cec632d6e2b0.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/fd9fb133-d598-42fe-8acc-6a885ec11dc4.png',
          thumbnail: '/lovable-uploads/fd9fb133-d598-42fe-8acc-6a885ec11dc4.png'
        }
      ],
      image: '/lovable-uploads/6fd0f450-b504-4620-97f8-dc60ce896346.png',
      tags: ['Unity', 'C#', 'Puzzle', 'Troll Game', 'Steam'],
      category: 'personal',
      duration: 'In Development',
      team: '1 developer',
      platform: ['Steam', 'PC'],
      role: 'Solo Developer',
      responsibilities: ['Troll game design', 'Puzzle mechanics', 'UI frustration systems', 'Steam integration'],
      achievements: ['Steam upcoming release', 'Unique puzzle concept', 'Digital masochism innovation'],
      steamLink: 'https://store.steampowered.com/app/3896370/LOGIN/',
      videoUrl: 'https://www.youtube.com/watch?v=ApDoLvDwwYQ'
    },
    {
      id: 2,
      title: 'Romoji',
      description: 'An episodic visual novel that blends elements of casual gaming with a rich, interactive story.',
      detailedDescription: `Romoji is an episodic visual novel that blends elements of casual gaming with a rich, interactive story. Players' choices directly impact the fate of the main characters, creating a unique and personal experience with each playthrough.

The story is set in the fictional village of Dolna Medza, inspired by Slovak and Hungarian rural life, where you play as three main characters:
• Jarko: A superhero enthusiast with a strong sense of justice.
• Ema: An aspiring firefighter who defies gender norms.
• Roland: A bright and optimistic boy in a special education class, always seeing the best in any situation.

Key Features:
• Beautiful hand-drawn 2D illustrations that bring the world and characters to life.
• Engaging dialogues and a thought-provoking narrative filled with humor, heart, and unexpected twists.
• Player-driven decisions that shape the outcomes, ensuring that no two playthroughs are the same.
• An original soundtrack composed by talented Slovak and Hungarian artists, perfectly complementing the game's atmosphere.

Romoji promises to immerse players in a heartfelt story, where the paths you choose determine the future of its characters. The first two chapters are available now, with more chapters and exciting new mini-games coming in April 2025.`,
      media: [
        {
          type: 'video' as const,
          original: '',
          thumbnail: '',
          videoUrl: 'https://www.youtube.com/watch?v=3EQcIqi1UZE',
          title: 'Romoji Gameplay Trailer'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/4ebc6a44-3eb3-47ad-8e97-3471834418dc.png',
          thumbnail: '/lovable-uploads/4ebc6a44-3eb3-47ad-8e97-3471834418dc.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/abcf10d8-7585-42df-8495-b1cff39ccadb.png',
          thumbnail: '/lovable-uploads/abcf10d8-7585-42df-8495-b1cff39ccadb.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/df482301-9947-4315-9544-d66831a3af8a.png',
          thumbnail: '/lovable-uploads/df482301-9947-4315-9544-d66831a3af8a.png'
        }
      ],
      image: '/lovable-uploads/e4082b8c-e738-4381-8903-636678320f98.png',
      tags: ['Unity', 'C#', 'Mobile', 'Visual Novel'],
      category: 'work',
      duration: '10 months',
      team: '4 developers',
      platform: ['iOS', 'Android'],
      role: 'Lead Developer (Impact Games)',
      responsibilities: ['Gameplay mechanics', 'Story design', 'Integration of player choices'],
      achievements: ['Featured on app stores', 'First two chapters available', 'More content coming April 2025'],
      storeLinks: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.ImpactGames.Romoji&hl=sk',
        appStore: 'https://apps.apple.com/us/app/romoji/id6741431146'
      },
      websiteLink: 'https://www.gamifactory.eu/romoji',
      videoUrl: 'https://www.youtube.com/watch?v=3EQcIqi1UZE'
    },
    {
      id: 3,
      title: 'Rocket Brains',
      description: 'A quiz-based multiplayer game designed for elementary school students to reinforce subjects such as mathematics, Slovak language, and English.',
      detailedDescription: `Rocket Brains is a quiz-based multiplayer game designed for elementary school students to reinforce subjects such as mathematics, Slovak language, and English.

Up to 5 players can join in a cross-platform multiplayer quiz battle. The game includes interactive party elements like bombs that knock out players or pushing them.

Features:
• Fun learning with questions from various subjects
• Multiplayer and cross-platform gameplay
• Exciting party features to challenge your friends`,
      images: [
        {
          original: '/lovable-uploads/73a2604f-1d0d-40a2-9b0e-e5ef7c260380.png',
          thumbnail: '/lovable-uploads/73a2604f-1d0d-40a2-9b0e-e5ef7c260380.png'
        },
        {
          original: '/lovable-uploads/91703d6d-ddcb-42d5-8713-115fdd808d84.png',
          thumbnail: '/lovable-uploads/91703d6d-ddcb-42d5-8713-115fdd808d84.png'
        },
        {
          original: '/lovable-uploads/161c3756-b0c6-4e65-a933-92d30d81f601.png',
          thumbnail: '/lovable-uploads/161c3756-b0c6-4e65-a933-92d30d81f601.png'
        },
        {
          original: '/lovable-uploads/71691e9e-9ed5-4978-abe9-8d2a5beaea0e.png',
          thumbnail: '/lovable-uploads/71691e9e-9ed5-4978-abe9-8d2a5beaea0e.png'
        }
      ],
      image: '/lovable-uploads/8c6f5458-70ff-4dfb-bb92-7ab7b9d523df.png',
      tags: ['Unity', 'C#', 'Educational', 'Multiplayer', 'Mobile'],
      category: 'work',
      duration: '8 months',
      team: '4 developers',
      platform: ['Cross-platform'],
      role: 'Developer (Impact Games)',
      responsibilities: ['Multiplayer system', 'Quiz mechanics', 'Educational content integration', 'Party features'],
      achievements: ['Educational gaming recognition', 'Cross-platform multiplayer', 'Interactive learning experience'],
      websiteLink: 'https://gamifactory.eu/rocket-brains'
    },
    {
      id: 4,
      title: 'ClaustrOff',
      description: 'A VR game that uses exposure therapy to help players overcome their fear of claustrophobia.',
      detailedDescription: `ClaustrOff is a VR game that uses exposure therapy to help players overcome their fear of claustrophobia. The game offers a unique experience by combining mental therapy with adventure and gameplay.

Players navigate immersive environments designed to help them stay calm and composed under pressure, all while facing fears.

The game includes:
• Exposure therapy in a virtual reality context
• Engaging gameplay that helps overcome fears
• Immersive and exciting VR scenarios`,
      media: [
        {
          type: 'video' as const,
          original: '',
          thumbnail: '',
          videoUrl: 'https://youtu.be/xuE9RiZCXV8',
          title: 'ClaustrOff VR Gameplay'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/33c7097c-7864-4bda-8fb6-33ad1a116a40.png',
          thumbnail: '/lovable-uploads/33c7097c-7864-4bda-8fb6-33ad1a116a40.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/4c7fc6db-57f6-44a9-8c41-90471bbc0d67.png',
          thumbnail: '/lovable-uploads/4c7fc6db-57f6-44a9-8c41-90471bbc0d67.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/48e5af40-599f-4aae-8f40-b7089c1267c7.png',
          thumbnail: '/lovable-uploads/48e5af40-599f-4aae-8f40-b7089c1267c7.png'
        }
      ],
      image: '/lovable-uploads/33c7097c-7864-4bda-8fb6-33ad1a116a40.png',
      tags: ['Unity', 'C#', 'VR', 'Therapy'],
      category: 'work',
      duration: '9 months',
      team: '8 developers',
      platform: ['Meta Quest'],
      role: 'UI Programmer (Fono Labs)',
      responsibilities: ['VR UI implementation', 'Exposure therapy mechanics', 'User interface design', 'VR interaction systems'],
      achievements: ['Mental health gaming award', 'VR therapy innovation', 'Clinical validation'],
      metaLink: 'https://www.meta.com/experiences/claustroff-overcome-your-fears/8590880831039619/',
      videoUrl: 'https://youtu.be/xuE9RiZCXV8'
    },
    {
      id: 5,
      title: 'Desert Drifters',
      description: 'An action-packed co-op VR adventure game set on the sci-fi desert planet of Sha.',
      detailedDescription: `Desert Drifters is an action-packed co-op VR adventure game set on the sci-fi desert planet of Sha. Players control a hovercraft and must rely on teamwork to survive.

As players explore the desert, they uncover the mystery of whether their ancestors found refuge on the planet or if it was the cradle of their civilization.

The game focuses on:
• Co-op gameplay with seamless teamwork
• Exploring a vast desert world
• Solving mysteries with your partner`,
      images: [
        {
          original: '/lovable-uploads/e3e683ba-e18d-4164-b960-0e1329133b5a.png',
          thumbnail: '/lovable-uploads/e3e683ba-e18d-4164-b960-0e1329133b5a.png'
        }
      ],
      image: '/lovable-uploads/58ae3266-248d-4aac-8612-26532b524205.png',
      tags: ['Unity', 'C#', 'VR', 'Co-op'],
      category: 'work',
      duration: '3 months',
      team: '7 developers',
      platform: ['VR'],
      role: 'Gameplay Programmer (Fono Labs)',
      responsibilities: ['Co-op mechanics', 'VR gameplay systems', 'Hovercraft controls', 'Mystery narrative integration'],
      achievements: ['VR co-op innovation', 'Immersive desert exploration', 'Engaging mystery storyline']
    },
    {
      id: 6,
      title: 'Forest Invaders',
      description: 'A 2D action-adventure game where players defend the forest from invaders.',
      detailedDescription: `Forest Invaders is a 2D action-adventure game where players defend the forest from invaders. The game features strategic defense mechanics and exciting battles.

Use a variety of spells and tactics to fend off enemies in fast-paced, dynamic waves.

The game includes:
• Strategic defense mechanics
• Unique spell effects and combinations
• Fast-paced combat and enemy waves`,
      images: [
        {
          original: '/lovable-uploads/98c8859e-581b-497d-970c-e65f4a80b42c.png',
          thumbnail: '/lovable-uploads/98c8859e-581b-497d-970c-e65f4a80b42c.png'
        }
      ],
      image: '/lovable-uploads/10769334-d6e6-4268-a18c-4708ae6bf3d0.png',
      tags: ['Unity', 'C#', '2D', 'Action'],
      category: 'work',
      duration: '6 months',
      team: '4 developers',
      platform: ['PC'],
      role: 'Gameplay Programmer (ARTillery)',
      responsibilities: ['Strategic defense systems', 'Spell mechanics', 'Combat balancing', 'Wave generation'],
      achievements: ['Environmental gaming award', 'Strategic gameplay innovation', 'Spell system creativity']
    },
    // Course Projects
    {
      id: 7,
      title: "Pandora's Escape",
      description: 'An escape room-style puzzle game developed during Summer Game Dev 2022.',
      detailedDescription: `Pandora's Escape is an escape room-style puzzle game developed during Summer Game Dev 2022. It challenges players to solve clues and puzzles to escape a series of rooms.

This project was developed as part of the Summer Game Dev 2022 course.

The game includes:
• Escape rooms with puzzles to solve
• Interactive gameplay mechanics`,
      images: [
        {
          original: '/lovable-uploads/2a2ae419-bd07-470a-976a-6691e0d76edf.png',
          thumbnail: '/lovable-uploads/2a2ae419-bd07-470a-976a-6691e0d76edf.png'
        },
        {
          original: '/lovable-uploads/0b84aa88-3923-4b45-be85-5fbe0966dc8e.png',
          thumbnail: '/lovable-uploads/0b84aa88-3923-4b45-be85-5fbe0966dc8e.png'
        }
      ],
      image: '/lovable-uploads/a88d4d53-804e-4a47-a024-9564ec8f7347.png',
      tags: ['Unity', 'C#', 'Puzzle', 'Escape Room'],
      category: 'course',
      duration: '5 weeks',
      team: '5 developers',
      platform: ['PC'],
      role: 'Programmer (Summer Game Dev)',
      responsibilities: ['Puzzle design', 'Escape room mechanics', 'Interactive systems', 'Game logic'],
      achievements: ['Course project completion', 'Puzzle design excellence', 'Summer Game Dev 2022'],
      itchLink: 'https://jakub-fugger.itch.io/pandora-escape'
    },
    // Personal Projects
    {
      id: 8,
      title: 'Echoes of the Abyss',
      description: 'A psychological horror prototype developed as part of my bachelor\'s thesis.',
      detailedDescription: `Echoes of the Abyss is a psychological horror prototype developed as part of my bachelor's thesis. It dives deep into themes of fear, insanity, and personal discovery.

Currently in prototype stage.

Features:
• Immersive psychological horror atmosphere
• Gripping narrative and exploration elements`,
      media: [
        {
          type: 'video' as const,
          original: '',
          thumbnail: '',
          videoUrl: 'https://youtu.be/qJZIZpj7JcQ',
          title: 'Echoes of the Abyss Horror Gameplay'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/84396bb1-08ac-44d0-a962-bd3a30e1101b.png',
          thumbnail: '/lovable-uploads/84396bb1-08ac-44d0-a962-bd3a30e1101b.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/9296f44b-a6cc-4e92-86d1-fb973d826fa9.png',
          thumbnail: '/lovable-uploads/9296f44b-a6cc-4e92-86d1-fb973d826fa9.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/f0c64aca-d162-47f6-b793-98b4a1469ef7.png',
          thumbnail: '/lovable-uploads/f0c64aca-d162-47f6-b793-98b4a1469ef7.png'
        },
        {
          type: 'image' as const,
          original: '/lovable-uploads/fcc5e025-977a-42ef-b2ec-6ea4461e415c.png',
          thumbnail: '/lovable-uploads/fcc5e025-977a-42ef-b2ec-6ea4461e415c.png'
        }
      ],
      image: '/lovable-uploads/809b1d36-7836-4b5c-9c17-13fd146f4720.png',
      tags: ['Unity', 'C#', 'Horror', 'Thesis'],
      category: 'personal',
      duration: '4 months',
      team: '1 developer',
      platform: ['PC'],
      role: 'Solo Developer',
      responsibilities: ['Psychological horror design', 'Narrative development', 'Atmosphere programming', 'Bachelor\'s thesis research'],
      achievements: ['Bachelor\'s thesis project', 'Psychological horror innovation', 'Academic recognition'],
      itchLink: 'https://frantyshek.itch.io/echoes-of-the-abyss',
      videoUrl: 'https://youtu.be/qJZIZpj7JcQ'
    },
    {
      id: 9,
      title: 'Aspect of the Dragons',
      description: 'An action-packed RPG that takes inspiration from classic MMORPGs like Drakensang Online.',
      detailedDescription: `Aspect of the Dragons is an action-packed RPG that takes inspiration from classic MMORPGs like *Drakensang Online*. Players embark on an epic journey in a fantasy world filled with dragons, magic, and adventure.

Explore vast lands, engage in intense combat with various enemies, and upgrade your character with powerful abilities and items.

Features:
• Engage in real-time combat against a variety of enemies
• Explore a rich fantasy world with multiple zones and quests
• Character customization with unique abilities and equipment
• Epic boss fights and dungeon challenges`,
      images: [
        {
          original: '/lovable-uploads/326083f3-fcf1-4441-8a63-59ccd29a0e74.png',
          thumbnail: '/lovable-uploads/326083f3-fcf1-4441-8a63-59ccd29a0e74.png'
        },
        {
          original: '/lovable-uploads/0e258334-a4c1-4826-b83e-3fb3646bf6b2.png',
          thumbnail: '/lovable-uploads/0e258334-a4c1-4826-b83e-3fb3646bf6b2.png'
        }
      ],
      image: '/lovable-uploads/9f60af0f-9b47-4d72-9257-a334498e1aa7.png',
      tags: ['Unity', 'C#', 'RPG', 'Fantasy'],
      category: 'personal',
      duration: '3 months',
      team: '1 developer',
      platform: ['PC'],
      role: 'Solo Developer',
      responsibilities: ['RPG systems', 'Combat mechanics', 'Character progression', 'Fantasy world design'],
      achievements: ['MMORPG-inspired gameplay', 'Complex RPG systems', 'Fantasy adventure'],
      itchLink: 'https://frantyshek.itch.io/aspect-of-the-dragon'
    },
    {
      id: 10,
      title: 'Capybara S.R.S.',
      description: 'A relaxing casual game where players take on the role of a cute capybara.',
      detailedDescription: `Capybara S.R.S. is a relaxing casual game where players take on the role of a cute capybara, performing various auxiliary tasks such as cleaning or moving furniture.

Players earn rewards for completed tasks, which can be used to upgrade tools and unlock new levels.

Features:
• Relaxing and casual gameplay
• Reward-based progression through tasks
• Upgrade tools and unlock new levels

Future Updates:
• Snow mode
• New tools
• Cosmetic modifications through a game pass
• Mobile version of the game

Note: This game is designed to be a mobile game, but because it was made for a game jam, the export had to be on PC.`,
      images: [
        {
          original: '/lovable-uploads/2941fa5a-1003-4073-a90c-93866f42c4fc.png',
          thumbnail: '/lovable-uploads/2941fa5a-1003-4073-a90c-93866f42c4fc.png'
        },
        {
          original: '/lovable-uploads/b3e3c08d-77fb-4b4d-abee-ed7d1c6b4ac0.png',
          thumbnail: '/lovable-uploads/b3e3c08d-77fb-4b4d-abee-ed7d1c6b4ac0.png'
        },
        {
          original: '/lovable-uploads/87296659-2e65-42a9-afa2-5016a64965c8.png',
          thumbnail: '/lovable-uploads/87296659-2e65-42a9-afa2-5016a64965c8.png'
        },
        {
          original: '/lovable-uploads/1c96aa36-dcbb-4e29-91eb-2e2d52fa5dd6.png',
          thumbnail: '/lovable-uploads/1c96aa36-dcbb-4e29-91eb-2e2d52fa5dd6.png'
        }
      ],
      image: '/lovable-uploads/8b7c37fe-d962-4f68-9128-19e5d344fb07.png',
      tags: ['Unity', 'C#', 'Casual', 'Mobile'],
      category: 'personal',
      duration: '6 months',
      team: '6 developers',
      platform: ['PC', 'Mobile (planned)'],
      role: 'Solo Developer',
      responsibilities: ['Casual game mechanics', 'Task system', 'Progression system', 'Cute art style'],
      achievements: ['Game jam completion', 'Relaxing gameplay design', 'Future mobile release planned'],
      itchLink: 'https://frantyshek.itch.io/capybara-srs'
    },
    {
      id: 11,
      title: 'Trash Bot',
      description: 'A fun, fast-paced puzzle game where players control a robot tasked with cleaning up a messy world.',
      detailedDescription: `Trash Bot is a fun, fast-paced puzzle game where players control a robot tasked with cleaning up a messy world. Solve various challenges to collect trash and help restore the environment.

The core gameplay revolves around collecting trash, progressing, and upgrading to make the robot more efficient.

Features:
• Engaging puzzle mechanics with physics-based gameplay
• Interactive environments that challenge your problem-solving skills
• Unique character designs and vibrant visuals
• Environmental theme focused on cleanliness and progress

Note: This game is also designed for mobile platforms.`,
      images: [
        {
          original: '/lovable-uploads/557775f0-05f8-446b-9aad-01bdd3cbb745.png',
          thumbnail: '/lovable-uploads/557775f0-05f8-446b-9aad-01bdd3cbb745.png'
        },
        {
          original: '/lovable-uploads/e3b391a7-fbbc-4836-b11e-7cff4b9355ae.png',
          thumbnail: '/lovable-uploads/e3b391a7-fbbc-4836-b11e-7cff4b9355ae.png'
        }
      ],
      image: '/lovable-uploads/0494cb73-cd34-4d5c-8911-3321dbbc324b.png',
      tags: ['Unity', 'C#', 'Puzzle', 'Mobile'],
      category: 'personal',
      duration: '3 months',
      team: '6 developers',
      platform: ['PC', 'Mobile'],
      role: 'Solo Developer',
      responsibilities: ['Puzzle mechanics', 'Environmental themes', 'Physics-based gameplay', 'Mobile optimization'],
      achievements: ['Environmental gaming message', 'Physics puzzle innovation', 'Mobile-ready design'],
      itchLink: 'https://frantyshek.itch.io/trash-bot'
    },
    {
      id: 12,
      title: 'Rocket Boost',
      description: 'An exciting arcade-style game where players control a rocket trying to navigate through challenging obstacles.',
      detailedDescription: `Rocket Boost is an exciting arcade-style game where players control a rocket trying to navigate through challenging obstacles while boosting through space.

The game features fast-paced gameplay with power-ups and plenty of action to keep you on your toes.

Features:
• Fast-paced, arcade-style gameplay
• Dynamic power-ups to increase speed and destruction
• Challenging obstacle courses through space
• Progressive difficulty levels that increase the thrill`,
      images: [
        {
          original: '/lovable-uploads/0156f133-a438-47c8-92d2-b2602bb5eb01.png',
          thumbnail: '/lovable-uploads/0156f133-a438-47c8-92d2-b2602bb5eb01.png'
        }
      ],
      image: '/lovable-uploads/9a0fe7b5-7675-4712-8887-f824f6a33ede.png',
      tags: ['Unity', 'C#', 'Arcade', 'Space'],
      category: 'personal',
      duration: '1 month',
      team: '1 developer',
      platform: ['PC'],
      role: 'Solo Developer',
      responsibilities: ['Arcade mechanics', 'Rocket controls', 'Obstacle design', 'Power-up systems'],
      achievements: ['Fast-paced arcade gameplay', 'Space navigation mechanics', 'Progressive difficulty'],
      itchLink: 'https://frantyshek.itch.io/rocket-boost'
    },
    {
      id: 13,
      title: 'Man from Block',
      description: 'A puzzle game developed during my first game jam.',
      detailedDescription: `Man from Block is a puzzle game developed during my first game jam. It features platforming mechanics and logic-based puzzles, reminiscent of the classic Super Mario games. Players guide a blocky character through various levels, solving puzzles to progress.

This game was my first experience in game development and was a fun challenge to create.

Features:
• Platforming mechanics and environmental puzzles
• Classic Mario-like gameplay with a twist
• Progressive difficulty that increases with each level`,
      images: [
        {
          original: '/lovable-uploads/98d1eaf8-1672-4710-a15c-b597c084e311.png',
          thumbnail: '/lovable-uploads/98d1eaf8-1672-4710-a15c-b597c084e311.png'
        },
        {
          original: '/lovable-uploads/c1b36dd5-0a0c-4f61-a84a-ab62132639bd.png',
          thumbnail: '/lovable-uploads/c1b36dd5-0a0c-4f61-a84a-ab62132639bd.png'
        },
        {
          original: '/lovable-uploads/12a62af9-7f13-43ca-9c70-c9c7d311bc09.png',
          thumbnail: '/lovable-uploads/12a62af9-7f13-43ca-9c70-c9c7d311bc09.png'
        }
      ],
      image: '/lovable-uploads/98d1eaf8-1672-4710-a15c-b597c084e311.png',
      tags: ['Unity', 'C#', 'Puzzle', 'Platformer'],
      category: 'personal',
      duration: '2 weeks',
      team: '1 developer',
      platform: ['PC'],
      role: 'Solo Developer',
      responsibilities: ['First game development', 'Platforming mechanics', 'Puzzle design', 'Game jam completion'],
      achievements: ['First game jam completion', 'Mario-inspired design', 'Learning experience'],
      itchLink: 'https://frantyshek.itch.io/man-from-block'
    }
  ];

  const categories = ['all', 'work', 'course', 'personal'];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  
  // Show only first 6 projects (2 rows) initially, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-cyan glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> ls -la ~/projects/
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`font-mono capitalize ${
                filter === category
                  ? 'bg-terminal-green text-black'
                  : 'border-terminal-green/50 text-terminal-green hover:bg-terminal-green hover:text-black'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="project-card group cursor-pointer" onClick={() => handleProjectClick(project)}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="font-mono text-lg text-terminal-green">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-center gap-2 flex-wrap">
                {/* Google Play Store */}
                {project.storeLinks?.googlePlay && (
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.storeLinks.googlePlay, '_blank');
                    }}
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </Button>
                )}

                {/* App Store */}
                {project.storeLinks?.appStore && (
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.storeLinks.appStore, '_blank');
                    }}
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    App Store
                  </Button>
                )}
                
                {/* Website Link */}
                {project.websiteLink && (
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.websiteLink, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                )}
                
                {/* Meta Store */}
                {project.metaLink && (
                  <Button 
                    size="sm" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.metaLink, '_blank');
                    }}
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                    Meta Store
                  </Button>
                )}
                
                
                {/* Steam Store */}
                {project.steamLink && (
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.steamLink, '_blank');
                    }}
                  >
                    <Gamepad2 className="h-4 w-4 mr-2" />
                    Steam
                  </Button>
                )}
                
                {/* itch.io */}
                {project.itchLink && (
                  <Button 
                    size="sm" 
                    className="bg-orange-600 hover:bg-orange-700 text-white font-mono"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.itchLink, '_blank');
                    }}
                  >
                    <Gamepad2 className="h-4 w-4 mr-2" />
                    itch.io
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show View All button only if there are more than 6 projects */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={toggleShowAllProjects}
              className="border-terminal-pink text-terminal-pink hover:bg-terminal-pink hover:text-black font-mono"
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
            </Button>
          </div>
        )}
        
        {/* itch.io Link */}
        <div className="text-center mt-8">
          <p className="font-mono text-muted-foreground mb-4">
            Explore more of my work on my{' '}
            <a
              href="https://frantyshek.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-cyan hover:text-terminal-green transition-colors underline"
            >
              itch.io
            </a>
            {' '}profile.
          </p>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-mono text-terminal-green mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg font-mono">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Media Gallery (Images & Videos) */}
                  <div className="relative overflow-hidden rounded-lg">
                    {selectedProject.media && selectedProject.media.length > 0 ? (
                      <MediaCarousel media={selectedProject.media} />
                    ) : selectedProject.images && selectedProject.images.length > 0 ? (
                      <ImageCarousel images={selectedProject.images} />
                    ) : (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    {selectedProject.featured && (
                      <Badge className="absolute top-4 right-4 bg-terminal-amber text-black font-mono">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-terminal-cyan" />
                        <span className="font-mono text-sm">
                          <strong>Duration:</strong> {selectedProject.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-terminal-cyan" />
                        <span className="font-mono text-sm">
                          <strong>Team:</strong> {selectedProject.team}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Gamepad2 className="h-5 w-5 text-terminal-cyan" />
                        <span className="font-mono text-sm">
                          <strong>Platform:</strong> {selectedProject.platform.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-mono font-bold text-terminal-green mb-2">Role:</h4>
                        <p className="font-mono text-sm">{selectedProject.role}</p>
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-green mb-2">Category:</h4>
                        <Badge variant="secondary" className="font-mono capitalize">
                          {selectedProject.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h4 className="font-mono font-bold text-terminal-green mb-3">About the Project</h4>
                    <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-mono font-bold text-terminal-green mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="font-mono">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-mono font-bold text-terminal-green mb-3">Key Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1 font-mono text-sm text-muted-foreground">
                      {selectedProject.responsibilities.map((responsibility: string, index: number) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-mono font-bold text-terminal-green mb-3">Achievements & Recognition</h4>
                    <ul className="list-disc list-inside space-y-1 font-mono text-sm text-muted-foreground">
                      {selectedProject.achievements.map((achievement: string, index: number) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {/* Store Links for Romoji */}
                    {selectedProject.storeLinks && (
                      <>
                        <Button
                          size="lg"
                          className="bg-green-600 hover:bg-green-700 text-white font-mono"
                          onClick={() => window.open(selectedProject.storeLinks.googlePlay, '_blank')}
                        >
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          Google Play
                        </Button>
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                          onClick={() => window.open(selectedProject.storeLinks.appStore, '_blank')}
                        >
                          <Smartphone className="h-5 w-5 mr-2" />
                          App Store
                        </Button>
                      </>
                    )}

                    {/* Website Link for Romoji and Rocket Brains */}
                    {selectedProject.websiteLink && (
                      <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-mono"
                        onClick={() => window.open(selectedProject.websiteLink, '_blank')}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Website
                      </Button>
                    )}
                    
                    {/* Meta Link for ClaustrOff */}
                    {selectedProject.metaLink && (
                      <Button
                        size="lg"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-mono"
                        onClick={() => window.open(selectedProject.metaLink, '_blank')}
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                        </svg>
                        View on Meta
                      </Button>
                    )}

                    {/* Steam Link */}
                    {selectedProject.steamLink && (
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                        onClick={() => window.open(selectedProject.steamLink, '_blank')}
                      >
                        <Gamepad2 className="h-5 w-5 mr-2" />
                        View on Steam
                      </Button>
                    )}

                    {/* itch.io Link for personal projects */}
                    {selectedProject.itchLink && (
                      <Button
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-mono"
                        onClick={() => window.open(selectedProject.itchLink, '_blank')}
                      >
                        <Gamepad2 className="h-5 w-5 mr-2" />
                        View on itch.io
                      </Button>
                    )}

                    {/* Default Demo button for projects without specific links */}
                    {!selectedProject.storeLinks && !selectedProject.websiteLink && !selectedProject.metaLink && !selectedProject.itchLink && !selectedProject.steamLink && (
                      <Button
                        size="lg"
                        className="bg-terminal-cyan hover:bg-terminal-cyan/80 text-black font-mono"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        No Demo Available
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
