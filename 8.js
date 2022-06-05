function maiornum(n) {
    let maior = 0;
    for(item of n){
        if(item > maior)
            maior = item;
    }
    return maior;
}
console.log(maiornum([0,2,5]));