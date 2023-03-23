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
function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);
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
        <ItemDescription data={itemInfo.payload} setItemInfo={setItemInfo} />
      ) : (
        <>
          {reservationInfo.isVisible && (
            <Reservation
              setReservationInfo={setReservationInfo}
              setPopupVisibility={setPopupVisibility}
            />
          )}

          <Hero />
          <Content setItemInfo={setItemInfo} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
