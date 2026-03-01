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
      imageSrc: '/roadmap-tiles/completed.svg',
      title: 'Code 1/2 of Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page Navs - completed: 2/23/26 1:00pm EST',color: '#4bfe5a' },
        { id: 2, description: 'Make the Business Page Navs - completed: 2/23/26 8:30pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Make the Business Sub Page Navs - completed: 2/28/26 5:00pm EST',color: '#4bfe5a'},
        { id: 4, description: 'Make the Individual Home Pages - completed: 2/28/26 9:30pm EST',color: '#4bfe5a'},
        { id: 5, description: 'Make the Individual Sub Pages - completed: 2/28/26 11:30pm EST',color: '#4bfe5a'},
        { id: 6, description: 'Make all BYO Pages - completed: 3/1/26 1:00am EST',color: '#4bfe5a'},
        { id: 7, description: 'Make all Quest Pages - completed: 3/1/26 2:00am EST',color: '#4bfe5a'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
