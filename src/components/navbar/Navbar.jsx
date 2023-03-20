import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar_links">
        <li>Home</li>
        <li>About Us</li>
        <li>Reservations</li>
      </ul>
      <img
        src="https://cdn-icons-png.flaticon.com/512/920/920623.png"
        alt="logo"
      />
      <ul className="navbar_socials">
        <li>
          <img
            src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-HD.png"
            alt="facebook"
          />
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
            alt="twitter"
          />
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            alt="instagram"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
