function maior(n) {
    let maior = 0;
    let segundo = 0;
    
    for(item of n)
        if(item > maior)
            maior = item;
    
    for(item of n)
        if(item > segundo && item < maior)
            segundo = item;        
    
    return segundo;
}

console.log(maior([0,2,4,3,4,2]));