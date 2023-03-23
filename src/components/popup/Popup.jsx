import styles from "./index.module.scss";

const Popup = ({ reservation }) => {
  return (
    <div className={styles.popup}>
      <h3>Tanks!</h3>
      <p>
        Your reservation for <strong>{reservation.date}</strong>at
        <strong>{reservation.hour}</strong> has been recived!
      </p>
    </div>
  );
};
export default Popup;
