const numeros  = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();

//final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

//inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//meio 
const meio = numeros.splice(2,1);
console.log(meio);