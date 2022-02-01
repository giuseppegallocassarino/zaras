import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <ul>
      <li className={styles.card}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>€ {props.price}</p>
      </li>
    </ul>
  );
};

export { Product };
