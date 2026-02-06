"use client";

import React from 'react';
import RoadmapPage from '../../3/Roadmap-Months/roadmap';

const roadmaps = [
    {
        id: 1,
        imageSrc: '/roadmap-tiles/01.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-1',
            color: '#f5b700',
        },
    },
    {
        id: 2,
        imageSrc: '/roadmap-tiles/02.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-2',
            color: '#f5b700',
        },
    },
    {
        id: 3,
        imageSrc: '/roadmap-tiles/03.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-3',
            color: '#f5b700',
        },
    },
    {
        id: 4,
        imageSrc: '/roadmap-tiles/04.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-4',
            color: '#f5b700',
        },
    },{
        id: 5,
        imageSrc: '/roadmap-tiles/05.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-5',
            color: '#f5b700',
        },
    },{
        id: 6,
        imageSrc: '/roadmap-tiles/06.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-6',
            color: '#f5b700',
        },
    },{
        id: 7,
        imageSrc: '/roadmap-tiles/07.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-7',
            color: '#f5b700',
        },
    },{
        id: 8,
        imageSrc: '/roadmap-tiles/08.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-8',
            color: '#f5b700',
        },
    },{
        id: 9,
        imageSrc: '/roadmap-tiles/09.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-9',
            color: '#f5b700',
        },
    },{
        id: 10,
        imageSrc: '/roadmap-tiles/10.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-10',
            color: '#f5b700',
        },
    },{
        id: 11,
        imageSrc: '/roadmap-tiles/11.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-11',
            color: '#f5b700',
        },
    },
    {
        id: 12,
        imageSrc: '/roadmap-tiles/12.svg',
        button: {
            label: 'Explore The Map',
            link: '/3-months/M2027/27-12',
            color: '#f5b700',
        },
    },
];

const ParentPage: React.FC = () => {
    return <RoadmapPage roadmaps={roadmaps} />;
};

export default ParentPage;