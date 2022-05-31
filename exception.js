//В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’.

try{
    console.log(a);
    let a = 3
}
catch(error){
    console.log('Ошибка! let перед использованием нужно объявить')
}

//При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
const devision = (a,b) =>{
    try{
        if (b===0) throw new Error('На ноль делить нельзя') 
        else console.log(a/b);
    }
    catch (err){
        console.log(err.message)
    }
};

devision(3,0)