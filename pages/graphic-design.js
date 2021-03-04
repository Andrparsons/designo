import Head from "next/head";
import styles from "../styles/Design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProjectLink from "../components/ProjectLink/ProjectLink";
import Card from "../components/Card/Card";

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

        <section className={styles.cardSection}>
          <Container>
            <div className={styles.gridCardContainer}>
              <Card
                imgSrc="/graphic-design/desktop/image-change.jpg"
                title="Tim Brown"
                text="A book cover designed for Tim Brown’s new release,
                ‘Change’"
              />
              <Card
                imgSrc="/graphic-design/desktop/image-boxed-water.jpg"
                title="Boxed water"
                text="A simple packaging concept made for Boxed Water"
              />

              <Card
                imgSrc="/graphic-design/desktop/image-science.jpg"
                title="Science!"
                text="A poster made in collaboration with the Federal Art Project"
              />
            </div>
          </Container>
        </section>

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
                desktopImg="/home/desktop/image-web-design-small.jpg"
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
