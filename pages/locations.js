import Head from "next/head";
import styles from "../styles/Locations.module.css";

import Container from "../components/Container/Container";
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
        <title>Designo | Locations</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.locations}>
          <div className={styles.location}>
            <div className={styles.map}>
              {/* placeholder */}
              <img src="/locations/desktop/image-map-canada.png" />
            </div>
            <div className={styles.locationContent}>
              <h2 className={styles.locationTitle}>Canada</h2>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.map}>
              {/* placeholder */}
              <img src="/locations/desktop/image-map-australia.png" />
            </div>
            <div className={styles.locationContent}>
              <h2 className={styles.locationTitle}>Australia</h2>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.map}>
              {/* placeholder */}
              <img src="/locations/desktop/image-map-united-kingdom.png" />
            </div>
            <div className={styles.locationContent}>
              <h2 className={styles.locationTitle}>United Kingdom</h2>
            </div>
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
