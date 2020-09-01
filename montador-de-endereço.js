

let endereco = {
        rua: 'a',
        cidade: 'b',
        cep: 'c',
};

function exibirEndereco(endereco){
    for( let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);

