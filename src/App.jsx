import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
