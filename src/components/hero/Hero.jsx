import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="image"
      />
      <h1 className={styles.title}>753 PROJECT</h1>
      <ul className={styles.first_list}>
        <li>
          <div>
            <p>classics</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/38/38706.png"
              alt="classics"
            />
          </div>
        </li>
        <li>
          <div>
            <p>signatures</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3329/3329163.png"
              alt="signatures"
            />
          </div>
        </li>
        <li>
          <div>
            <p>wines</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/763/763113.png"
              alt="wines"
            />
          </div>
        </li>
      </ul>
      <hr />
      <ul className={styles.second_list}>
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
