function Tabuada(numero){
    let numeros = [];
    for(let i = 0; i <= 10; i++){
        numeros[i] = i * numero;
    }
    return numeros;
}
console.log(Tabuada(5))