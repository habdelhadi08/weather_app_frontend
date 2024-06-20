import "../DataDisplay/DataDisplay.css"
function DataDisplay({ data }) {

  
    console.log(data);
    return (
      <div>
        {/* <h1 style={{color:"red"}} >Welcome to our Weather app  </h1> */}
        <div className="container">
      
         <div className="location">
            <p>{data.name}</p>
            <h1 style={{color:"blue"}}>{data.main.temp}°F</h1>
            </div>
          
                
           
 
           <div className="description">
            <p><h3>Temp_max</h3>
            {data.main.temp_max}°F</p>
            <p><h3>Temp_min</h3>
            {data.main.temp_min}°F</p>
            <p><h3>Humidity</h3>
            {data.main.humidity}%</p>
            </div>
          
    

            </div> 
     
    
          
          </div>
       
      

       ) }
  
  export default DataDisplay;