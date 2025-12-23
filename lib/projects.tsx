import React from "react";
import { Project } from "./types";
import Image from "next/image";

// Local projects data
// Add your projects here. Images should be placed in the public/projects/ folder
// and referenced as "/projects/image-name.jpg"
const projectsData: Project[] = [
  {
    id: "1",
    slug: "amplify/assign",
    title: "Assign to Groups",
    description: "Shipped enhanced activity assignment capabilities, allowing teachers to assign activities to groups or individual students, in addition to whole classes, for more targeted support.",
    companyAndYear: "Amplify Education, 2025",
    featuredImage: "/projects/assign-to-groups.jpg",
    featured: true,
    order: 1,
  },
  {
    id: "2",
    slug: "amplify/notifications",
    title: "Account Verification for Platform Unification",
    description: "Notified teachers about the upcoming Amplify-Desmos platform unification. Prompted teachers with unverified email addresses to verify their accounts to maintain access to their custom content, driving 50K verifications within one week.",
    companyAndYear: "Amplify Education, 2025",
    featuredImage: "/projects/notifications-of-account-migration.jpg",
    featured: true,
    order: 2,
  },
  {
    id: "3",
    slug: "amazon",
    title: "Buy with Prime Discovery",
    description: "Helped shoppers discover and understand Buy with Prime on direct-to-consumer websites. Shipped on Shopify, live on merchant sites such as Adidas.com.",
    companyAndYear: "Amazon, 2023",
    featuredImage: "/projects/amazon.jpg",
    order: 3,
    // content: (
    //   <>
    //     <h4>iCloud is Apple's cloud storage service.</h4>
    //     <p>iCloud is designed to help users securely store and sync their photos, notes, messages, and more across devices such as iPhones, iPads, and Macs.</p>
    //     {/* <Image src="/projects/image.jpg" alt="..." width={1200} height={600} />
    //     <video src="/projects/video.mp4" controls /> */}
    //   </>
    // ),
  },
  {
    id: "4",
    slug: "apple",
    title: "Legacy Contact Enhancement",
    description: "Enhanced Legacy Contact, a feature for Apple users to share account data with trusted ones after their death. Designed Family Checklist entry point which became the primary driver of adoption.",
    companyAndYear: "Apple, 2022",
    featuredImage: "/projects/apple.jpg",
    order: 4,
    // content: (
    //   <>
    //     <h3>iCloud is Apple's cloud storage service.</h3>
    //     <p>iCloud is designed to help users securely store and sync their photos, notes, messages, and more across devices such as iPhones, iPads, and Macs.</p>
    //     {/* <Image src="/projects/image.jpg" alt="..." width={1200} height={600} />
    //     <video src="/projects/video.mp4" controls /> */}
    //   </>
    // ),
  },
  {
    id: "5",
    slug: "ssw",
    title: "Newspaper Nonprofit Contributor Dashboard",
    description: "Centralized story management and collaboration between 250+ admin and contributors at a Chicago newspaper nonprofit.",
    companyAndYear: "South Side Weekly, 2021",
    featuredImage: "/projects/ssw.jpg",
    order: 5,
  },
];

/**
 * Gets all projects
 * This runs at build time to generate static pages
 */
export async function getAllProjects(): Promise<Project[]> {
  // Return projects sorted by: featured first, then by order
  return [...projectsData].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return 0;
  });
}

/**
 * Fetches a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}

