var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
let j = 0;

for (let i = 1; a*i <= N;i++){
    j += a* i
}

console.log(j)