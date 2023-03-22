import styles from "./index.module.scss";

const ItemDescription = ({ data, setItemInfo }) => {
  const OnCloseClick = () => {
    setItemInfo((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <div className={styles.item_description}>
      <div className={styles.text}>
        <h1>{data.strDrink}</h1>
        <p>{data.strCategory}</p>
        <p>Build in: {data.strGlass}</p>
        <div className={styles.lists}>
          <ul>
            <h3>Ingredients:</h3>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <ul>
            <h3>Instructions:</h3>
            <li>{data.strInstructions}</li>
          </ul>
        </div>
        <button className={styles.close_btn} onClick={OnCloseClick}>
          X
        </button>
      </div>
      <div className={styles.image}>
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className={styles.carousel}>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
