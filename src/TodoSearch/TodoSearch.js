import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";



function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="col">
      <div className="col1">
        <p>Victor Manuel Rayo Valencia</p>
        <h1>Create new task</h1>
      </div>
      <div className="col2">
        <p>Task name</p>
        <input
          className="TodoSearch"
          placeholder="Cebolla"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
}

export { TodoSearch };
