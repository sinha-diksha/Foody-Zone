import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="Container">
      <div className="topContainer">
        <div className="Logo">
          <img src="../../public/Foody Zone.svg" alt="Logo" />
        </div>
        <div className="Search">
          <input placeholder="Search Food" className="SearchInput" />
        </div>
      </div>

      <div className="filterContainer">
        <Button value="All"></Button>
        <Button value="Breakfast"></Button>
        <Button value="Lunch"></Button>
        <Button value="Dinner"></Button>
      </div>
    </div>
  );
}

export default App;
