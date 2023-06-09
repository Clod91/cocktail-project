import styles from "./index.module.scss";

const Card = ({ data, setItemInfo }) => {
  const onCardClick = () =>
    setItemInfo((prev) => ({
      ...prev,
      isVisible: true,
      payload: data,
    }));

  return (
    <div className={styles.card} onClick={onCardClick}>
      <img
        className={styles.image}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className={styles.text}>
        <h3>{data.strDrink}</h3>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
