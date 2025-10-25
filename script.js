const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

// Sample demo data for cities
const demoWeather = {
  "chennai": { temp: 32, desc: "sunny", humidity: 60, wind: 10, icon: "01d" },
  "mumbai": { temp: 29, desc: "cloudy", humidity: 75, wind: 15, icon: "03d" },
  "delhi": { temp: 27, desc: "hazy", humidity: 55, wind: 12, icon: "50d" },
  "bangalore": { temp: 24, desc: "rainy", humidity: 80, wind: 8, icon: "09d" },
  "kolkata": { temp: 30, desc: "humid", humidity: 85, wind: 14, icon: "02d" },
  "london": { temp: 18, desc: "overcast", humidity: 70, wind: 20, icon: "04d" },
};

// Function to display fake or demo weather
function displayWeather(city) {
  const cityKey = city.toLowerCase();
  const data = demoWeather[cityKey] || generateRandomWeather(city);

  document.getElementById("city-name").textContent = city;
  document.getElementById("temperature").textContent = `${data.temp} °C`;
  document.getElementById("description").textContent = data.desc;
  document.getElementById("humidity").textContent = `${data.humidity}%`;
  document.getElementById("wind").textContent = `${data.wind} km/h`;
  document.getElementById("weather-icon").src =
    `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
}

// Generate random weather for unknown cities
function generateRandomWeather(city) {
  const conditions = [
    { desc: "sunny", icon: "01d" },
    { desc: "cloudy", icon: "03d" },
    { desc: "rainy", icon: "09d" },
    { desc: "stormy", icon: "11d" },
    { desc: "foggy", icon: "50d" },
  ];
  const random = conditions[Math.floor(Math.random() * conditions.length)];
  return {
    temp: (Math.random() * 15 + 20).toFixed(1),
    desc: random.desc,
    humidity: Math.floor(Math.random() * 40 + 50),
    wind: Math.floor(Math.random() * 15 + 5),
    icon: random.icon,
  };
}

// Handle user search
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    displayWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});