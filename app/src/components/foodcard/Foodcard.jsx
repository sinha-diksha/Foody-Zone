import { BASE_URL } from "../../App";
import Button from "../Button";
import styles from "./Foodcard.module.css";

const Foodcard = ({ food }) => {
  return (
    <div className={styles.foodCard}>
      <div className={styles.foodImage}>
        <img src={BASE_URL + food.image} />
      </div>
      <div className={styles.foodInfo}>
        <div className="info">
          <h3>{food.name}</h3>
          <p>{food.text}</p>
        </div>
        <Button value={"$" + food.price.toFixed(2)}></Button>
      </div>
    </div>
  );
};

export default Foodcard;
