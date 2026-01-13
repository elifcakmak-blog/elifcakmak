"use client";

import React from 'react';
import RoadmapPage from './Roadmap-Years/roadmap';

const roadmaps = [
    {
        id: 1,
        imageSrc: '/roadmap-tiles/2024.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/24-12',
            color: '#f5b700',
        },
    },
    {
        id: 2,
        imageSrc: '/roadmap-tiles/2026.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-years/2026',
            color: '#f5b700',
        },
    },
];

const ParentPage: React.FC = () => {
    return <RoadmapPage roadmaps={roadmaps} />;
};

export default ParentPage;
