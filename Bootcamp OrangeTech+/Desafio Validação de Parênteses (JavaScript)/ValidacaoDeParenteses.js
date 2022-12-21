let stack = gets(); 

let i = 0;
if (stack[i] == '['){
  if (stack[i+1] == ']'){
    print(true);
  }
  else{
    print(false)
  }
}

else if (stack[i] == '{'){
  if (stack[i+1] == '}'){
    print(true);
  }
  else{
    print(false)
  }
}

else if (stack[i] == '('){
  if (stack[i+1] == ')'){
    print(true);
  }
  else{
    print(false)
  }
}
