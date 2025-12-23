import { getAllProjects } from "@/lib/projects";
import styles from "./page.module.css";
import EmailCopy from "./components/EmailCopy";
import ProjectsAccordion from "./components/ProjectsAccordion";

const workHistory = [
  { company: "Amplify Education", role: "UX Design", year: "Now" },
  { company: "Togwotee Mountain Lodge", role: "Front Desk", year: "2024" },
  { company: "Nice Handwriting", role: "Product Design", year: "2024" },
  { company: "Amazon", role: "UX Design", year: "2023" },
  { company: "Particle Health", role: "Product Design", year: "2022-23" },
  { company: "Apple", role: "Product Design", year: "2022" },
  { company: "Cargill", role: "UX Design", year: "2021-22" },
  { company: "State Farm", role: "Software Engineering", year: "2021" },
];

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Left Column */}
        <aside className={styles.sidebar}>
          <div className={styles.bio}>
            <h1 className={styles.greeting}>Hi, I&apos;m Bryan!</h1>
            <p className={styles.bioText}>
              I am a software designer at{" "}
              <a
                href="https://www.amplify.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Amplify Education
              </a>{" "}
              creating tools that support K–12 teachers and enable internal authors to build high-quality digital learning programs.
            </p>
            <p className={styles.bioText}>
              Outside of work, I enjoy baking brown butter pumpkin bread and
              {" "}
              <a
                href="https://fav-hikes.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                hiking
              </a>.
            </p>
          </div>

          <nav className={styles.workHistory}>
            <ul className={styles.workList}>
              {workHistory.map((job, index) => (
                <li key={index} className={styles.workItem}>
                  <div className={styles.workContent}>
                    <div className={styles.workCompany}>{job.company}</div>
                    <div className={styles.workRole}>{job.role}</div>
                  </div>
                  <div className={styles.workYear}>{job.year}</div>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer}>
            <div className={styles.footerText}>
              <EmailCopy />
              <a
                href="https://linkedin.com/in/bryange"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        {/* Column Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Mobile Horizontal Divider */}
        <div className={styles.mobileDivider} aria-hidden="true" />

        {/* Right Column */}
        <main className={styles.main}>
          <ProjectsAccordion projects={projects} />

          {projects.length === 0 && (
            <div className={styles.emptyState}>
              <p>
                No projects yet. Add your projects in{" "}
                <code>lib/projects.ts</code>.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
