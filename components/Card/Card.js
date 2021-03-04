import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.imgSrc} alt="" className={styles.cardImg} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <p className={styles.cardText}>{props.text}</p>
      </div>
    </div>
  );
}
