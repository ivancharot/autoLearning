//Наследование через классы

class Animal{
    constructor() {
        this.legs=4,
        this.move = function () {
            for(let i=0;i<=this.legs;i++){console.log(i)}
        }
    }
}

class Cat extends Animal{
    scream(){
        console.log('mew')
    }
};

const cat= new Cat();

cat.move();
cat.scream();
