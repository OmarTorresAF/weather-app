// import weather from '../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js'
import {weatherConditionCodes} from './constans.js'
import { getLatLon } from './geolocation.js'
import { getCurrentWeather } from './services/weather.js'


// weather.main.temp
// weatherConditionCodes[]

function setCurrentCity($el, city) {
	$el.textContent = city	
}







function setCurrentDate ($el) {
	const date = new Date()
	const formattedDate = formatDate(date)
	$el.textContent = formattedDate
}
function solarStatus(sunriseTime, sunsetTime ){
	const currentHours = new Date().getHours()
	const sunsetHours = sunsetTime.getHours()
	const sunriseHours = sunriseTime.getHours()

	if (currentHours > sunsetHours || currentHours < sunriseHours) { // (si ahorita es antes de la noche o ahorita es despues de que salio el sol)
		return 'night'
	}
		return 'morning'
}

function setBackground ($el, conditionCode, solarStatus){
	const weatherType = weatherConditionCodes[conditionCode]
	const size = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches ? '@2x' : ''
	// let size = ''
	// if (window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches) {
	// 	size = '@2x'
	// }
	
	$el.style.backgroundImage = `url(./images/${solarStatus}-${weatherType}${size}.jpg)`
}

function setCurrentTemp ($el, temp) {
	$el.textContent = formatTemp(temp)
}




function showCurrentWeather($app, $loader) {
	$app.hidden = false
	$loader.hidden = true
	
}

function configCurrentWeather(weather) {
	const $app = document.querySelector('#app')
	const $loading = document.querySelector('#loading')



	//loader
	showCurrentWeather($app, $loading)
	//date
	const $currentWeatherDate = document.querySelector('#current-weather-date')
	setCurrentDate($currentWeatherDate)
	//city
	const $currentWeatherCity = document.querySelector('#current-weather-city')
	const city = weather.name
	setCurrentCity($currentWeatherCity, city)
	$currentWeatherCity.textContent = weather.name
	// debugger
	//temp
	const $currentWeatherTemp = document.querySelector('#current-weather-temp')
	const temp = weather.main.temp
	setCurrentTemp($currentWeatherTemp, temp)

	//background
	const sunriseTime = new Date(weather.sys.sunrise * 1000)
	const sunsetTime = new Date(weather.sys.sunset * 1000)
	const conditionCode = String(weather.weather[0].id).charAt(0)
	setBackground($app, conditionCode, solarStatus(sunriseTime,sunsetTime ))

}

export default async function currentWeather() {
	//GEO // API - weather // Config app
	// console.log('esto pasa ANTES de getcurrentlocation')
	const {lat, lon, isError } = await getLatLon()
	if (isError) return console.log('Ah ocurrido un error ubicandote')
	// console.log(lat,lon)
	
	// getCurrentPosition()
	// .then((data)=> {
	// 	console.log('hemos triunfado', data)
	// })
	// .catch((message)=> {
	// 	console.log(message)
	// })
	// console.log('esto pasa DESPUES de getcurrentlocation')
	const { isError: currentWeatherError, data: weather } = await getCurrentWeather(lat, lon)
	if (currentWeatherError) return console.log('oh! ha ocurrido un error trayendo los datos del clima')
	configCurrentWeather(weather)
	// console.log(weather)
}

