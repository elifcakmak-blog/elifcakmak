import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: '2 Crochet Projects',
      circles: [
        { id: 1, description: 'Make Sentro Knitted Men\'s Shirt physical product',color: '#504081'},
        { id: 2, description: 'Make Sentro Knitted Men\'s Shirt digital product',color: '#504081'},
        { id: 3, description: 'Make Sentro Knitted Men\'s Pants physical product',color: '#504081'},
        { id: 4, description: 'Make Sentro Knitted Men\'s Pants digital product',color: '#504081'},
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
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'YouTube Videos covering all project updates',
      circles: [
        { id: 1, description: 'YouTube Video: Sentro Knitted Men\'s Shirt',color: '#504081' },
        { id: 2, description: 'YouTube Video: Sentro Knitted Men\'s Pants',color: '#504081'},
        { id: 3, description: 'YouTube Video: Effortless Works Product Video',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make 4 New Book Chapters',
      circles: [
        { id: 1, description: 'Chapter 1',color: '#504081' },
        { id: 2, description: 'Chapter 2',color: '#504081'},
        { id: 3, description: 'Chapter 3',color: '#504081'},
        { id: 4, description: 'Chapter 4',color: '#504081'},
      ],
    },
    {
      id: 6,
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
      id: 7,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Social Media Posts for All Project Updates',
      circles: [
        { id: 1, description: 'Social Media Post 1',color: '#504081' },
        { id: 2, description: 'Social Media Post 2',color: '#504081'},
        { id: 3, description: 'Social Media Post 3',color: '#504081'},
        { id: 4, description: 'Social Media Post 4',color: '#504081'},
        { id: 5, description: 'Social Media Post 5',color: '#504081'},
        { id: 6, description: 'Social Media Post 6',color: '#504081'},
        { id: 7, description: 'Social Media Post 7',color: '#504081'},
        { id: 8, description: 'Social Media Post 8',color: '#504081'},
      ],
    },
    {
      id: 8,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Newsletters for All Project Updates',
      circles: [
        { id: 1, description: 'Newsletter 1',color: '#504081' },
        { id: 2, description: 'Newsletter 2',color: '#504081' },
        { id: 3, description: 'Newsletter 3',color: '#504081' },
        { id: 4, description: 'Newsletter 4',color: '#504081' },
        { id: 5, description: 'Newsletter 5',color: '#504081' },
        { id: 6, description: 'Newsletter 6',color: '#504081' },
        { id: 7, description: 'Newsletter 7',color: '#504081' },
        { id: 8, description: 'Newsletter 8',color: '#504081' },
        
      ],
    },
    {
      id: 9,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Updated Course Content for all courses',
      circles: [
        { id: 1, description: 'Make course based off effortless works products',color: '#504081' },
        { id: 2, description: 'Make course based off of crocheting products',color: '#504081'},
      ],
    },
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
