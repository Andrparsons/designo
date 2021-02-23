import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Award-winning custom designs and digital branding solutions</h1>

          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>Learn more</button>
        </section>

        {/* project links s/b component */}
        <section className={styles.projectLinks}>
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
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Passionate</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Resourceful</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Friendly</h3>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </section>

        {/* this should be a component  */}
        <section className={styles.CTA}>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <button>Get in touch</button>
        </section>
      </main>
    </div>
  );
}
