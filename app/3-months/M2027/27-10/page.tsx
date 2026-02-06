import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Future Project',
      circles: [
        { id: 1, description: ' 1',color: '#504081' },
        { id: 2, description: ' 2',color: '#504081'},
        { id: 3, description: ' 3',color: '#504081'},
        { id: 4, description: ' 4',color: '#504081'},
        { id: 5, description: ' 5',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
