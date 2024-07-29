import { useState, useEffect } from "react";
import Form from "../../components/Form/"
import DataDisplay from "../../components/DataDisplay/index.jsx"
import "../HomePage/HomePage.css"


// import "./App.css";

function HomePage() {
  const apiKey = "e11c56b6b150e5cd613bf1c07165260b";
  const [data, setData] = useState(null);

  // getCat
  const getData = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=e11c56b6b150e5cd613bf1c07165260b`,
      );

      const data = await res.json();

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    console.log("running useEffect.....");
    getData("Detroit");
  }, []);

  return (
<div className="container">
      <h1 style={{color:"white"}}>The Weather Channel</h1>
      <Form datasearch={getData} />
      
      {data ? <DataDisplay data={data} /> : <h1>Please try again</h1>}
    </div>
  );
}
export default HomePage;