import Head from "next/head";
import styles from "../styles/Home.module.css";

import CTA from "../components/CTA/CTA";
import Container from "../components/Container/Container";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <h1>About us</h1>

          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </section>

        <section className={styles.talent}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
        </section>

        <section className={styles.locations}>
          <div className={styles.location}>
            Canada
            <button>See location</button>
          </div>

          <div className={styles.location}>
            Australia
            <button>See location</button>
          </div>

          <div className={styles.location}>
            United Kingdom
            <button>See location</button>
          </div>
        </section>

        <section className={styles.realDeal}>
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
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
