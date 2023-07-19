var city= "Beograd"

function myFunction() {
     city = document.getElementById("myText").value;
    console.log(city);

    checkWeather();
  }


const apiKey = "ffcc3b1d6839acddfd18b10b824cdae1";
const apiUrl=  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(){
    const response = await fetch(apiUrl + city +'&appid=' + apiKey);
    var data = await response.json();
    
    document.querySelector("#demo").innerHTML = city;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML = "H: " + data.main.humidity + " %";
    document.querySelector(".wind").innerHTML =  "WS: " + data.wind.speed + " KM/H";
    const niz = data.weather;
    console.log(niz);
}
checkWeather();
