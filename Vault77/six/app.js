let passw = 'mypassword'
let msg = "введите пароль"
console.log(passw, 'passwsdd')
let prom = prompt(msg);
let i = 4;



// if (prom !== passw) {
// 	for(let i=2; i>=0; i--) {
// 	console.log(i);
// 	console.log(prom);
// 		console.log(prom);
// 		if (i<1) {
// 			document.write('Вы заблокированы')
// 		} else {
// 			alert(`Неправильный пароль. У вас осталось ${i} попыток`)
// 			prompt(msg);
// 		}
// 	}
// }

while (i !== 0) {
	if (prom !== passw) {
			alert(`Неправильный пароль. У вас осталось ${i} попыток`)
			prompt(msg);
		i--;
	} else if (prom == passw) {
		alert('welcome')
	}
}





