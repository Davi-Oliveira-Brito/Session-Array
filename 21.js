function adciconarArray(array, numero){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray[i + 1] = array[i];  
    }
    newArray[0] = numero;
    return newArray;

}
console.log(adciconarArray([1,2,3,4,5],6))