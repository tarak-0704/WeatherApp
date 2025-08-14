const apiKey = "3eea3a352964928bf66fc8471fa18d87";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.searchbox');
const searchBtn = document.querySelector('.searchbutton');

async function getWeather(city) {
    
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    const data = await response.json();

    console.log(data);
}

searchBtn.addEventListener('click',()=>{
    getWeather(searchBox.value);
});