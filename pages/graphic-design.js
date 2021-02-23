import Head from "next/head";
import styles from "../styles/Graphic-design.module.css";

export default function WebDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | App Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section div={className.intro}>
          <h1>Graphic design</h1>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </section>

        {/* cards s/b components */}
        <section className={styles.cards}>
          <div className={styles.card}>
            Tim Brown A book cover designed for Tim Brown’s new release,
            ‘Change’
          </div>

          <div className={styles.card}>
            Boxed water A simple packaging concept made for Boxed Water
          </div>

          <div className={styles.card}>
            Science! A poster made in collaboration with the Federal Art Project
          </div>
        </section>
        {/* project links s/b component */}
        <section className={styles.projectLinks}>
          <div className={styles.project}>
            <h2>App Design</h2>
            View Projects
          </div>
          <div className={styles.project}>
            <h2>Web Design</h2>
            View Projects
          </div>
        </section>
      </main>
    </div>
  );
}
