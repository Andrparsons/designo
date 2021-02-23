import Link from "next/link";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={styles.mobileMenu}
      style={
        open
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      <div className={styles.mobileLinks}>
        <Link href="/about">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            our company
          </a>
        </Link>
        <Link href="/locations">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            locations
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            contact
          </a>
        </Link>
      </div>
    </div>
  );
}
