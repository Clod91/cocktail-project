import { useState } from "react";
import styles from "./index.module.scss";

const Reservation = ({ setReservationInfo, setPopupVisibility }) => {
  const [surname, setSurame] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const onHandleTextChange = (e) => setSurame(e.target.value);
  const onHandleDateChange = (e) => setDate(e.target.value);
  const onHandleHourChange = (e) => setHour(e.target.value);
  const onHandleCloseBtn = () =>
    setReservationInfo((prev) => ({ ...prev, isVisible: false }));
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setPopupVisibility(true);
    setTimeout(() => {
      setPopupVisibility(false);
    }, 3000);
    setReservationInfo((prev) => ({
      ...prev,
      isVisible: false,
      surname: surname,
      date: date,
      hour: hour,
    }));
  };

  return (
    <div className={styles.reservation}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Book your table</h2>
          <form className={styles.form} onSubmit={onHandleSubmit}>
            <label htmlFor="text">Name for the Table </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Name"
              value={surname}
              onChange={onHandleTextChange}
            />

            <label htmlFor="date"> Day for your Reservation </label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={onHandleDateChange}
            />

            <label htmlFor="time">Time for your Reservation</label>
            <input
              type="time"
              name="time"
              id="time"
              value={hour}
              onChange={onHandleHourChange}
            />
            <input type="submit" value="Book your Table" />
            <button className={styles.button} onClick={onHandleCloseBtn}>
              X
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
