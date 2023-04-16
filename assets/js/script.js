// Declare the global variables
let searchInput = $("#city-name")
const searchBtn = $("#search-btn")
const APIkey = "8e97a91e5813b6e17ff52b89e396e190"

function searchCity() {
  // Grab city name entered by the user
  let cityName = searchInput.val();

   // Return error if the input field is blank
   if(!cityName){
    alert("Please enter a city name.");
    return;
}
// Send the query
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

fetch(queryURL).then( function(response) {
  return response.json()
}).then( function(data) {
    console.log(data)
    var currentWeather = $("#current-weather")
    var tempEL = $("<p>").text("Current temp: " + data.main.temp + "F").addClass("is-link")
    currentWeather.append(tempEL)
    fiveDay(cityName)
})
console.log(queryURL)
}

function fiveDay(cityName) {
  
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

  fetch(queryURL).then( function(response) {
    return response.json()
  }).then( function(data) {
      console.log(data)
      const daysInForecast = data.list
      console.log(queryURL)
      /*
      Each date object has a property called "dt", which is a Unix timestamp for the date and time 
      of that object's data. The first one is 1681333200.
      */ 
     
     // Create a new array to hold one day block per forecast day.
     const newForecastArr = [] 
     
     // iterate over the 40 blocks, but we will do them 8 at a time, so that we get one per day.
     for( let i=0; i<40; i=i+8 ){
       newForecastArr.push( daysInForecast[i])
      }
      
      // We now have a new array with one record for each day!
      console.log(newForecastArr)
    })
  }

  // Add event listener for the search button
  searchBtn.on("click", function(e){
    e.preventDefault();
    searchCity()
})

