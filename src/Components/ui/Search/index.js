import React, {useContext} from "react";
import './style.css';
import {MovieConsumer} from '../../../Context'
function SearchBar() {
  const {handelChange, searchTerm, handelSubmit} = useContext(MovieConsumer);
  return (
    <div className="getStarted">
      <input onChange={handelChange} value={searchTerm} type="text" id="email" placeholder="Explore Your Movies, TV Series, Shows etc..." />
      <button for="email" type="button" onClick={handelSubmit}>Get Started </button>
    </div>
  );
}

export default SearchBar;
