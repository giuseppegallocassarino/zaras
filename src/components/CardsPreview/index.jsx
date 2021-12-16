import styles from "./CardsPreview.module.scss";

const CardsPreview = (props) => {
  const data = props.data || {
    
    photo: "https://randomuser.me/api/portraits/women/59.jpg",
  };

  return (
    <div className={styles.card}>
      <img src={data.photo} alt={data.name} />
     
    </div>
  );
};

export { CardsPreview };