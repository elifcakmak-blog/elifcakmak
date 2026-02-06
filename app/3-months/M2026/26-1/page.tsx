import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Restructure Personal Brand Site',
      circles: [
        { id: 1, description: 'Update the Home Page - completed: 1/9/26 8:30pm EST',color: '#4bfe5a' },
        { id: 2, description: 'Make the Crocheting Page - completed: 1/10/26 12:30pm EST',color: '#4bfe5a' },
        { id: 3, description: 'Making a Working Newsletter Subscription - completed: 1/10/26 2:51pm EST',color: '#4bfe5a' },
        { id: 4, description: 'Make the Islam Page - completed: 1/10/26 4:04pm EST',color: '#4bfe5a' },
        { id: 5, description: 'Make the Oranization Page - completed: 1/10/26 5:13pm EST',color: '#4bfe5a' },
        { id: 6, description: 'Update all sections with socials new name - completed: 1/13/26 2:30pm EST',color: '#4bfe5a' },
      ],
    },
    
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
