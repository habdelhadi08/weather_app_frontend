/* eslint-disable react/prop-types */

import { useState } from "react";

function Form({ datasearch }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    datasearch(formData.searchTerm);
  }

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          value={formData.setFormData}
          onChange={handleChange}
        />
        <input placeholder="Enter yout location" type="submit" />
      </form>
    </div>
  );
}

export default Form;