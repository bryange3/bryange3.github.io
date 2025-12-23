import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <article className={styles.content}>
          <h1 className={styles.title}>About Me</h1>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Background</h2>
            <p className={styles.paragraph}>
              I&apos;m a software designer currently working at Amplify Education,
              where I build tools for internal authors developing digital learning
              programs for K-12 teachers and students. My work focuses on creating
              intuitive interfaces that help educators create engaging educational
              content.
            </p>
            <p className={styles.paragraph}>
              My journey in design has taken me through various industries and
              companies, from tech giants like Apple and Amazon to startups and
              healthcare technology at Particle Health. Each experience has shaped
              my approach to user-centered design and problem-solving.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Design Philosophy</h2>
            <p className={styles.paragraph}>
              I believe great design is invisible—it should feel natural and
              intuitive to users while solving complex problems behind the scenes.
              My approach combines user research, iterative prototyping, and close
              collaboration with engineering teams to create products that truly
              serve their users.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Outside of Work</h2>
            <p className={styles.paragraph}>
              When I&apos;m not designing, you&apos;ll find me in the kitchen
              experimenting with new recipes—brown butter pumpkin bread is a
              personal favorite. I also love spending time in the mountains,
              especially catching the alpenglow during golden hour.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
            <p className={styles.paragraph}>
              I&apos;m always interested in connecting with fellow designers,
              developers, and anyone passionate about creating meaningful digital
              experiences. Feel free to reach out via email or LinkedIn.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:your.email@example.com" className={styles.contactLink}>
                Email
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                LinkedIn
              </a>
              <a href="/resume.pdf" className={styles.contactLink}>
                Resume
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

