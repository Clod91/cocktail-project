import Card from "../card";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import styles from "./index.module.scss";

const Content = ({ setItemInfo, cocktailList, setCocktailList }) => {
  useEffect(() => {
    GET("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d").then(
      ({ drinks }) => {
        setCocktailList(() => drinks);
      }
    );
  }, []);

  return (
    <div className={styles.content}>
      {cocktailList.map((cocktail, i) => (
        <Card
          data={{ ...cocktail, positionList: i }}
          key={cocktail.idDrink}
          setItemInfo={setItemInfo}
        />
      ))}
    </div>
  );
};

export default Content;
