//Наследование через прототипы
const animal = {
    legs:4
}

function Cat(){};

Cat.prototype = animal;

const cat = new Cat();

animal.move = function(){for(let i=0;i<=this.legs;i++){console.log(i)}};

cat.move();
