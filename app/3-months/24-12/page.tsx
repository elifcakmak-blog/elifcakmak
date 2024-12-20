import React from 'react';
import MilestonePage from '../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/completed.svg', // Replace with your image URLs
      title: 'Code Elif Çakmak Personal Brand Website',
      circles: [
        { id: 1, description: 'Set Up Website Structure - completed: 11/28/24 7:26am EST',color: '#4bfe5a' },
        { id: 2, description: 'Make the Home Page - completed: 11/29/24 10:35pm EST',color: '#4bfe5a' },
        { id: 3, description: 'Make the Newsletter Page - completed: 11/30/24 3:13pm EST',color: '#4bfe5a' },
        { id: 4, description: 'Set Up Effortless Works Subdomain Structure - completed: 12/02/24 12:03am EST',color: '#4bfe5a' },
        { id: 5, description: 'Make the Road Maps Page - completed: 12/04/24 12:47am EST',color: '#4bfe5a' },
        { id: 6, description: 'Make the About Page - completed: 12/5/24 6:40pm EST',color: '#4bfe5a' },
        { id: 7, description: 'Make the Podcast Page - completed: 12/15/24 7:17pm EST',color: '#4bfe5a' },
        { id: 8, description: 'Make the Videos Page - completed: 12/15/24 10:47pm EST',color: '#4bfe5a' },
        { id: 9, description: 'Make the Apps Page - completed: 12/15/24 10:47pm EST',color: '#4bfe5a' },
        { id: 10, description: 'Make the Books Page - completed: 12/15/24 10:47pm EST',color: '#4bfe5a' },
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/completed.svg',
      title: 'Write The Policies and Website Updates',
      circles: [
        { id: 1, description: 'Make the Privacy Policy Page - completed: 12/17/24 3:11pm EST',color: '#4bfe5a' },
        { id: 2, description: 'Make the Terms of Service Page - completed: 12/17/24 3:11pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Make the Return Policy Page - completed: 12/17/24 3:11pm EST',color: '#4bfe5a'},
        { id: 4, description: 'Make the Cookie Policy Page - completed: 12/17/24 3:11pm EST',color: '#4bfe5a'},
        { id: 5, description: 'Make the Disclaimer Page - completed: 12/17/24 3:11pm EST',color: '#4bfe5a'},
        { id: 6, description: 'Make my own form for Newsletter Page - completed: 12/20/24 10:39am EST',color: '#4bfe5a'},
        { id: 7, description: 'Update all EasyFlow Links - completed: 12/20/24 11:57am EST',color: '#4bfe5a'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/building.svg',
      title: 'Code Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#e6df20' },
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
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
