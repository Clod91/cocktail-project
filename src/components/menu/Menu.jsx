import styles from "./index.module.scss";

const Menu = ({ menuVisibility }) => {
  return (
    <div className={`${styles.menu} ${menuVisibility ? "" : styles.hide}`}>
      <h2 className={styles.title}>Follow 753 Project!</h2>
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
    </div>
  );
};

export default Menu;
