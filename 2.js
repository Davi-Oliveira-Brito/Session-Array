function criarsequencia(limite) {
    let numeros = [];
    for(let i =0; i < limite; i++){
        numeros[i] = i;
    }
    return numeros;
}

console.log(criarsequencia(5));