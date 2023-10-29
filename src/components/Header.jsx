import "./Header.css";
import { RemoveIcon } from "../assets";
import PropTypes from "prop-types";

function Header({ filterList, removeFromFilterList, clearAllFilterList }) {
  return (
    <div className="HeaderBox">
      <ul className="HeaderBox-List">
        {filterList.map((key, id) => (
          <li key={id}>
            <button className="HeaderBox-List-Key">{key}</button>
            <button
              className="HeaderBox-List-RemoveBtn"
              aria-label="remove"
              onClick={() => removeFromFilterList(key)}
            >
              <img src={RemoveIcon} alt="" />
            </button>
          </li>
        ))}
      </ul>
      <button className="HeaderBox-ClearBtn" onClick={clearAllFilterList}>
        clear
      </button>
    </div>
  );
}

Header.propTypes = {
  filterList: PropTypes.array,
  removeFromFilterList: PropTypes.func,
  clearAllFilterList: PropTypes.func,
};

export default Header;
