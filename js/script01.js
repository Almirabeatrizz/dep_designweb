//Processamento-Memória
let hoje = new Date();
//Entrada
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
//Saida
const msg = document.getElementById("msg");
//Evento
function saudacao(){
    let m ="";
    if (nome.value == undefined || nome.value.trim() == ""){
        m = `Ola, hoje é ${hoje.getDate()} /${hoje.getMonth()+1} / ${hoje.getFullYear()}!`
    }else{
        m = `Ola ${nome.value}, hoje é ${hoje.getDate()} /${hoje.getMonth()+1} / ${hoje.getFullYear()}!`
        let dt_nasc = new Date(nasc.value);
        let dif = 0;
        if (hoje > dt_nasc){
            dif = hoje - dt_nasc;
            m = m + `<br/>Falta ${dif/(100*60*60*24)} dias`
        }else{
            dif = dt_nasc - hoje;
            m = m + `<br/>Passou ${dif/(1000*60*60*24)} dias`
        }
    }
    msg.innerHTML = m;
}
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    saudacao()
})
