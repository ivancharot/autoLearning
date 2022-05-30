//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
const string = 'ahb acb aeb aeeb adcb axeb';
const regex = /a.b/g;
const result = string.match(regex);

console.log(result);

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
const str = '2+3 223 2223';
const regex2 = /2\+3/g;
const result2 = str.match(regex2);

console.log(result2);