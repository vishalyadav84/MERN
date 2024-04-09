// function fetchAPI(){
//    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=XNMF7S5W4NC3WLW2KHL3TBZQP")
//    .then((res) => {
//     return res.json();
    
// })
// .then((data) => {
//     renderUI(data.datetime);
//     console.log(data)
   
// })
// // console.log(data);
// .catch((error) => {
//     console.error("Error fetching data:", error);
// }); 
// }
// // fetchAPI()




// function renderUI(data){
//     // const day=data.days;
//     // console.log(days);
//     const row =document.createElement("tr");
//     const cell =document.createElement("th");
//     cell.innerText ='Data';
//     // let cell1 = document.createElement("th")
//     // cell.innerHTML ='Data'
//     row.appendChild(cell);

//     const cell1 =document.createElement("th");
//     cell1.innerText ='maximum tem';
//     row.appendChild(cell1);

//     const cell2 =document.createElement("th");
//     cell2.innerText ='minimum tem';
//     row.appendChild(cell2);


//     // const cell3 =document.createElement("th");
//     // cell3.innerText ='Data';
//     // row.appendChild(cell3);
    
//     root.appaend(row)

//     // ShadowRoot.append(row);
// }
// // renderUI();
// fetchAPI()

// Assuming you have the weather data stored in a variable named 'weatherData'






function getAPI(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=XNMF7S5W4NC3WLW2KHL3TBZQP")
       .then((res) => {
            return res.json();
            
        })


const weatherData = {
       
    datetime: "2024-04-09",
    datetimeEpoch: 1712617200,
    tempmax: 54.6,
    tempmin: 46.1,
    temp: 49.9,
    feelslikemax: 54.6,
    feelslikemin: 39.8,
    feelslike: 46.2,
    dew: 39.5,
    humidity: 68.4,
    precip: 0.016,
    precipprob: 100,
    precipcover: 16.67,
    preciptype: ["rain"]
  };
  
  // Displaying the weather data
  console.log(`Weather for ${weatherData.datetime}`);
  console.log(`Temperature: ${weatherData.temp}°F (Min: ${weatherData.tempmin}°F, Max: ${weatherData.tempmax}°F)`);
  console.log(`Feels like: ${weatherData.feelslike}°F (Min: ${weatherData.feelslikemin}°F, Max: ${weatherData.feelslikemax}°F)`);
  console.log(`Dew Point: ${weatherData.dew}°F`);
  console.log(`Humidity: ${weatherData.humidity}%`);
  console.log(`Precipitation: ${weatherData.precip} inches`);
  console.log(`Precipitation Probability: ${weatherData.precipprob}%`);
  console.log(`Precipitation Cover: ${weatherData.precipcover}%`);
  console.log(`Precipitation Type: ${weatherData.preciptype.join(', ')}`);
  
  // Example: Determine if rain is expected
  if (weatherData.preciptype.includes("rain")) {
    console.log("Rain is expected.");
  } else {
    console.log("No rain expected.");
  }


}
console.log('weatherData');
// weatherData();
getAPI();