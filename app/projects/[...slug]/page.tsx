import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => {
    // Split slug by '/' to create array for catch-all route
    const slugParts = project.slug.split('/');
    return {
      slug: slugParts,
    };
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  // Join array back into string for lookup
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const project = await getProjectBySlug(slugString);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <article className={styles.project}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.companyAndYear && (
            <span className={styles.companyAndYear}>{project.companyAndYear}</span>
          )}
        </header>

        {project.featuredImage && (
          <div className={styles.featuredImage}>
            <Image
              src={project.featuredImage}
              alt={project.title}
              width={1200}
              height={600}
              unoptimized
            />
          </div>
        )}

        <div className={styles.content}>
          <p className={styles.description}>{project.description}</p>

          {project.caseStudy && (
            <div className={styles.caseStudy}>
              <h2>Case Study</h2>
              <div className={styles.caseStudyContent}>
                {project.caseStudy.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className={styles.imageGallery}>
              <h2>Gallery</h2>
              <div className={styles.images}>
                {project.images.map((image, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.projectLink && (
            <div className={styles.link}>
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
      </article>
    </div>
  );
}

