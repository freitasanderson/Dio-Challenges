let resultado = gets();

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function reverseString(str) {
    return str.split("").reverse().join("");
}
function checaPalindromo(entrada){
  reverse = reverseString(entrada)
  
  return (reverse === entrada)
}


let res = (checaPalindromo(resultado));
if (res === true){
  console.log('TRUE')
}
else{
  console.log('FALSE')
}