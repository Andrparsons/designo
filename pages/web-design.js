import Head from "next/head";
import styles from "../styles/Design.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProjectLink from "../components/ProjectLink/ProjectLink";
import Card from "../components/Card/Card";

export default function WebDesign() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Web Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introContainer}>
            <h1>Web design</h1>
            <p className={styles.introParagraph}>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </div>
        </section>

        <section className={styles.cardSection}>
          <Container>
            <div className={styles.gridCardContainer}>
              <Card
                imgSrc="/web-design/desktop/image-express.jpg"
                title="Express"
                text="A multi-carrier shipping website for ecommerce businesses"
              />
              <Card
                imgSrc="/web-design/desktop/image-transfer.jpg"
                title="Transfer"
                text="Site for low-cost money transfers and sending money
              within seconds"
              />

              <Card
                imgSrc="/web-design/desktop/image-photon.jpg"
                title="Photon"
                text="A state-of-the-art music player with high-resolution audio
              and DSP effects"
              />

              <Card
                imgSrc="/web-design/desktop/image-builder.jpg"
                title="Builder"
                text="Connects users with local contractors based on their
              location"
              />

              <Card
                imgSrc="/web-design/desktop/image-blogr.jpg"
                title="Blogr"
                text="Blogr is a platform for creating an online blog or
              publication"
              />

              <Card
                imgSrc="/web-design/desktop/image-camp.jpg"
                title="Camp"
                text="Get expert training in coding, data, design, and digital
              marketing"
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
