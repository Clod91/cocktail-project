import "./index.scss";

const ItemDescription = ({ data, setItemInfo }) => {
  const OnCloseClick = () => {
    setItemInfo((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <div className="item_description">
      <div className="item_description_text">
        <h1>{data.strDrink}</h1>
        <p>{data.strCategory}</p>
        <p>Build in: {data.strGlass}</p>
        <div className="item_description_lists">
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
        <button className="close_btn" onClick={OnCloseClick}>
          X
        </button>
      </div>
      <div className="item_description_image">
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className="item_description_carousel">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
