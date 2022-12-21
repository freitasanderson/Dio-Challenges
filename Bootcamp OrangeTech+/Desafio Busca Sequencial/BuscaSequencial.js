let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let achou;

for (num in elementos){
  if (valor == elementos[num]){
    achou = 1;
    pos=num
  }
}

if (achou == 1){
  console.log(`Achei ${valor} na posicao ${pos}`);
}
else{
  console.log(`Numero ${valor} nao encontrado!`);
}