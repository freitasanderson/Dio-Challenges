let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:
let valor = 0
function somatorio(n){
  valor += n;
  if (n == 0){
    print(valor)
  }
  else{
    n--;
    somatorio(n)
  }
}

somatorio(n);