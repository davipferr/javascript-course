const filme = {
    titulo: 'Vingadores',
    ano: 2077,
    personagem: 'Thor',
    diretor: 'Robin'
}


exibirPropriedades(filme);
function exibirPropriedades(obj){
        for(prop in obj){
            if(typeof obj[prop] === 'string')
                console.log(prop, obj[prop]);
        }

}