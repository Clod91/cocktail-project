import Card from "../card";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.scss";

const Content = ({ setItemInfo }) => {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    GET("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d").then(
      ({ drinks }) => {
        setCocktailList(() => drinks);
      }
    );
  }, []);

  return (
    <div className="content">
      {cocktailList.map((cocktail) => (
        <Card
          data={cocktail}
          key={cocktail.idDrink}
          setItemInfo={setItemInfo}
        />
      ))}
    </div>
  );
};

export default Content;
