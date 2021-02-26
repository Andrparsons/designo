import styles from "./CTA.module.css";

import Button from "../Button/Button";

export default function CTA() {
  return (
    <div className={styles.CTA}>
      <div className={styles.CTAContent}>
        <h1>Let’s talk about your project</h1>
        <p className={styles.CTAText}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className={styles.CTAButton}>
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}
