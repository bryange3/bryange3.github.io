'use client';

import { ReactNode } from 'react';
import styles from './RichContent.module.css';

interface RichContentProps {
  content: ReactNode;
}

export default function RichContent({ content }: RichContentProps) {
  return <div className={styles.richContent}>{content}</div>;
}

