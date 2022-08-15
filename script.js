const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95215b8d62msh61b45bbcea20d33p1959e3jsna2feaff5df81',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Tokyo', options)
	.then(response => response.json())
	.then(response => console.log(response.current.temp_c))
	.catch(err => console.error(err));