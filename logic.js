const apiKey = "fac3e37512cde1c071565b6aab26d7a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-Icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
            var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        WeatherIcon.src = "images/cloudy.png"


    }else if(data.weather[0].main == "Clear") {
        WeatherIcon.src = "images/clear_sun.png"


    }else if(data.weather[0].main == "Rain") {
        WeatherIcon.src = "images/Rain.png"


    }else if(data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "images/Drizzle.png"


    }else if(data.weather[0].main == "Mist") {
        WeatherIcon.src = "images/mist.png"
    }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})