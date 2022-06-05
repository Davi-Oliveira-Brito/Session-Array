function filtro(arr, valor){
    let i = 0;
    let array = [];
    for(item of arr){
        if(item > valor){
            array[i] = item
            i++
        }
    }
    return array
}
console.log(filtro([1,2,3,4,5], 2))