const car = {};
//set color as 'черный'
car.color = 'черный';
console.log(car);

//change color
car.color = 'зеленый';
console.log(car);

//set car power & function that shows it
car.power = function(){console.log('car power is '+500)}
car.power();