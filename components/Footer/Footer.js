import styles from "./Footer.module.css";
import Link from "next/link";

// svg imgs
// import {
//   IconFacebook,
//   IconTwitter,
//   IconInstagram,
// } from "../SvgComponents/shared/desktop";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.internalLinks}>
        <Link href="/">
          <a>
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

      <div className={styles.address}>
        Designo Central Office 3886 Wellington Street Toronto, Ontario M9C 3J5
        Contact Us (Central Office) P : +1 253-863-8967 M : contact@designo.co
      </div>

      {/* <div className={styles.footerIcons}>
        <a className={styles.iconLink} href="https://www.facebook.com">
          <IconFacebook />
        </a>
        <a className={styles.iconLink} href="https://www.twitter.com">
          <IconTwitter />
        </a>
        <a className={styles.iconLink} href="https://www.instagram.com">
          <IconInstagram />
        </a>
      </div> */}
    </footer>
  );
}
