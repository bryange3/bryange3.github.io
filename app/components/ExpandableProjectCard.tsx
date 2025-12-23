'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Project } from '@/lib/types';
import styles from './ExpandableProjectCard.module.css';
import RichContent from './RichContent';

interface ExpandableProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
  isFirst?: boolean;
}

export default function ExpandableProjectCard({
  project,
  isExpanded,
  onToggle,
  isLast,
  isFirst = false,
}: ExpandableProjectCardProps) {
  const hasExpandableContent = !!project.content;
  const expandedContentRef = React.useRef<HTMLDivElement>(null);
  const innerContentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<number>(0);

  // Measure content height including padding
  React.useLayoutEffect(() => {
    if (innerContentRef.current && expandedContentRef.current) {
      // Temporarily expand to measure
      const currentMaxHeight = expandedContentRef.current.style.maxHeight;
      expandedContentRef.current.style.maxHeight = 'none';
      expandedContentRef.current.style.paddingTop = '1.5rem';
      expandedContentRef.current.style.paddingBottom = 'var(--page-padding)';
      
      const height = expandedContentRef.current.scrollHeight;
      
      // Restore
      expandedContentRef.current.style.maxHeight = currentMaxHeight;
      expandedContentRef.current.style.paddingTop = '';
      expandedContentRef.current.style.paddingBottom = '';
      
      setContentHeight(height);
    }
  }, [project.content, isExpanded]);

  return (
    <>
      <div className={styles.projectCard}>
        <div className={`${styles.projectHeader} ${isExpanded ? styles.expanded : ''} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''}`}>
          <div className={styles.projectHeaderInner}>
            {project.featuredImage && (
              <div className={styles.projectImage}>
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  width={800}
                  height={500}
                  className={styles.image}
                  unoptimized
                />
              </div>
            )}
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              {project.companyAndYear && (
                <div className={styles.projectMeta}>
                  <span className={styles.projectCompanyAndYear}>
                    {project.companyAndYear}
                  </span>
                </div>
              )}
              {hasExpandableContent && (
                <button
                  onClick={onToggle}
                  className={styles.viewMoreButton}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Less' : 'More'}
                  <ChevronDown
                    className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                    size={16}
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        {hasExpandableContent && (
          <div 
            ref={expandedContentRef}
            className={`${styles.expandedContent} ${isExpanded ? styles.expanded : styles.collapsed}`}
            style={contentHeight > 0 ? { 
              '--content-height': `${contentHeight}px`,
            } as React.CSSProperties : undefined}
          >
            <div ref={innerContentRef} className={styles.expandedContentInner}>
              <RichContent content={project.content!} />
              {project.projectLink && (
                <div className={styles.projectLinkContainer}>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!isLast && <div className={styles.projectDivider} aria-hidden="true" />}
    </>
  );
}

