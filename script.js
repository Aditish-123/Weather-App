const weatherData = {
    delhi: {
        city: "New Delhi",
        temperature: "32°C",
        condition: "Sunny",
        humidity: "45%",
        wind: "12 km/h",
        icon: "☀️"
    },

    mumbai: {
        city: "Mumbai",
        temperature: "29°C",
        condition: "Cloudy",
        humidity: "70%",
        wind: "15 km/h",
        icon: "☁️"
    },

    jaipur: {
        city: "Jaipur",
        temperature: "35°C",
        condition: "Sunny",
        humidity: "40%",
        wind: "10 km/h",
        icon: "☀️"
    },

    amritsar: {
        city: "Amritsar",
        temperature: "31°C",
        condition: "Partly Cloudy",
        humidity: "55%",
        wind: "11 km/h",
        icon: "⛅"
    }
};

function searchWeather() {

    const input = document.getElementById("cityInput").value
        .trim()
        .toLowerCase();

    if (input === "") {
        alert("Please enter a city name!");
        return;
    }

    const weather = weatherData[input];

    if (!weather) {
        alert("Weather data not available for this city.");
        return;
    }

    document.getElementById("cityName").innerText = weather.city;
    document.getElementById("temperature").innerText = weather.temperature;
    document.getElementById("condition").innerText = weather.condition;
    document.getElementById("humidity").innerText = weather.humidity;
    document.getElementById("wind").innerText = weather.wind;
    document.querySelector(".weather-icon").innerText = weather.icon;
}
