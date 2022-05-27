//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
['film 1','film 2','film 3'].forEach(n=>console.log(n));

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
['car 1','car 2','car 3'].join(', ').split(', ');

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
console.log(['John','Tom','Diana'].map(n=>'Hello, '+n));

//Преобразовать числовой массив в Boolean
console.log(Boolean([0,5,-8,4,9]));

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
console.log([1,6,7,8,3,4,5,6].sort((a,b) => b-a));

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
console.log([1,6,7,8,3,4,5,6].filter(n=>n>3));

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
function findIndex(arr, num) {
    let indexCollection =[];
    for (let x=0; x<arr.length;x++){
        if(arr[x]===num) indexCollection.push(x)
    }
    return indexCollection.join(', ')
}
console.log(findIndex([4, 6, 7, 4, 6, 8, 3, 6, 9, 0, 6],6))

//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
function cycle(a){
    do {
        console.log(a);
        a--;
    }
    while (a>=10)
}
cycle(15);

//Реализовать цикл, который выводит в консоль простые числа
function simpleNumConsole(stopNum){
    for(let i = 2;i<stopNum;i++){
        let status = true;
        for(let x = 2; x < i; x++)
            if(i%x == 0) { 
                status=false;
                break;
            }
        if(status) {console.log(i)};
    }
}

simpleNumConsole(100);

//Реализовать цикл, который выводит в консоль нечетные числа

const odd = (start, till) =>{
    for(start;start<till;start++){
        if(start%2!==0)console.log(start)
    }
}

odd(-10,30)