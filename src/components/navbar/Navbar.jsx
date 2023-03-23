import styles from "./index.module.scss";

const Navbar = ({ setMenuVisibility, setReservationInfo }) => {
  const onHandleMenuClick = () => setMenuVisibility((prev) => !prev);
  const onHandleResClick = () =>
    setReservationInfo((prev) => ({ ...prev, isVisible: true }));

  return (
    <div className={styles.navbar}>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About Us</li>
        <li onClick={onHandleResClick}>Reservations</li>
      </ul>
      <img
        src="https://cdn-icons-png.flaticon.com/512/920/920623.png"
        alt="logo"
      />
      <ul className={styles.socials}>
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
      <img
        className={styles.hamburger_menu}
        onClick={onHandleMenuClick}
        src="https://img.icons8.com/ios-filled/256/xbox-menu.png"
        alt="menu"
      />
    </div>
  );
};

export default Navbar;
