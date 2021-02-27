import Head from "next/head";
import styles from "../styles/Home.module.css";

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
          <Container>
            <h1>Award-winning custom designs and digital branding solutions</h1>

            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button>Learn more</Button>
            <img
              src="/home/desktop/image-hero-phone.png"
              alt="Picture of a phone"
            />
          </Container>
        </section>

        {/* project links s/b component */}
        <section className={styles.projectSection}>
          <Container>
            <div className={styles.project}>
              <h2>Web Design</h2>
              View Projects
            </div>

            <div className={styles.project}>
              <h2>App Design</h2>
              View Projects
            </div>
            <div className={styles.project}>
              <h2>Graphic Design</h2>
              View Projects
            </div>
          </Container>
        </section>

        <section className={styles.featureSection}>
          <Container>
            <div className={styles.feature}>
              <IllustrationPassionate />
              <h3>Passionate</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>

            <div className={styles.feature}>
              <IllustrationResourceful />
              <h3>Resourceful</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>

            <div className={styles.feature}>
              <IllustrationFriendly />
              <h3>Friendly</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
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
