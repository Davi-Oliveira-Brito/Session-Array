function criarsequencia( inicio, limite) {
    let numeros = [];
    let e = 0;
    for(let i =limite; i >= inicio; i--){
        numeros[e] = i;
        e++;
    }
    return numeros;
}

console.log(criarsequencia(2,6));