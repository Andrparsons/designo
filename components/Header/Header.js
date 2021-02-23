import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";

import Container from "../Container/Container";

// import MobileMenu from "../MobileMenu/MobileMenu";
// import { IconHamburger, IconClose } from "../SvgComponents/shared/mobile";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.linkGroup}>
          <Link href="/">
            <a className={styles.logoLink}>
              <img src="/shared/desktop/logo-dark.png" />
            </a>
          </Link>
          <div className={styles.responsiveLinkGroup}>
            <Link href="/about">
              <a className={styles.pageLink}>our company</a>
            </Link>
            <Link href="/locations">
              <a className={styles.pageLink}>locations</a>
            </Link>
            <Link href="/contact">
              <a className={styles.pageLink}>contact</a>
            </Link>
          </div>
        </div>
        {/* <div className={styles.menuWrapper}>
        <div className={styles.MenuIcon} onClick={() => setOpen(!open)}>
          <IconHamburger
            className={open ? styles.notVisible : styles.visible}
          />
          <IconClose className={open ? styles.visible : styles.notVisible} />
        </div>
        <MobileMenu open={open} setOpen={setOpen} />
      </div> */}
      </Container>
    </header>
  );
}
