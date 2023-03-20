import "./index.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero_title">753 PROJECT</h1>
      <ul className="hero_first_list">
        <li>
          <div className="classics">
            <p>classics</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/38/38706.png"
              alt="classics"
            />
          </div>
        </li>
        <li>
          <div className="signatures">
            <p>signatures</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3329/3329163.png"
              alt="signatures"
            />
          </div>
        </li>
        <li>
          <div className="wines">
            <p>wines</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/763/763113.png"
              alt="wines"
            />
          </div>
        </li>
      </ul>
      <hr />
      <ul className="hero_second_list">
        <li>ordinary drinks</li>
        <li>cocktails</li>
        <li>shots</li>
        <li>punch</li>
        <li>coffees</li>
        <li>others</li>
      </ul>
    </div>
  );
};

export default Hero;
