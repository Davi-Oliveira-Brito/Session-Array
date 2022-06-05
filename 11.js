function soma(n) {
    soma = 0;
    for(item of n){
        soma += item;
    }
    return soma / n.length;
}
console.log(soma([2,5,8]))