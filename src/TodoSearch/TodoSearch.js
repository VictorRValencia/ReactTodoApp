import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import image from '../img/notas2.png'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="col">
      <div className="col1">
        <p>Victor Manuel Rayo Valencia</p>
        <h1>What's Up!</h1>
        <img className="imgNotas" src={image} alt="Buenas"/>
      </div>
      <div className="col2">
        <p>Task name</p>
        <input
          className="TodoSearch"
          placeholder="Filter a  todo"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
}

export { TodoSearch };
