// let idade = 5;
// console.log(idade);



// let idade = 17;    
// console.log(idade);
// let altura = 160;
// console.log(altura);
// let nome = 'Davi Pinto Ferreira';    
// console.log(nome);



// let familia = [26, 40, 56, 45];  ARRAYS
// console.log(familia.length);
// console.log(familia[0]);
// let nomeDoColega = ['Fabio'];
// console.log(nomeDoColega[0]);



//  let a = 'vermelho';   TROCANDO VALOR (PROJETO)
//  let b = 'Azul';

// let c = a;
// a = b;
// b = c;

//  console.log(a);
//  console.log(b);



// let valorMaior = maior(1, 11);   MAIOR NUMERO (PROJETO)
// console.log(valorMaior);

// function maior(valor1, valor2){
//     return valor1>valor2 ? valor1:valor2 ;
// }



// const resultado = fizzBuzz(15);      FIZZBUZZ (MINI-PROJETO)
// console.log(resultado);

// function fizzBuzz(entrada){
    
//     if(typeof entrada !== 'number'){
//         return 'Não é um numero';
//     }
    
//     else if(entrada %3 === 0 && entrada %5 === 0){
//         return 'FizzBuzz';
//     }

//     else if(entrada %3 === 0){
//         return 'Fizz';    
//     }

//     else if(entrada %5 === 0){
//         return 'Buzz';
//     }

//     else{
//         return entrada;
//     }
    
// }

// verificarVelocidade(130);  VELOCIDADE MAXIMA (MINI-PROJETO)


// function verificarVelocidade(velocidade){
//     const velocidadeMaxima = 70;
//     const kmPorPonto = 5;

//     if(velocidade <= velocidadeMaxima){
//         console.log('ok');
//     }

//     else{
//         const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
//         if (pontos >= 12)
//             console.log('Carteira Suspendida');
        
//         else
//             console.log('Pontos', pontos); 
        
//     }
    
// }


// exibirTipo(5);       PAR OU IMPAR (MINI-PROJETO)

// function exibirTipo(limite){

//     for ( let i=0; i <= limite; i++ ){
//             if (i % 2 === 0 )
//                 console.log(i,'PAR');

//             else
//                 console.log(i,'IMPAR');
//     }

// }



// function criarComputador(marcaComputador, tamanhoTela,){             FACTORY FUNCTION
//         return {
//             marcaComputador,
//             tamanhoTela,
//             comprar() {
//                 console.log('Seu PC está a caminho');
//             }
//         }

// }
// const computador = criarComputador('Asus',16.9);
// console.log(computador);



// const date1 = new Date();     DATE
// const date2 = new Date('Agust 27 08 2020 08:45');
// const date3 = new Date(2020,07,27,8,45);

// date3.setFullYear(2030);



