import React from 'react';
import MilestonePage from '../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Project Management Sheets (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Project Dashboard Page',color: '#504081'},
        { id: 2, description: 'Make the Project Folder Set',color: '#504081'},
        { id: 3, description: 'Make the Version Control Folder Set',color: '#504081'},
        { id: 4, description: 'Make the Individual Branch Folder Set',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Effortless Quest: Business Center',
      circles: [
        { id: 1, description: 'Business Center Dashboard: Virtual Town Hall Business Location Editor',color: '#504081'},
        { id: 2, description: 'Business Center Dashboard: Bussiness Partnerships',color: '#504081'},
        { id: 3, description: 'Business Center Dashboard: My Team: Lobby',color: '#504081'},
        { id: 4, description: 'Business Center Dashboard: My Team: Departments',color: '#504081'},
        { id: 5, description: 'Business Center Dashboard: My Team: Chats',color: '#504081'},
        { id: 6, description: 'Business Center Dashboard: Company Goals and Road Map',color: '#504081'},
        { id: 7, description: 'Ai Companion: Business Center Update',color: '#504081'},
        { id: 8, description: 'Town Hall: Business Center Update',color: '#504081'},
      ],
    },
    {
      id: 3,
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
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 3 New Youtube Videos',
      circles: [
        { id: 1, description: 'Youtube Video 1',color: '#504081' },
        { id: 2, description: 'Youtube Video 2',color: '#504081'},
        { id: 3, description: 'Youtube Video 3',color: '#504081'},
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
      title: 'Make 5 New Chapters for Book 2',
      circles: [
        { id: 1, description: 'Chapter 11',color: '#504081' },
        { id: 2, description: 'Chapter 12',color: '#504081'},
        { id: 3, description: 'Chapter 13',color: '#504081'},
        { id: 4, description: 'Chapter 14',color: '#504081'},
        { id: 5, description: 'Chapter 15',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
