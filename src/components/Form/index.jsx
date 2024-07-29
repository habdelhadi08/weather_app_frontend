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
      <i class="fa-solid fa-location-dot"></i>
        <input
          type="text"
          name="searchTerm"
          value={formData.setFormData}
          onChange={handleChange}
          placeholder= "Enter your location" 
          
        />
         
        <button> submit </button>
      </form>
    </div>
  );
}

export default Form;