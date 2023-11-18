import { LinkButton } from "../../components/base/button/link-button";
import styles from "./page.module.css";

export const HomePage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <img
            className={styles.logo}
            src="/olientgx-logo.jpg"
            alt="Logo of OLIENTTECH"
          />
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.introTitle}>
            <h1>
              OLIENTTECH
              <br />
              Recruitment Challenges
            </h1>
          </div>
          <div className={styles.introSubtitle}>
            <p>
              Used by some of the world's largest companies, Next.js enables you
              to create full-stack Web applications by extending the latest
              React features, and integrating powerful Rust-based JavaScript
              tooling for the fastest builds.
            </p>
          </div>
          <div className={styles.introStack}>
            <div className={styles.introStackButtons}>
              <LinkButton href="/">Get Started</LinkButton>
              <LinkButton href="/" variant="outlined">
                README
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
