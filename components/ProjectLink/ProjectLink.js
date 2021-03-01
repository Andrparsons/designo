import styles from "./ProjectLink.module.css";
import Link from "next/link";

import { IconRightArrow } from "../SvgComponents/shared/desktop";

export default function ProjectLink(props) {
  return (
    <div className={styles.projectLink}>
      <Link href={props.linkPath}>
        <a className={styles.link}>
          <picture>
            <source srcSet={props.desktopImg} media="(min-width:900px)" />
            <source srcSet={props.tabletImg} media="(min-width:550px)" />
            <img src={props.mobileImg} alt="" className={styles.projectImg} />
          </picture>
          <div className={styles.projectContent}>
            <h2>{props.title}</h2>
            <div className={styles.projectLine}>
              <p className={styles.view}>view projects</p>
              <IconRightArrow />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
