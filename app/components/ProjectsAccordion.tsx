'use client';

import { useState } from 'react';
import { Project } from '@/lib/types';
import ExpandableProjectCard from './ExpandableProjectCard';
import styles from './ProjectsAccordion.module.css';

interface ProjectsAccordionProps {
  projects: Project[];
}

export default function ProjectsAccordion({ projects }: ProjectsAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const handleToggle = (projectId: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <div className={styles.projectsList}>
      {projects.map((project, index) => (
        <ExpandableProjectCard
          key={project.id}
          project={project}
          isExpanded={expandedIds.has(project.id)}
          onToggle={() => handleToggle(project.id)}
          isLast={index === projects.length - 1}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

