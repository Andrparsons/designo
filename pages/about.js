import Head from "next/head";
import styles from "../styles/About.module.css";

import ImageDecoration from "../components/ImageDecoration/ImageDecoration";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";

import {
  IllustrationCanada,
  IllustrationAustralia,
  IllustrationUnitedKingdom,
} from "../components/SvgComponents/shared/desktop";

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
          <picture>
            <source
              media="(min-width:900px)"
              srcSet="/about/desktop/image-about-hero.jpg"
            />
            <source
              media="(min-width:550px)"
              srcSet="/about/tablet/image-about-hero.jpg"
            />
            <img
              className={styles.introPic}
              src="/about/mobile/image-about-hero.jpg"
              alt="Teamwork"
            />
          </picture>
          <div className={styles.introContent}>
            <h1>About us</h1>
            <p className={styles.introParagraph}>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
        </section>

        <section className={styles.talentSection}>
          <picture>
            <source
              media="(min-width:900px)"
              srcSet="/about/desktop/image-world-class-talent.jpg"
            />
            <source
              media="(min-width:550px)"
              srcSet="/about/tablet/image-world-class-talent.jpg"
            />
            <img
              className={styles.sectionPic}
              src="/about/mobile/image-world-class-talent.jpg"
              alt="Talent"
            />
          </picture>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionHeader}>World-class talent</h2>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>

            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </section>

        <section className={styles.locationSection}>
          <div className={styles.location}>
            <ImageDecoration orientation="top">
              <IllustrationCanada />
            </ImageDecoration>
            <div className={styles.locationContent}>
              <h3 className={styles.locationTitle}>Canada</h3>
              <Button btnStyle="secondary">See location</Button>
            </div>
          </div>

          <div className={styles.location}>
            <ImageDecoration orientation="left">
              <IllustrationAustralia />
            </ImageDecoration>
            <div className={styles.locationContent}>
              <h3 className={styles.locationTitle}>Australia</h3>
              <Button btnStyle="secondary">See location</Button>
            </div>
          </div>

          <div className={styles.location}>
            <ImageDecoration orientation="bottom">
              <IllustrationUnitedKingdom />
            </ImageDecoration>
            <div className={styles.locationContent}>
              <h3 className={styles.locationTitle}>United Kingdom</h3>
              <Button btnStyle="secondary">See location</Button>
            </div>
          </div>
        </section>

        <section className={styles.dealSection}>
          <picture>
            <source
              media="(min-width:900px)"
              srcSet="/about/desktop/image-real-deal.jpg"
            />
            <source
              media="(min-width:550px)"
              srcSet="/about/tablet/image-real-deal.jpg"
            />
            <img
              className={styles.sectionPic}
              src="/about/mobile/image-real-deal.jpg"
              alt="Real Deal"
            />
          </picture>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionHeader}>The real deal</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
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
