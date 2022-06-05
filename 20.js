function adciconarArray(array, numero){
    
    array.length = array.length + 1;
    
    array[array.length - 1] = numero;

    return array;
}
console.log(adciconarArray([1,2,3,4,5],6))