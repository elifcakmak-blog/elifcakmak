import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Personal Trackers Sheets (Individual) Product Line',
      circles: [
        { id: 1, description: 'Make the Faith Milestones Page',color: '#504081'},
        { id: 2, description: 'Make the Family Milestones Page',color: '#504081'},
        { id: 3, description: 'Make the Self Care Milestones Page',color: '#504081'},
        { id: 4, description: 'Make the Nutrition Milestones Page',color: '#504081'},
        { id: 5, description: 'Make the Exercise Milestones Page',color: '#504081'},
        { id: 6, description: 'Make the Skills Milestones Page',color: '#504081'},
        { id: 7, description: 'Make the Business Milestones Page',color: '#504081'},
        { id: 8, description: 'Make the Education Milestones Page',color: '#504081'},
        { id: 9, description: 'Make the None of these? Services Page',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Effortless Quest: My Team Center',
      circles: [
        { id: 1, description: 'My Business Team Dashboard: Connect Back Office Sheets',color: '#504081'},
        { id: 2, description: 'My Business Team Dashboard: Connect Back Office Notion',color: '#504081'},
        { id: 3, description: 'My Business Team Dashboard: Connect Project Management Sheets',color: '#504081'},
        { id: 4, description: 'My Business Team Dashboard: Connect Project Management Notion',color: '#504081'},
        { id: 5, description: 'My Business and Individuals Team Dashboard: Connect Website Builder',color: '#504081'},
        { id: 6, description: 'My Business and Individuals Team Dashboard: Connect App Builder',color: '#504081'},
        { id: 7, description: 'My Business and Individuals Team Dashboard: Connect Onboarding Course Builder',color: '#504081'},
        { id: 8, description: 'My Individuals Team Dasbaord: Connect Personal Trackers Sheets and Notion',color: '#504081'},
        { id: 9, description: 'My Individuals Team Dasbaord: Connect Personal Projects Sheets and Notion',color: '#504081'},
        { id: 10, description: 'My Individuals Team Dasbaord: Connect Life Tracker Sheets and Notion',color: '#504081'},
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
        { id: 1, description: 'Chapter 1',color: '#504081' },
        { id: 2, description: 'Chapter 2',color: '#504081'},
        { id: 3, description: 'Chapter 3',color: '#504081'},
        { id: 4, description: 'Chapter 4',color: '#504081'},
        { id: 5, description: 'Chapter 5',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
