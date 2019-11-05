let prices = [15000, 10000, 1000, 20000];
let items = ['Стол', 'Стул', 'Полотенце', 'Зеркало'];

document.write('<h1>Распродажа! 50% скидки на все!</h1>');
for(let i=0; i<4; i++) {
	document.write(`${items[i]} | old - ${prices[i]} | new - ${prices[i]/100*50}<br>`)
}
