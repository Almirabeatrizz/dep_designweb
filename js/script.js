//Declaro a constante viva como true 
const viva = confirm ("Clique em ok se voce esta viva");
//Crio um bloco de execucao que so é executado se viva igual a true 
if (viva){
    //Declaro a variavel nasc e atribuo a ela o valor digitado como int
    var nasc = parseFloat(prompt("Digite seu ano de nasciemento:"));
    //Declaro a variavel nome e atribuo a ela o valor digitado (padrao str)
    let nome = parseFloat(prompt("Digite seu nome: "));
    //Declaro a variavel altura e atribuo a ela o valor digitado como float
    let altura = parseFloat(prompt("Digite a sua altura em metros: "))
    //Atribuo o valor de idade igual ao resultado da expressao
    idade = 2026 - nasc;
    //Exibo msg com o nome digitado e a idade calculada 
    alert(`${nome} voce tem ${idade} anos`);
}else{
    //Exibo msg dizendo que a pessoa esta morta
    alert(`voce esta morta`);
}



