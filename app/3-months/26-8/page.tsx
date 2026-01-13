import React from 'react';
import MilestonePage from '../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Personal Projects Sheets (Individuals) Product Line',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Goals Dashboard',color: '#504081' },
        { id: 3, description: 'Make the Project Dashboard Page',color: '#504081'},
        { id: 4, description: 'Make the Project Folder Set',color: '#504081'},
        { id: 5, description: 'Make the Version Control Folder Set',color: '#504081'},
        { id: 6, description: 'Make the Individual Branch Folder Set',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Effortless Quest: Charity Center',
      circles: [
        { id: 1, description: 'Charity Dashboard: Community Charity Projects',color: '#504081'},
        { id: 2, description: 'Charity Dashboard: Free Business Resources',color: '#504081'},
        { id: 3, description: 'Charity Dashboard: Free Individual Resources',color: '#504081'},
        { id: 4, description: '',color: '#504081'},
        { id: 5, description: '',color: '#504081'},
        { id: 6, description: '',color: '#504081'},
        { id: 7, description: '',color: '#504081'},
        { id: 8, description: '',color: '#504081'},
        { id: 9, description: '',color: '#504081'},
        { id: 10, description: '',color: '#504081'},
      ],
    },
    {
      id: 3,
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
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 2 New Youtube Videos',
      circles: [
        { id: 1, description: 'Youtube Video 1',color: '#504081' },
        { id: 2, description: 'Youtube Video 2',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 10 New Short Videos and Post to All Platforms',
      circles: [
        { id: 1, description: 'Short Video 1',color: '#504081' },
        { id: 2, description: 'Short Video 2',color: '#504081' },
        { id: 3, description: 'Short Video 3',color: '#504081' },
        { id: 4, description: 'Short Video 4',color: '#504081' },
        { id: 5, description: 'Short Video 5',color: '#504081' },
        { id: 6, description: 'Short Video 6',color: '#504081' },
        { id: 7, description: 'Short Video 7',color: '#504081' },
        { id: 8, description: 'Short Video 8',color: '#504081' },
        { id: 9, description: 'Short Video 9',color: '#504081' },
        { id: 10, description: 'Short Video 10',color: '#504081' },
      ],
    },
    {
      id: 6,
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
      id: 7,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Luma MacOS App',
      circles: [
        { id: 1, description: 'Coming Soon',color: '#504081' },
        { id: 2, description: 'Coming Soon',color: '#504081'},
        { id: 3, description: 'Coming Soon',color: '#504081'},
        { id: 4, description: 'Coming Soon',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
