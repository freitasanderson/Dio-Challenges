let arr = gets().split(''); 
let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

for (let i=0;i<arr.length;i++){
  if (arr[i] % 2 === 0){
    arrVazio.unshift(arr[i])
  }
  else{
    arrVazio.push(arr[i])
  }
}

print(arrVazio)