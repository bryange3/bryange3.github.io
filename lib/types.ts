import { ReactNode } from 'react';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  companyAndYear?: string;
  featuredImage?: string;
  images?: string[];
  projectLink?: string;
  caseStudy?: string;
  content?: ReactNode; // Rich content as React node - you can code JSX directly
  featured?: boolean;
  order?: number;
}

