function verificacao(array, numero){
    for(let i = 0; i< array.length; i++){
        if(array[i] == numero)
            return true;
    }
    return false;
}
console.log(verificacao([1,2,3,4],4))