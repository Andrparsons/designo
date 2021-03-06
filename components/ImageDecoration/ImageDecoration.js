import styles from "./ImageDecoration.module.css";

export default function ImageDecoration({ orientation = "left", children }) {
  return <div className={styles[orientation]}>{children}</div>;
}
