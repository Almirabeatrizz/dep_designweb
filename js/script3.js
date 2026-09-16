let saudacao_a = function(){
    alert(`Ola Fulano, seja bem-vindo!`);
}

let saudacao_b = function(nome){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

let saudacao_c = function(nome="Desconhecido"){
   alert(`Olá ${nome}, seja bem vindo!`);
}

let saudacao_d = function(nome="Desconhecido"){
    return `Olá ${nome}, seja bem-vindo!`;
}