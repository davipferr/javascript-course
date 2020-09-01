const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = [...primeiro,'%',...segundo];
console.log(combinado);

const clonado = [...combinado];
console.log(clonado);