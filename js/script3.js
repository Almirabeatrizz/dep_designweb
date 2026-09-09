let  nasc = prompt("Digite seu ano de nascimento: ");
 nasc = Number(nasc);

 idade = 2026 - nasc;

 let fds = confirm("Clique em ok se hoje é final de semana");

 alert(`Voce é maior de idade: ${idade >= 18}`);
 alert(`Hoje é final de semana: ${fds}`);

 if (idade >= 18 && fds){
    alert(`Pode beber`);
 }else if(idade <= 18 && fds){
        alert(`Nao pode beber, pois é menor de idade`);
}else if(idade <= 18 && !fds){
        alert(`Nao pode beber, pois não é final de semana`);
}else{
    alert(`Nao pode beber, pois é menor de idade e não é final de semana`);
}

