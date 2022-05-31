function simpleNumber(num){
    let status = 'simple';
    for(let x = 2; x < num;x ++){
        if(num % x == 0) { 
        status='not simple';
        break;
        }
    }
    return status
}
