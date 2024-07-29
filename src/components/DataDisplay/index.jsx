import "../DataDisplay/DataDisplay.css"
function DataDisplay({ data }) {

  
    console.log(data);
    return (
      <div>
        {/* <h1 style={{color:"red"}} >Welcome to our Weather app  </h1> */}
        <div className="container">
        <img alt="weather" className= "weather-icon" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} width={240} height={200}/>
         <div className="description">
       
           <h2>{data.name}</h2>
             <h1>{data.weather[0].description} </h1>
             <h1 style={{color:"white"}}>{data.main.temp}°F</h1>
        
            </div>
        <div className="box">
            <p><h3>Temp_max</h3>
            <i class="fa-solid fa-temperature-high"></i> {data.main.temp_max}°F</p>
            <p><h3>Temp_min</h3>
            <i class="fa-solid fa-temperature-low"></i> {data.main.temp_min}°F</p>
            <p> <h3>Humidity</h3>
            <i class="fa-solid fa-droplet"></i> {data.main.humidity}%</p>
            <p> <h3>Wind Speed</h3>
            <i class="fa-solid fa-wind"></i>{data.wind.speed}%</p>
            </div>
          
    

            </div> 
     
    
          
          </div>
       
      

       ) }
  
  export default DataDisplay;