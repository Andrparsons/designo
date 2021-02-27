import Head from "next/head";
import styles from "../styles/App-design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";

export default function AppDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | App Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section div={className.intro}>
          <h1>App design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </section>

        {/* cards s/b components */}
        <section className={styles.cards}>
          <div className={styles.card}>
            Airfilter Solving the problem of poor indoor air quality by
            filtering the air
          </div>

          <div className={styles.card}>
            Eyecam Product that lets you edit your favorite photos and videos at
            any time
          </div>

          <div className={styles.card}>
            Faceit Get to meet your favorite internet superstar with the faceit
            app
          </div>

          <div className={styles.card}>
            Todo A todo app that features cloud sync with light and dark mode
          </div>

          <div className={styles.card}>
            Loopstudios A VR experience app made for Loopstudios
          </div>
        </section>
        {/* project links s/b component */}
        <section className={styles.projectLinks}>
          <div className={styles.project}>
            <h2>Web Design</h2>
            View Projects
          </div>
          <div className={styles.project}>
            <h2>Graphic Design</h2>
            View Projects
          </div>
        </section>

        <section className={styles.CTASection}>
          <Container>
            <CTA />
          </Container>
        </section>
      </main>
    </div>
  );
}
