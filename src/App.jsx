import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import ItemDescription from "./components/itemDesciption";
import { useState } from "react";
function App() {
  const [itemInfo, setItemInfo] = useState({
    isVisible: false,
    payload: {},
  });
  return (
    <div className="App">
      <Navbar />
      {itemInfo.isVisible ? (
        <ItemDescription data={itemInfo.payload} setItemInfo={setItemInfo} />
      ) : (
        <>
          <Hero />
          <Content setItemInfo={setItemInfo} />
        </>
      )}
    </div>
  );
}

export default App;
