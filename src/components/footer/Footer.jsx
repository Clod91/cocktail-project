import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>Find Us</li>
        <li>Taste Itinerary</li>
        <li>Contact Us for a Partnership</li>
      </ul>
    </div>
  );
};

export default Footer;
