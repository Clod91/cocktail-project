import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import ItemDescription from "./components/itemDesciption";
import { useState } from "react";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Reservation from "./components/reservation";
import Popup from "./components/popup";
import { filteredList } from "./utils/func";
function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const [category, setCategory] = useState("Cocktail");
  const [cocktailList, setCocktailList] = useState([]);
  const [isPopupIsVisible, setPopupVisibility] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({
    isVisible: false,
    surname: "",
    date: "",
    hour: "",
  });
  const [itemInfo, setItemInfo] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  });
  return (
    <div className="App">
      <Navbar
        setMenuVisibility={setMenuVisibility}
        setReservationInfo={setReservationInfo}
      />

      {isPopupIsVisible && <Popup reservation={reservationInfo} />}
      <Menu menuVisibility={menuVisibility} />
      {itemInfo.isVisible ? (
        <ItemDescription
          data={itemInfo}
          setItemInfo={setItemInfo}
          filteredList={filteredList(cocktailList, "strCategory", category)}
        />
      ) : (
        <>
          {reservationInfo.isVisible && (
            <Reservation
              setReservationInfo={setReservationInfo}
              setPopupVisibility={setPopupVisibility}
            />
          )}

          <Hero setCategory={setCategory} />
          <Content
            setItemInfo={setItemInfo}
            cocktailList={filteredList(cocktailList, "strCategory", category)}
            setCocktailList={setCocktailList}
            category={category}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
