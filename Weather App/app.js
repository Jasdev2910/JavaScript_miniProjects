const apiKey = "489dacc5cf5e186e11e449bd030c8a8b";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(URL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
        console.log(data);
        const location = document.querySelector(".city").innerHTML = data.name;
        const temp = document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        const humidity = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        const wind = document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.gif"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.gif"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.gif"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.gif"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.gif"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.gif"
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunderstorm.gif"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})