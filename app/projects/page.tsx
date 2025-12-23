import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // Sort: featured first, then by order
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return 0;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A collection of my product design work
        </p>
      </header>

      <div className={styles.grid}>
        {sortedProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className={styles.projectCard}
          >
            {project.featuredImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  unoptimized
                />
              </div>
            )}
            <div className={styles.content}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.companyAndYear && (
                <span className={styles.companyAndYear}>{project.companyAndYear}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className={styles.empty}>
          <p>No projects found. Add your projects in <code>lib/projects.ts</code>.</p>
        </div>
      )}
    </div>
  );
}

