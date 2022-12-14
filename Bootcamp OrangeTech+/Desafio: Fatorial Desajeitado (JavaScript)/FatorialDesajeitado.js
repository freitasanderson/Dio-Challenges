let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 


let lista = [];
let listaResultado = [];
let listaResultado2 = [];
let listaResultado3 = [];
let resultado = 0;

let contar = 1;

//Criar Lista
for (let i=1; i<= n; i++){
  lista.unshift(i);
}

//Multiplicação
for (let i=0; i < lista.length; i++){
  if (contar == 1 && lista[i+1]){
    
    listaResultado.push((lista[i]*lista[i+1]));
    
  }

  else if(contar == 2){
    
  }
  else{
    listaResultado.push(lista[i]);
  }
  if (contar < 4){
    contar++;
  }
  else{
    contar = 1;
  }
}

//Divisão
contar = 1;
for (let i=0; i < listaResultado.length; i++){
  if (contar == 1 && listaResultado[i+1]){
    
    listaResultado2.push(parseInt(listaResultado[i]/listaResultado[i+1]));
    
  }
  else if(contar == 2){
    
  }
  else{
    listaResultado2.push(listaResultado[i]);
  }
  if (contar < 3){
    contar++;
  }
  else{
    contar = 1;
  }
}

//ADD soma e subtração.
contar = 1;
for (let i=0; i < listaResultado2.length; i++){
  if (i==0){
    
    listaResultado3.push(parseInt(listaResultado2[i]));
    listaResultado3.push(parseInt(listaResultado2[i+1]));
    i++;
    
  }
  else if(contar == 2){
    listaResultado3.push(listaResultado2[i]*(-1));
  }
  else{
    listaResultado3.push(listaResultado2[i]);
  }
  if (contar < 2){
    contar++;
  }
  else{
    contar = 1;
  }
}

if (lista.length > 3){
  

  for (let i=0; i < listaResultado3.length; i++){
    resultado += listaResultado3[i];
    
  }
}

else if(lista.length==3){
  for (let i=0; i < listaResultado2.length; i++){
    resultado += listaResultado2[i];
    
  }
}
else if(lista.length==2){
  for (let i=0; i < listaResultado2.length; i++){
    resultado += listaResultado2[i];
    
  }
}
else if(lista.length==1){
 
    resultado += lista[0];
    
}

console.log(resultado);