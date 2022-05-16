import React from "react";
import { Select } from "semantic-ui-react";

const Filter = ({ setFilterType }) => {
  const filterOptions = [
    { key: Math.random(), value: "All", text: "All" },
    { key: Math.random(), value: "Completed", text: "Completed" },
    { key: Math.random(), value: "Uncompleted", text: "Uncompleted" },
  ];
  const handleChange = (e) => {
    setFilterType(e.target.innerText);
  };
  return (
    <div>
      <Select
        onChange={handleChange}
        placeholder="filter"
        options={filterOptions}
      />
    </div>
  );
};

export default Filter;
