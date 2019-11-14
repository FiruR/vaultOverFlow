

let jsonData = function() {
let request = fetch(`http://localhost:1337/question`);
request.then(function(response){
	const jsonResp = response.json();
	jsonResp.then(function(data){
		date = new Date();
		for(let i= 0; i< data.length; i++) {

			let dateCreat = data[i].createdAt;
			date = new Date(dateCreat);
			day = date.getDay();
			month = date.getMonth();
			year = date.getFullYear();

			console.log(data[i].description)

			let title = document.getElementById('title').innerHTML += `<br> <h3> ${i}.${data[i].title}. </h3> 
			Создано: ${day}.${month}.${year} <br> ${data[i].description}`;
		}
	})
})
}

jsonData();