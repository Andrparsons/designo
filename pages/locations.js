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
              <div className={styles.addresses}>
                <div className={styles.address}>
                  <h4>Designo Central Office</h4>
                  <p className={styles.addressLine}>3886 Wellington Street</p>
                  <p className={styles.addressLine}>Toronto, Ontario M9C 3J5</p>
                </div>

                <div className={styles.address}>
                  <h4>Contact</h4>
                  <p className={styles.addressLine}>P : +1 253-863-8967</p>
                  <p className={styles.addressLine}>M : contact@designo.co</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.map}>
              {/* placeholder */}
              <img src="/locations/desktop/image-map-australia.png" />
            </div>
            <div className={styles.locationContent}>
              <h2 className={styles.locationTitle}>Australia</h2>
              <div className={styles.addresses}>
                <div className={styles.address}>
                  <h4>Designo AU Office</h4>
                  <p className={styles.addressLine}>19 Balonne Street</p>
                  <p className={styles.addressLine}>New South Wales 2443</p>
                </div>

                <div className={styles.address}>
                  <h4>Contact</h4>
                  <p className={styles.addressLine}>P : (02) 6720 9092</p>
                  <p className={styles.addressLine}>M : contact@designo.au</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.map}>
              {/* placeholder */}
              <img src="/locations/desktop/image-map-united-kingdom.png" />
            </div>
            <div className={styles.locationContent}>
              <h2 className={styles.locationTitle}>United Kingdom</h2>
              <div className={styles.addresses}>
                <div className={styles.address}>
                  <h4>Designo UK Office</h4>
                  <p className={styles.addressLine}>13 Colorado Way</p>
                  <p className={styles.addressLine}>Rhyd-fro, SA8 9GA</p>
                </div>

                <div className={styles.address}>
                  <h4>Contact</h4>
                  <p className={styles.addressLine}>P : 078 3115 1400</p>
                  <p className={styles.addressLine}>M : contact@designo.uk</p>
                </div>
              </div>
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
