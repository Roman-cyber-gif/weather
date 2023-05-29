
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "84bd6fe1ede55950afb1947bd8186eab"
}

const cities =  {
	3333169 : "Manchester",
	4164138 : "Miami",
	4246659 : "Paris",
	703448 : "Kyiv",
	3143244 : "Oslo"
 }

function init () {
	const select = document.createElement('select');
	select.id = 'city' 
}


function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`) 
	.then(weather => {
			return weather.json();
		}).then(showWeather);	
}
// https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png
function showWeather(data) {
    console.log(data);
	document.querySelector('.weather-city').textContent = data.name;
	document.querySelector('.weather-status').textContent = data.weather[0]['main'];
	document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
	document.querySelector('.weather_feels-like').innerHTML = 'Feels like:' + Math.round(data.main.feels_like - 273) + '&deg';
	document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	document.querySelector('.wind_speed').innerHTML = 'Wind Speed: ' + data.wind.speed + 'm/s';
	document.querySelector('.wind_direction').innerHTML = 'Wind direction: ' + data.wind.deg + '&deg';
	document.querySelector('.pressure').innerHTML = 'Pressure: ' + data.main.pressure;
}
getWeather();
document.querySelector('#city').onchange = getWeather;