import Head from "next/head";
import styles from "../styles/Web-design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";

export default function WebDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Web Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section div={className.intro}>
          <h1>Web design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </section>

        {/* cards s/b components */}
        <section className={styles.cards}>
          <div className={styles.card}>
            Express A multi-carrier shipping website for ecommerce businesses
          </div>

          <div className={styles.card}>
            Transfer Site for low-cost money transfers and sending money within
            seconds
          </div>

          <div className={styles.card}>
            Photon A state-of-the-art music player with high-resolution audio
            and DSP effects
          </div>

          <div className={styles.card}>
            Builder Connects users with local contractors based on their
            location
          </div>

          <div className={styles.card}>
            Blogr Blogr is a platform for creating an online blog or publication
          </div>

          <div className={styles.card}>
            Camp Get expert training in coding, data, design, and digital
            marketing
          </div>
        </section>
        {/* project links s/b component */}
        <section className={styles.projectLinks}>
          <div className={styles.project}>
            <h2>App Design</h2>
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
