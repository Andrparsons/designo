import Head from "next/head";
import styles from "../styles/Home.module.css";

import ImageDecoration from "../components/ImageDecoration/ImageDecoration";
import ProjectLink from "../components/ProjectLink/ProjectLink";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";

// svg illustrations

import {
  IllustrationPassionate,
  IllustrationResourceful,
  IllustrationFriendly,
} from "../components/SvgComponents/home/desktop";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introContainer}>
            <h1>Award-winning custom designs and digital branding solutions</h1>

            <p className={styles.introParagraph}>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button>Learn more</Button>
          </div>
        </section>

        <section className={styles.projectSection}>
          <Container>
            <div className={styles.projectGrid}>
              <div className={styles.largeProjectLink}>
                <ProjectLink
                  mobileImg="/home/mobile/image-web-design.jpg"
                  tabletImg="/home/tablet/image-web-design.jpg"
                  desktopImg="/home/desktop/image-web-design-large.jpg"
                  title="Web Design"
                  linkPath="/web-design"
                />
              </div>

              <ProjectLink
                mobileImg="/home/mobile/image-app-design.jpg"
                tabletImg="/home/tablet/image-app-design.jpg"
                desktopImg="/home/desktop/image-app-design.jpg"
                title="App Design"
                linkPath="/app-design"
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

        <section className={styles.featureSection}>
          <Container>
            <div className={styles.features}>
              <div className={styles.feature}>
                <ImageDecoration orientation="left">
                  <IllustrationPassionate />
                </ImageDecoration>
                <div className={styles.featureContent}>
                  <h3>Passionate</h3>
                  <p className={styles.featureText}>
                    Each project starts with an in-depth brand research to
                    ensure we only create products that serve a purpose. We
                    merge art, design, and technology into exciting new
                    solutions.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <ImageDecoration orientation="bottom">
                  <IllustrationResourceful />
                </ImageDecoration>
                <div className={styles.featureContent}>
                  <h3>Resourceful</h3>
                  <p className={styles.featureText}>
                    Everything that we do has a strategic purpose. We use an
                    agile approach in all of our projects and value customer
                    collaboration. It guarantees superior results that fulfill
                    our clients’ needs.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <ImageDecoration orientation="bottom">
                  <IllustrationFriendly />
                </ImageDecoration>
                <div className={styles.featureContent}>
                  <h3>Friendly</h3>
                  <p className={styles.featureText}>
                    We are a group of enthusiastic folks who know how to put
                    people first. Our success depends on our customers, and we
                    strive to give them the best experience a company can
                    provide.
                  </p>
                </div>
              </div>
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
