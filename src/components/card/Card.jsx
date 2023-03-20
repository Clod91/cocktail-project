import "./index.scss";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        className="card_image"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="card_text">
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
