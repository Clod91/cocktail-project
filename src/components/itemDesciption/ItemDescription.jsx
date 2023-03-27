import styles from "./index.module.scss";

const ItemDescription = ({ data, setItemInfo, filteredList }) => {
  const OnCloseClick = () => {
    setItemInfo((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const onHandleNextBtn = () => {
    setItemInfo((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList + 1],
      positionList: prev.positionList + 1,
    }));
  };

  const onHandlePrevBtn = () => {
    setItemInfo((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList - 1],
      positionList: prev.positionList - 1,
    }));
  };

  return (
    <div className={styles.item_description}>
      <div className={styles.text}>
        <h1>{data.payload.strDrink}</h1>
        <p>{data.payload.strCategory}</p>
        <p>Build in: {data.payload.strGlass}</p>
        <div className={styles.lists}>
          <ul>
            <h3>Ingredients:</h3>
            <li>{data.payload.strIngredient1}</li>
            <li>{data.payload.strIngredient2}</li>
            <li>{data.payload.strIngredient3}</li>
          </ul>
          <ul>
            <h3>Instructions:</h3>
            <li>{data.payload.strInstructions}</li>
          </ul>
        </div>
        <button className={styles.close_btn} onClick={OnCloseClick}>
          X
        </button>
      </div>
      <div className={styles.image}>
        <img src={data.payload.strDrinkThumb} alt={data.idDrink} />
        <div className={styles.carousel}>
          <button onClick={onHandlePrevBtn}>Previous</button>
          <button onClick={onHandleNextBtn}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
