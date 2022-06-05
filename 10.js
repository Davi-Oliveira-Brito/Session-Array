function soma(n) {
    soma = 0;
    for(item of n){
        soma += item;
    }
    return soma;
}
console.log(soma([3,2,2,2]))