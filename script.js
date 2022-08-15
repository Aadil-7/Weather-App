const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95215b8d62msh61b45bbcea20d33p1959e3jsna2feaff5df81',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


const wheather = document.getElementById(`wheather`)
const cityName = document.getElementById(`cityname`)
const temp = document.getElementById(`temp`)
const tempf = document.getElementById(`fer`)
const searchBtn = document.getElementById(`searchbtn`)
const citySearch = document.getElementById(`citySearch`)
const feelsc = document.getElementById(`flc`)
const feelsf = document.getElementById(`flf`)
const country = document.getElementById(`country`)
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Tokyo' 

const getData = (city) => {
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
	.then(response => response.json())
	.then(response => {
		const data = response
		wheather.innerText = data.current.condition.text
		cityName.innerText = data.location.name
		temp.innerText = data.current.temp_c
		tempf.innerText = data.current.temp_f
		feelsc.innerText = data.current.feelslike_c
		feelsf.innerText = data.current.feelslike_f
		country.innerText = data.location.country
	})
	.catch(err => console.error(err));
}

searchBtn.onclick = ()=> getData(citySearch.value);
