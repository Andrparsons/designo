import Head from "next/head";
import styles from "../styles/Design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProjectLink from "../components/ProjectLink/ProjectLink";
import Card from "../components/Card/Card";

export default function AppDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | App Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <h1>App design</h1>
          <p className={styles.introParagraph}>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </section>

        <section className={styles.cardSection}>
          <Container>
            <div className={styles.gridCardContainer}>
              <Card
                imgSrc="/app-design/desktop/image-airfilter.jpg"
                title="Airfilter"
                text="Solving the problem of poor indoor air quality by
                filtering the air"
              />
              <Card
                imgSrc="/app-design/desktop/image-eyecam.jpg"
                title="Eyecam"
                text="Product that lets you edit your favorite photos and videos at
                any time"
              />

              <Card
                imgSrc="/app-design/desktop/image-faceit.jpg"
                title="Faceit"
                text="Get to meet your favorite internet superstar with the faceit
                app"
              />

              <Card
                imgSrc="/app-design/desktop/image-todo.jpg"
                title="Todo"
                text="A todo app that features cloud sync with light and dark mode"
              />

              <Card
                imgSrc="/app-design/desktop/image-loopstudios.jpg"
                title="Loopstudios"
                text="A VR experience app made for Loopstudios"
              />
            </div>
          </Container>
        </section>

        <section className={styles.projectSection}>
          <Container>
            <div className={styles.projectGrid}>
              <ProjectLink
                mobileImg="/home/mobile/image-web-design.jpg"
                tabletImg="/home/tablet/image-web-design.jpg"
                desktopImg="/home/desktop/image-web-design-small.jpg"
                title="Web Design"
                linkPath="/web-design"
              />

              <ProjectLink
                mobileImg="/home/mobile/image-graphic-design.jpg"
                tabletImg="/home/tablet/image-graphic-design.jpg"
                desktopImg="/home/desktop/image-graphic-design.jpg"
                title="Grpahic Design"
                linkPath="/graphic-design"
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
