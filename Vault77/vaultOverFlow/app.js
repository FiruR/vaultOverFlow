

let jsonData = function() {
let request = fetch(`http://localhost:1337/question`);
request.then(function(response){
	const jsonResp = response.json();
	jsonResp.then(function(data){
		for(let i= 0; i< data.length; i++) {
			document.write(data[i].title)
			console.log('data',data[i].title);
		}
	})
})
}

jsonData();