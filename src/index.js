

module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBracket = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
  const bracketsPar = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',

  
  };


  let stack = [];


  for (let i = 0; i < str.length; i++ ){ 
  let currentSymbol = str[i];

  if(openBracket.includes(currentSymbol)) {
    stack.push(currentSymbol);
  }
  else {
if(stack.length === 0) {
  return false;
}

let topElement = stack[stack.length - 1];

if (bracketsPar[currentSymbol] === topElement && stack.length > 0 ) {
  stack.pop();
}
else {
  return false
}
  }
}

return stack.length === 0;
}


