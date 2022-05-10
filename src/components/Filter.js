import React from "react";
import { Select } from "semantic-ui-react";

const Filter = ({
  //   filteredTodos,
  //   setFilteredTodos,
  //   todos,
  //   setTodos,
  setFilterType,
}) => {
  const filterOptions = [
    { key: Math.random(), value: "All", text: "All" },
    { key: Math.random(), value: "Completed", text: "Completed" },
    { key: Math.random(), value: "Uncompleted", text: "Uncompleted" },
  ];
  const handleChange = (e) => {
    // console.log(e.target.innerText);
    setFilterType(e.target.innerText);
  };
  return (
    <>
      <Select
        onChange={handleChange}
        placeholder="filter"
        options={filterOptions}
      />
    </>
  );
};

export default Filter;
