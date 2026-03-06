import styles from "./Button.module.css";
const Button = ({ value, onClick, isSelected }) => {
  console.log(value, isSelected);
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
