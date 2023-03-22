import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import ItemDescription from "./components/itemDesciption";
import { useState } from "react";
import Footer from "./components/footer";
import Menu from "./components/menu";
function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    isVisible: false,
    payload: {},
  });
  return (
    <div className="App">
      <Navbar setMenuVisibility={setMenuVisibility} />
      <Menu menuVisibility={menuVisibility} />
      {itemInfo.isVisible ? (
        <ItemDescription data={itemInfo.payload} setItemInfo={setItemInfo} />
      ) : (
        <>
          <Hero />
          <Content setItemInfo={setItemInfo} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
