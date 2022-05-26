//to Number
console.log(Number('123'));
console.log(Number('123 with letters'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number({}));

//to String
console.log(String(123));
console.log(String(true));
console.log(String(null));
console.log(String(undefined))
console.log(String({}));

//to Boolean
console.log(Boolean(undefined)) //the same with "",0,-0,NaN,null
console.log(Boolean('string')) //the same with each data type except of mentioned in 18th string