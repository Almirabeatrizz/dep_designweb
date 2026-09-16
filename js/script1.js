function saudacao_a(){
    alert(`Ola Fulano, seja bem-vindo!`);
}

function saudacao_b(){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

function saudacao_c(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem vindo!`);
}

function saudacao_d(nome="Desconhecido"){
    return `Olá ${nome}, seja bem-vindo!`;
}

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_a();
});

const btn_b = document.getElementById("btn_b");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("Digite seu nome: ");
    saudacao_b(nome);
});

const btn_cp = document.getElementById("btn_cp");
btn_cp.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_c();
});

const btn_cn = document.getElementById("btn_cn");
btn_cn.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("Digite seu nome: ");
    saudacao_cn(nome);
});

const btn_dp = document.getElementById("btn_dp");
btn_dp.addEventListener("click", function(e){
    e.preventDefault();
    alert(saudacao_d());
});

const btn_dn = document.getElementById("btn_dn");
btn_dn.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("Digite seu nome: ");
    alert(saudacao_d(nome));
});



