import React from 'react';
import MilestonePage from '../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/building.svg', // Replace with your image URLs
      title: 'Code Elif Çakmak Personal Brand Website',
      circles: [
        { id: 1, description: 'Set Up Website Structure - completed: 11/28/24 7:26am EST',color: '#4bfe5a' },
        { id: 2, description: 'Make the Home Page - completed: 11/29/24 10:35pm EST',color: '#4bfe5a' },
        { id: 3, description: 'Make the Newsletter Page - completed: 11/30/24 3:13pm EST',color: '#4bfe5a' },
        { id: 4, description: 'Set Up Effortless Works Subdomain Structure - completed: 12/02/24 12:03am EST',color: '#4bfe5a' },
        { id: 5, description: 'Make the Road Maps Page - completed: 12/04/24 12:47am EST',color: '#4bfe5a' },
        { id: 6, description: 'Make the About Page - completed: 12/5/24 6:40pm',color: '#4bfe5a' },
        { id: 7, description: 'Make the Podcast Page',color: '#e6df20' },
        { id: 8, description: 'Make the Videos Page',color: '#504081' },
        { id: 9, description: 'Make the Apps Page',color: '#504081' },
        { id: 10, description: 'Make the Books Page',color: '#504081' },
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Write The Policies',
      circles: [
        { id: 1, description: 'Make the Privacy Policy Page',color: '#504081' },
        { id: 2, description: 'Make the Terms of Service Page',color: '#504081'},
        { id: 3, description: 'Make the Return Policy Page',color: '#504081'},
        { id: 4, description: 'Make the Cookie Policy Page',color: '#504081'},
        { id: 5, description: 'Make the Disclaimer Page',color: '#504081'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Products Page',color: '#504081'},
        { id: 3, description: 'Make the Services Page',color: '#504081'},
        { id: 4, description: 'Make the Courses Page',color: '#504081'},
        { id: 5, description: 'Make the Info Page',color: '#504081'},
        { id: 6, description: 'Make the Contact Page',color: '#504081'},
        { id: 7, description: 'Make the Products Sub Pages',color: '#504081'},
        { id: 8, description: 'Make the Services Sub Pages',color: '#504081'},
        { id: 9, description: 'Make the Courses Sub Pages',color: '#504081'},
        { id: 10, description: 'Make the Info Sub Pages',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
