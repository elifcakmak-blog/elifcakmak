import React from 'react';
import MilestonePage from '../3-milestonepage/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150', // Replace with your image URLs
      title: 'Milestone 1',
      circles: [
        { id: 1, description: 'Step 1 for Milestone 1' },
        { id: 2, description: 'Step 2 for Milestone 1' },
        // Add up to 10 steps per milestone
      ],
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Milestone 2',
      circles: [
        { id: 1, description: 'Step 1 for Milestone 2' },
        { id: 2, description: 'Step 2 for Milestone 2' },
      ],
    },
    // Add more milestones up to 12
  ];

  const logoSrc = 'https://via.placeholder.com/200x50'; // Replace with your actual logo URL

  return <MilestonePage milestones={milestones} />;
};

export default App;
