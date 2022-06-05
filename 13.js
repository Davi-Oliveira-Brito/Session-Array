function dobroArray(numeros){
    let array = [];
    for(let i = 0; i < numeros.length; i++){
        array[i] = numeros[i] * 2;
    }
    return array;
}
console.log(dobroArray([1,2,3,4]))