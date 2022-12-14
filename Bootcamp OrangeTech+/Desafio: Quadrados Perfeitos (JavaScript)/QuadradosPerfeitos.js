let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.
let i = 2;
let div = 0
while (n > 1){
  
  if (n % i === 0){
    n = n / i;
    div++;
  }
  else{
    i++
  }
}
if (div === 1){
  div++;
}
print(div);