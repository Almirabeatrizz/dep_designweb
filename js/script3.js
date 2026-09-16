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

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_a
});