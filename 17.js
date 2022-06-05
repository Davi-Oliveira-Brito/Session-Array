function menornum(array) {
    let menor = Infinity;
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            aux = menor;
            menor = array[i];
            array[0] = menor;
            array[i] = aux;
        }
    }
    return array;

}
console.log(menornum([4,2,1,3,7]));