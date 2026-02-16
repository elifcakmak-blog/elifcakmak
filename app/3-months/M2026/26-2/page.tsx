import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/completed.svg',
      title: 'Personal Website Rebrand',
      circles: [
        { id: 1, description: 'Remove Personal Info and Rebrand - completed: 2/14/26 9:18pm EST',color: '#4bfe5a' },
        { id: 2, description: 'Define goals for all 3 websites - completed: 2/10/26 3:30pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Completly finish coding structure - completed: 2/14/26 9:18pm EST',color: '#4bfe5a' },
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/completed.svg',
      title: 'Create Product Making and Posting Structure',
      circles: [
        { id: 1, description: 'Understand and write down all aspects of business - completed: 2/16/26 1:00pm EST',color: '#4bfe5a' },
        { id: 2, description: 'Create a Designing Product Routine - completed: 2/16/26 1:57pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Create a Product Making Schedule - completed: 2/16/26 4:35pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Create a Product to Social System - completed: 2/16/26 4:35pm EST',color: '#4bfe5a'},
        { id: 4, description: 'Create an editing and posting routine - completed: 2/16/26 4:35pm EST',color: '#4bfe5a'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/building.svg',
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
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
