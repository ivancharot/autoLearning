function stock(fruits){
    let sum=0;
    for (key in fruits){
        sum+=fruits[key]
    }
    return sum
}