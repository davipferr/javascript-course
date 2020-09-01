let numeros = [1,2,3,4,5,6];
let outros = numeros;

//Solução 1
numeros.length = 0;
console.log(numeros);
console.log(outros);

//Soluçaõ 2
// numeros.splice(0, numeros.length);
// console.log(numeros);
// console.log(outros);

//Solução 3
// while (numeros.length > 0){
//     numeros.pop();   
// }


