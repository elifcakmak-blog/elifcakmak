import React from 'react';
import MilestonePage from '../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/building.svg',
      title: 'Code Luma App',
      circles: [
        { id: 1, description: 'Code Electron App and all page UI - completed 1/5/25 12:41pm EST',color: '#4bfe5a'},
        { id: 2, description: 'Code Luma Ai',color: '#e6df20'},
        { id: 3, description: 'Code Back End Integrations',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Code Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Business Home Page',color: '#504081'},
        { id: 3, description: 'Make the Individuals Home Page',color: '#504081'},
        { id: 4, description: 'Make all Quest Pages',color: '#504081'},
        { id: 5, description: 'Make the Courses Home Page',color: '#504081'},
        { id: 6, description: 'Make all Info Pages',color: '#504081'},
        { id: 7, description: 'Make the Business Sub Home Pages',color: '#504081'},
        { id: 8, description: 'Make the Individuals Sub Home Pages',color: '#504081'},
        { id: 9, description: 'Make the Courses Sub Home Pages',color: '#504081'},
        { id: 10, description: 'Make the Contact Page',color: '#504081'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Back Office Sheets (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Sales Tracking Page',color: '#504081'},
        { id: 2, description: 'Make the KPI Tracking Page',color: '#504081'},
        { id: 3, description: 'Make the Client Tracking Page',color: '#504081'},
        { id: 4, description: 'Make the Commission Tracking Page',color: '#504081'},
        { id: 5, description: 'Make the Payroll Tracking Page',color: '#504081'},
        { id: 6, description: 'Make the Recruitment Tracking Page',color: '#504081'},
        { id: 7, description: 'Make the None of these? Page',color: '#504081'},
      ],
    },
    {
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 5 New Podcast Episodes',
      circles: [
        { id: 1, description: 'Podcast Episode 1',color: '#504081' },
        { id: 2, description: 'Podcast Episode 2',color: '#504081'},
        { id: 3, description: 'Podcast Episode 3',color: '#504081'},
        { id: 4, description: 'Podcast Episode 4',color: '#504081'},
        { id: 5, description: 'Podcast Episode 5',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 10 Newsletters',
      circles: [
        { id: 1, description: 'Newsletter 1',color: '#504081' },
        { id: 2, description: 'Newsletter 2',color: '#504081' },
        { id: 3, description: 'Newsletter 3',color: '#504081' },
        { id: 4, description: 'Newsletter 4',color: '#504081' },
        { id: 5, description: 'Newsletter 5',color: '#504081' },
        { id: 6, description: 'Newsletter 6',color: '#504081' },
        { id: 7, description: 'Newsletter 7',color: '#504081' },
        { id: 8, description: 'Newsletter 8',color: '#504081' },
        { id: 9, description: 'Newsletter 9',color: '#504081' },
        { id: 10, description: 'Newsletter 10',color: '#504081' },
      ],
    },
    {
      id: 6,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 5 New Chapters for Book 1',
      circles: [
        { id: 1, description: 'Chapter 1',color: '#504081' },
        { id: 2, description: 'Chapter 2',color: '#504081'},
        { id: 3, description: 'Chapter 3',color: '#504081'},
        { id: 4, description: 'Chapter 4',color: '#504081'},
        { id: 5, description: 'Chapter 5',color: '#504081'},
      ],
    },
    {
      id: 7,
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
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
