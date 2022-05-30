//Получить день, месяц и год текущей даты и по отдельности вывести в консоль

const today = new Date();
console.log(today.getDate());
console.log(today.getMonth()+1<10?'0'+(today.getMonth()+1):today.getMonth()+1);
console.log(today.getFullYear());