// Declare the global variables
let searchInput = $("#city-name")
const searchBtn = $("#search-btn")

const APIkey = "8e97a91e5813b6e17ff52b89e396e190"
let cityName



function searchCity() {
  // Grab city name entered by the user
  var searchInputValue = searchInput.val();

   // Return error if the input field is blank
   if(!searchInputValue){
    alert("Please enter a city name.");
    return;
}
// Send the query
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey.val();

fetch(queryURL)

console.log(queryURL.val())
}


// Add event listener for the search button
searchBtn.on("click", function(e){
  e.preventDefault();
  searchCity()
})

