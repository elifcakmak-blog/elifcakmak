import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: '2 Crochet Projects',
      circles: [
        { id: 1, description: 'Make Sentro Knitted Hijab physical product',color: '#504081'},
        { id: 2, description: 'Make Sentro Knitted Hijab digital product',color: '#504081'},
        { id: 3, description: 'Make Sentro Knitted Abaya physical product',color: '#504081'},
        { id: 4, description: 'Make Sentro Knitted Abaya digital product',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Code Effortless Quest: Website Structure Skeleton',
      circles: [
        { id: 1, description: 'Before Log-in: Home landing Page',color: '#504081'},
        { id: 2, description: 'Before Log-in: About Page',color: '#504081'},
        { id: 3, description: 'Before Log-in: How To Play Page',color: '#504081'},
        { id: 4, description: 'Log-in:  TownHall Page (Home)',color: '#504081'},
        { id: 5, description: 'Log-in:  TownHall: Business Center',color: '#504081'},
        { id: 6, description: 'Log-in:  TownHall: Education Center',color: '#504081'},
        { id: 7, description: 'Log-in:  TownHall: Leaderboards and Rewards',color: '#504081'},
        { id: 8, description: 'Log-in:  TownHall: My Quest and My Team Centers',color: '#504081'},
        { id: 9, description: 'Log-in:  TownHall: Invention Center',color: '#504081'},
        { id: 10, description: 'Log-in:  TownHall: Charity Center',color: '#504081'},
      ],
    },
     {
      id: 3,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Build Your Own (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Website Builder Page',color: '#504081'},
        { id: 2, description: 'Make the App Builder Page',color: '#504081'},
        { id: 3, description: 'Make the Onboarding Course Builder Page',color: '#504081'},
        { id: 4, description: 'Make the Sheets System Builder Page',color: '#504081'},
        { id: 5, description: 'Make the Notion System Builder Page',color: '#504081'},
      ],
    },
    {
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Project Management Notion (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Project Dashboard Page',color: '#504081'},
        { id: 2, description: 'Make the Project Folder Set',color: '#504081'},
        { id: 3, description: 'Make the Version Control Folder Set',color: '#504081'},
        { id: 4, description: 'Make the Individual Branch Folder Set',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'YouTube Videos covering all project updates',
      circles: [
        { id: 1, description: 'YouTube Video: sentro knitted hijab',color: '#504081' },
        { id: 2, description: 'YouTube Video: sentro knitted abaya',color: '#504081'},
        { id: 3, description: 'YouTube Video: Effortless Works Product Video',color: '#504081'},
      ],
    },
    {
      id: 6,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 4 New Book Chapters',
      circles: [
        { id: 1, description: 'Chapter 1',color: '#504081' },
        { id: 2, description: 'Chapter 2',color: '#504081'},
        { id: 3, description: 'Chapter 3',color: '#504081'},
        { id: 4, description: 'Chapter 4',color: '#504081'},
      ],
    },
    {
      id: 7,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 4 New Podcast Episodes',
      circles: [
        { id: 1, description: 'Podcast Episode 1',color: '#504081' },
        { id: 2, description: 'Podcast Episode 2',color: '#504081'},
        { id: 3, description: 'Podcast Episode 3',color: '#504081'},
        { id: 4, description: 'Podcast Episode 4',color: '#504081'},
      ],
    },
    {
      id: 8,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Social Media Posts for All Project Updates',
      circles: [
        { id: 1, description: 'Social Media Post 1',color: '#504081' },
        { id: 2, description: 'Social Media Post 2',color: '#504081'},
        { id: 3, description: 'Social Media Post 3',color: '#504081'},
        { id: 4, description: 'Social Media Post 4',color: '#504081'},
        { id: 5, description: 'Social Media Post 5',color: '#504081'},
        { id: 6, description: 'Social Media Post 6',color: '#504081'},
        { id: 7, description: 'Social Media Post 7',color: '#504081'},
        { id: 8, description: 'Social Media Post 8',color: '#504081'},
      ],
    },
    {
      id: 9,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Newsletters for All Project Updates',
      circles: [
        { id: 1, description: 'Newsletter 1',color: '#504081' },
        { id: 2, description: 'Newsletter 2',color: '#504081' },
        { id: 3, description: 'Newsletter 3',color: '#504081' },
        { id: 4, description: 'Newsletter 4',color: '#504081' },
        { id: 5, description: 'Newsletter 5',color: '#504081' },
        { id: 6, description: 'Newsletter 6',color: '#504081' },
        { id: 7, description: 'Newsletter 7',color: '#504081' },
        { id: 8, description: 'Newsletter 8',color: '#504081' },
        
      ],
    },
    {
      id: 10,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Updated Course Content for all courses',
      circles: [
        { id: 1, description: 'Make course based off effortless works products',color: '#504081' },
        { id: 2, description: 'Make course based off of crocheting products',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
