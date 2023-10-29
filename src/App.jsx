import "./App.css";
import { data } from "./data";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [filterList, setFilterList] = useState([]);
  const addToFilterList = (data) => {
    if (!filterList.includes(data)) {
      setFilterList((list) => [...list, data]);
    } else {
      setFilterList(filterList);
    }
  };

  const removeFromFilterList = (data) => {
    setFilterList((list) => list.filter((key) => key !== data));
  };

  const clearAllFilterList = () => {
    setFilterList([]);
  };
  return (
    <main>
      <div className="Header"></div>
      {filterList.length > 0 && (
        <Header
          filterList={filterList}
          removeFromFilterList={removeFromFilterList}
          clearAllFilterList={clearAllFilterList}
        />
      )}
      <Jobs
        jobs={data}
        addToFilterList={addToFilterList}
        filterList={filterList}
      />
    </main>
  );
}

export default App;
