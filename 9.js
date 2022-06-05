function menornum(n) {
    let menor = Infinity;
    for(item of n){
        if(item < menor)
            menor = item;
    }
    return menor;

}
console.log(menornum([1,2,5]));