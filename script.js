const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const inputArea = document.querySelector(".Input_area");
const inputClass = document.querySelector(".Input_Class");
const btn = document.querySelector(".button_Class");
const weather = document.querySelector("#wheather_area");

btn.addEventListener("click", function (getWeather) {
  const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return getWeather(data);
  };

  const getWeather = (data) => {
    if (data.cod == "404") {
      weather.innerHTML = `<h2> City Not Found <h2>`;
      return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4> 
        </div>
    `;
  };
});

