import styles from "./SearchResult.module.css";
import Foodcard from "../foodcard/Foodcard.jsx";

const SearchResult = ({ data }) => {
  return (
    <div className={styles.foodCardContainer}>
      {data?.map((food) => (
        <Foodcard key={food} food={food} />
      ))}
    </div>
  );
};

export default SearchResult;
