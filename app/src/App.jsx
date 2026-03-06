import "./App.css";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";
function App() {
  const [data, setData] = useState([]);
  const [filtereddata, setFilteredData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("all");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };

    fetchFoodData();
  }, []);

  console.log(data);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e) => {
    const string = e.target.value.toLowerCase();
    const result = data.filter((str) =>
      str.name.toLowerCase().includes(string),
    );
    setFilteredData(result);
  };

  const filteredFood = (type) => {
    console.log(type);
    if (type === "all") {
      setFilteredData(data);
    } else {
      const result = data.filter((str) => str.type.toLowerCase() === type);
      setFilteredData(result);
    }
    setSelectedButton(type);
  };
  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];
  return (
    <div className="Container">
      <div className="topContainer">
        <div className="Logo">
          <img src="../../public/Foody Zone.svg" alt="Logo" />
        </div>
        <div className="Search">
          <input
            placeholder="Search Food"
            className="SearchInput"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>

      <div className="filterContainer">
        {filterBtns.map((time) => {
          return (
            <Button
              value={time.name}
              onClick={() => {
                filteredFood(time.type);
              }}
              isSelected={selectedButton === time.type}
            ></Button>
          );
        })}
      </div>
      <SearchResult data={filtereddata} />
    </div>
  );
}

export default App;
