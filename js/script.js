alert("oi do externo"); 

var num = parseFloat(prompt("Digite um valor"));
if (num % 2 == 0){
    alert ('${num} é par');
}else if (num %2 != 0){
    alert(`${num} é ímpar`);
}else{
    alert(`${num} é zero`);
}

alert("Fim");
