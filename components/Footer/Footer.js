import styles from "./Footer.module.css";
import Link from "next/link";

import Container from "../Container/Container";

// svg imgs
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconYoutube,
  IconPinterest,
} from "../SvgComponents/shared/desktop";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.internalLinks}>
          <Link href="/">
            <a className={styles.logoLink}>
              <img src="/shared/desktop/logo-light.png" />
            </a>
          </Link>
          <div className={styles.footerLinks}>
            <Link href="/about">
              <a className={styles.footerLink}>our company</a>
            </Link>
            <Link href="/locations">
              <a className={styles.footerLink}>locations</a>
            </Link>
            <Link href="/contact">
              <a className={styles.footerLink}>contact</a>
            </Link>
          </div>
        </div>

        <div className={styles.addresses}>
          <div className={styles.address}>
            <h4>Designo Central Office</h4>
            <p className={styles.addressLine}>3886 Wellington Street</p>
            <p className={styles.addressLine}>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className={styles.address}>
            <h4>Contact Us (Central Office)</h4>
            <p className={styles.addressLine}>P : +1 253-863-8967</p>
            <p className={styles.addressLine}>M : contact@designo.co</p>
          </div>
        </div>

        <div className={styles.footerIcons}>
          <a className={styles.iconLink} href="https://www.facebook.com">
            <IconFacebook />
          </a>
          <a className={styles.iconLink} href="https://www.facebook.com">
            <IconYoutube />
          </a>
          <a className={styles.iconLink} href="https://www.twitter.com">
            <IconTwitter />
          </a>
          <a className={styles.iconLink} href="https://www.twitter.com">
            <IconPinterest />
          </a>
          <a className={styles.iconLink} href="https://www.instagram.com">
            <IconInstagram />
          </a>
        </div>
      </Container>
    </footer>
  );
}
