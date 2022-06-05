function formulaBhaskara(a,b,c){
    let delta = (b * b) - (4 * a * c);
    let bhaskaraSoma = (-b + Math.sqrt(delta)) / 2 * a;
    let bhaskaraSub =  (-b - Math.sqrt(delta)) / 2 * a;
    let resultado = [bhaskaraSoma, bhaskaraSub];
    
    return resultado; 
}
console.log(formulaBhaskara(1, 12, -13))