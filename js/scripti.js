//Declaro a variável (crio) e atribuo nome
var nome = "Almira"
//Declaro a variável (crio) e atribuo nasc
let nasc = 2007;
//Declaro a variável (crio) e atribuo viva
const viva = confirm ("Clique em ok, se estiver viva")

//Declaro a variável altura;
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da funcao: ${idade}`);
    let menor;
    if (idade < 18){
        let menor = true;
    }else{
        let menor = false;
    }
    return [idade, menor];
}
let retorno = calcIdade()
if (retorno [1]){
    alert(`idade: ${retorno[0]}. Voce é menor de idade`);
}else{
    alert(`Idade: ${retorno[0]}. Voce é maior de idade`);
}


alert(`Idade fora da funcao: ${calcIdade()}`);
/*
Da erro pois idade nao existe fora do escopo dela (bloco calcIdade)
console.log(`idade fora da funcao: ${idade}`)
*/

if(viva){
    //Atribui valor em viva 
    altura = prompt("Digite a sua altura");
}

