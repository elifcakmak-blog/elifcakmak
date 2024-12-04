import React from 'react';
import MilestonePage from '../3-milestonepage/milestone';

const App: React.FC = () => {
  const milestones = [
    {
      id: 1,
      imageSrc: './building.svg', // Replace with your image URLs
      title: 'Code Elif Çakmak Personal Brand Website',
      circles: [
        { id: 1, description: 'Set Up Website Structure',color: '#4bfe5a' },
        { id: 2, description: 'Make the Home Page',color: '#4bfe5a' },
        { id: 3, description: 'Make the Newsletter Page',color: '#4bfe5a' },
        { id: 4, description: 'Make the Road Maps Page',color: '#4bfe5a' },
        { id: 5, description: 'Make the About Page',color: '#e6df20' },
        { id: 6, description: 'Make the Podcast Page',color: '#504081' },
        { id: 7, description: 'Make the Apps Page',color: '#504081' },
        { id: 8, description: 'Make the Books Page',color: '#504081' },
        // Add up to 10 steps per milestone
      ],
    },
    {
      id: 2,
      imageSrc: 'nextt.svg',
      title: 'Write The Policies',
      circles: [
        { id: 1, description: 'Make the Privacy Policy Page',color: '#504081' },
        { id: 2, description: 'Make the Terms of Service Page',color: '#504081'},
        { id: 3, description: 'Make the Return Policy Page',color: '#504081'},
        { id: 4, description: 'Make the Cookie Policy Page',color: '#504081'},
        { id: 5, description: 'Make the Disclaimer Page',color: '#504081'},
      ],
    },
    {
      id: 3,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Works Business Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Products Page',color: '#504081'},
        { id: 3, description: 'Make the Services Page',color: '#504081'},
        { id: 4, description: 'Make the Courses Page',color: '#504081'},
        { id: 5, description: 'Make the Info Page',color: '#504081'},
        { id: 6, description: 'Make the Contact Page',color: '#504081'},
        { id: 7, description: 'Make the Products Sub Pages',color: '#504081'},
        { id: 8, description: 'Make the Services Sub Pages',color: '#504081'},
        { id: 9, description: 'Make the Courses Sub Pages',color: '#504081'},
        { id: 10, description: 'Make the Info Sub Pages',color: '#504081'},
      ],
    },
    {
      id: 4,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Sheets (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Sales Tracking Page',color: '#504081'},
        { id: 3, description: 'Make the KPI Tracking Page',color: '#504081'},
        { id: 4, description: 'Make the Client Tracking Page',color: '#504081'},
        { id: 5, description: 'Make the Commission Tracking Page',color: '#504081'},
        { id: 6, description: 'Make the Payroll Tracking Page',color: '#504081'},
        { id: 7, description: 'Make the Recruitment Tracking Page',color: '#504081'},
        { id: 8, description: 'Make the None of these? Page',color: '#504081'},
      ],
    },
    {
      id: 5,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Notions (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Sales Tracking Page',color: '#504081'},
        { id: 3, description: 'Make the KPI Tracking Page',color: '#504081'},
        { id: 4, description: 'Make the Client Tracking Page',color: '#504081'},
        { id: 5, description: 'Make the Commission Tracking Page',color: '#504081'},
        { id: 6, description: 'Make the Payroll Tracking Page',color: '#504081'},
        { id: 7, description: 'Make the Recruitment Tracking Page',color: '#504081'},
        { id: 8, description: 'Make the None of these? Page',color: '#504081'},
      ],
    },
    {
      id: 6,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Services (Business) Product Line',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Custom System\'s Builder Page',color: '#504081'},
        { id: 3, description: 'Make the Your System\'s Onboarding Course Page',color: '#504081'},
        { id: 4, description: 'Make the Custom Website and App Builder Page',color: '#504081'},
        { id: 5, description: 'Make the Commission Tracking Page',color: '#504081'},
        { id: 6, description: 'Make the Payroll Tracking Page',color: '#504081'},
        { id: 7, description: 'Make the Recruitment Tracking Page',color: '#504081'},
        { id: 8, description: 'Make the None of these? Page',color: '#504081'},
      ],
    },
    {
      id: 7,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Works Individual Brand Website',
      circles: [
        { id: 1, description: 'Make the Home Page',color: '#504081' },
        { id: 2, description: 'Make the Products Page',color: '#504081'},
        { id: 3, description: 'Make the Services Page',color: '#504081'},
        { id: 4, description: 'Make the Courses Page',color: '#504081'},
        { id: 5, description: 'Make the Info Page',color: '#504081'},
        { id: 6, description: 'Make the Contact Page',color: '#504081'},
        { id: 7, description: 'Make the Products Sub Pages',color: '#504081'},
        { id: 8, description: 'Make the Services Sub Pages',color: '#504081'},
        { id: 9, description: 'Make the Courses Sub Pages',color: '#504081'},
        { id: 10, description: 'Make the Info Sub Pages',color: '#504081'},
      ],
    },
    {
      id: 8,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Sheets (Individual) Product Line',
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
      id: 9,
      imageSrc: 'nextt.svg',
      title: 'Make Effortless Notions (Individual) Product Line',
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

    // Add more milestones up to 12
  ];

  return <MilestonePage milestones={milestones} />;
};

export default App;
