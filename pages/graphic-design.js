import Head from "next/head";
import styles from "../styles/Design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProjectLink from "../components/ProjectLink/ProjectLink";

export default function GraphicDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | App Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <h1>Graphic design</h1>
          <p className={styles.introParagraph}>
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
        <section className={styles.projectSection}>
          <Container>
            <div className={styles.projectGrid}>
              <ProjectLink
                mobileImg="/home/mobile/image-app-design.jpg"
                tabletImg="/home/tablet/image-app-design.jpg"
                desktopImg="/home/desktop/image-app-design.jpg"
                title="App Design"
                linkPath="/app-design"
              />

              <ProjectLink
                mobileImg="/home/mobile/image-web-design.jpg"
                tabletImg="/home/tablet/image-web-design.jpg"
                desktopImg="/home/desktop/image-web-design-large.jpg"
                title="Web Design"
                linkPath="/web-design"
              />
            </div>
          </Container>
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
