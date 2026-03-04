import React from 'react';
import MilestonePage from '../../../3/Milestones/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: '2 Crochet Projects',
      circles: [
        { id: 1, description: 'Make Sentro Knitted Hijab physical product',color: '#504081'},
        { id: 2, description: 'Make Sentro Knitted Hijab Shirt digital product',color: '#504081'},
        { id: 3, description: 'Make Sentro Knitted Abaya physical product',color: '#504081'},
        { id: 4, description: 'Make Sentro Knitted Abaya digital product',color: '#504081'},
      ],
    },
    {
      id: 2,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Effortless Quest: Invention Center',
      circles: [
        { id: 1, description: 'Ai Companion: My Team Center Update',color: '#504081'},
        { id: 2, description: 'Town Hall: My Team Center Update',color: '#504081'},
        { id: 3, description: 'Invention Center Dashboard: Move Command Center Backlog settings into here: Rename Rising Horizons ',color: '#504081'},
        { id: 4, description: 'Invention Center Dashboard: Idea Room',color: '#504081'},
        { id: 5, description: 'Invention Center Dashbaord: Ai Companion Brainstorm',color: '#504081'},
        { id: 6, description: 'Invention Center Dashbaord: Idea Tester Room',color: '#504081'},
        { id: 7, description: 'Update Rising Horizons Command Center: Backlog, Update roadmap, update goals',color: '#504081'},
        { id: 8, description: 'Ai Companion: Invention Center Update',color: '#504081'},
        { id: 9, description: 'Town Hall: Invention Center Update',color: '#504081'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Personal Trackers Notions (Individual) Product Line',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Faith Milestones Page',color: '#504081'},
        { id: 3, description: 'Make the Family Milestones Page',color: '#504081'},
        { id: 4, description: 'Make the Self Care Milestones Page',color: '#504081'},
        { id: 5, description: 'Make the Nutrition Milestones Page',color: '#504081'},
        { id: 6, description: 'Make the Exercise Milestones Page',color: '#504081'},
        { id: 7, description: 'Make the Skills Milestones Page',color: '#504081'},
        { id: 8, description: 'Make the Business Milestones Page',color: '#504081'},
        { id: 9, description: 'Make the Education Milestones Page',color: '#504081'},
        { id: 10, description: 'Make the None of these? Services Page',color: '#504081'},
      ],
    },
    {
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'YouTube Videos covering all project updates',
      circles: [
        { id: 1, description: 'YouTube Video: Sentro Knitted Hijab ',color: '#504081' },
        { id: 2, description: 'YouTube Video: Sentro Knitted Abaya',color: '#504081'},
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
