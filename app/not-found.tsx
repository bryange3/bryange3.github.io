import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.bio}>
            <h1 className={styles.greeting}>404</h1>
            <p className={styles.bioText}>
              Page not found. The page you're looking for doesn't exist.
            </p>
            <Link href="/" className={styles.link} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

