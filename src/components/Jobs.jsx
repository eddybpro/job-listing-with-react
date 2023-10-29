import "./Jobs.css";
import Job from "./Job";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Jobs({ jobs, addToFilterList, filterList }) {
  const [filteredList, setFilteredList] = useState([]);
  const modifiedData = () => {
    if (filterList.length > 0) {
      const newData = filteredList.filter((d) => {
        return filterList.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredList(newData);
    } else {
      setFilteredList(jobs);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [filterList]);

  return (
    <div className="JobsContainer">
      {filteredList.map((job) => (
        <Job
          key={job.id}
          data={job}
          addToFilterList={addToFilterList}
          keyWords={filterList}
        />
      ))}
    </div>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.array,
  filterList: PropTypes.array,
  addToFilterList: PropTypes.func,
};

export default Jobs;
