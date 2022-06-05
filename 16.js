function ascii(nome){
    let conv = []
    for(let i = 0; i < nome.length; i++){
        conv[i] =nome[i].charCodeAt()
    }
    return conv;
}
console.log(ascii("Bruno"))