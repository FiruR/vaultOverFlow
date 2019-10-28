let passw = 'mypassword'
let msg = "введите пароль"
let prom = prompt(msg);
console.log(passw, 'passw')

if (prom == passw) {
	document.write('Секретная информация');
} else if (prom !== passw) {
	alert('Неправильный пароль')
	prompt(msg);
} 