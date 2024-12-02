"use client";

import { useRef, useState } from 'react';
import Navigation from '../0-navigation/navigation';
import Footer from '../0-footer/footer';
import './roadmap.css';
import CustomCursor from '../0-cursor/page'; // Cursor Import

export default function Home() {
  const roadmapContainerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  // Handle mouse down to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    const circle = circleRef.current;
    const rect = circle?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Handle mouse move to drag the circle
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!dragging) return;

    const container = roadmapContainerRef.current;
    const circle = circleRef.current;
    if (container && circle) {
      const containerRect = container.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();
      const maxLeft = containerRect.left + containerRect.width - circleRect.width - 4;
      const maxTop = containerRect.top + containerRect.height - circleRect.height -4;
      const minLeft = containerRect.left;
      const minTop = containerRect.top;

      let newLeft = e.clientX - dragOffset.x;
      let newTop = e.clientY - dragOffset.y;

      // Constrain movement within the container
      newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);
      newTop = Math.min(Math.max(newTop, minTop), maxTop);

      circle.style.left = `${newLeft - containerRect.left}px`; // Adjust for container offset
      circle.style.top = `${newTop - containerRect.top}px`; // Adjust for container offset
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="home-container">
      
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      <div className="page-container">
        {/* Container for the circle */}
        <div ref={roadmapContainerRef} className="roadmap-container" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          {/* Circle (bubbles) */}
          <div ref={circleRef} className="bubble"onMouseDown={handleMouseDown}> Current Task</div>
        </div>
      </div>
      {/* Footer */}

      <Footer />

    </div>
  );
}
