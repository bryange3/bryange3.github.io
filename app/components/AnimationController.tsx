'use client';

import { useEffect } from 'react';

export default function AnimationController() {
  useEffect(() => {
    // Mark that initial load animations have completed
    // This prevents animations from retriggering on resize
    const timer = setTimeout(() => {
      document.documentElement.classList.add('animations-complete');
      
      // Explicitly set final state for mobile divider to prevent it from disappearing
      const mobileDividers = document.querySelectorAll('[data-mobile-divider]');
      mobileDividers.forEach((divider) => {
        const element = divider as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }, 2000); // Wait for all animations to finish (longest is ~0.82s + 0.4s duration = ~1.22s, so 2s is safe)

    return () => clearTimeout(timer);
  }, []);

  return null;
}

