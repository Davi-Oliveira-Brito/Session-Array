function criarsequencia(limite) {
    let numeros = [];
    for(let i =0; i < limite; i++){
        numeros[i] = i +1;
    }
    return numeros;
}

console.log(criarsequencia(5));
