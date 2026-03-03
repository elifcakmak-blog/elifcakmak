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
      imageSrc: '/roadmap-tiles/building.svg',
      title: 'Code 2/2 Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Courses Nav Pages- completed: 3/1/26 4:20pm EST',color: '#4bfe5a'},
        { id: 2, description: 'Make the Info & Contact Nav Pages - completed: 3/1/26 7:15pm EST',color: '#4bfe5a'},
        { id: 3, description: 'Home Page Asthetics',color: '#504081' },
        { id: 4, description: 'Business Home Page Asthetics',color: '#504081'},
        { id: 5, description: 'Individuals Home Page Asthetics',color: '#504081'},
        { id: 6, description: 'Quest Pages Asthetics',color: '#504081'},
        { id: 7, description: 'Courses Home Page Asthetics',color: '#504081'},
        { id: 8, description: 'Business Sub Home Pages Asthetics',color: '#504081'},
        { id: 9, description: 'Individuals Sub Home Pages Asthetics',color: '#504081'},
        { id: 10, description: 'Courses Sub Home Pages Asthetics',color: '#504081'},
        { id: 11, description: 'Contact Page Asthetics',color: '#504081'},
        { id: 12, description: 'Footer + All Pages Final Touches',color: '#504081'},
        { id: 13, description: 'Make the Info & Contact Pages & Asthetics',color: '#504081'},
      ],
    },
    {
      id: 3,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Build Your Own (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Website Builder Page',color: '#504081'},
        { id: 2, description: 'Make the App Builder Page',color: '#504081'},
        { id: 3, description: 'Make the Onboarding Course Builder Page',color: '#504081'},
        { id: 4, description: 'Make the Sheets System Builder Page',color: '#504081'},
        { id: 5, description: 'Make the Notion System Builder Page',color: '#504081'},
      ],
    },
     {
      id: 4,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'Make Effortless Back Office Sheets (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Sales Tracking Page',color: '#504081'},
        { id: 2, description: 'Make the KPI Tracking Page',color: '#504081'},
        { id: 3, description: 'Make the Client Tracking Page',color: '#504081'},
        { id: 4, description: 'Make the Commission Tracking Page',color: '#504081'},
        { id: 5, description: 'Make the Payroll Tracking Page',color: '#504081'},
        { id: 6, description: 'Make the Recruitment Tracking Page',color: '#504081'},
        { id: 7, description: 'Make the None of these? Page',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: '/roadmap-tiles/nextt.svg',
      title: 'YouTube Videos covering all project updates',
      circles: [
        { id: 1, description: 'YouTube Video: Sentro Knitted Men\'s Shirt ',color: '#504081' },
        { id: 2, description: 'YouTube Video: Sentro Knitted Men\'s pants',color: '#504081'},
        { id: 3, description: 'YouTube Video: Effortless Works Product Video',color: '#504081'},
      ],
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
