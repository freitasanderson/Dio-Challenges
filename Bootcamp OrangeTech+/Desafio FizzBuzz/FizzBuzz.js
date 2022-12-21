function fizzBuzz(resultado){
  
    if ((resultado % 3 == 0) && (resultado % 5 == 0)){
      return('FizzBuzz');
    }
    else if ((resultado % 3 == 0) && (resultado % 5 != 0)){
      return('Fizz');
    }
    else if ((resultado % 3 != 0) && (resultado % 5 == 0)){
      return('Buzz');
    }
    else{
      return(resultado);
    }
  }
  
  let resultado = gets();
  print(fizzBuzz(resultado));
  