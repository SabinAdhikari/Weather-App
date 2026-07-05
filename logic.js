const apiKey = "fac3e37512cde1c071565b6aab26d7a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})