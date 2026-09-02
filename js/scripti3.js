let nome = prompt("Digite o seu nome: "); //String
let nasc = Number(prompt("Digite o seu ano de nascimento: "));
 //nasc = Number(nasc)
let viva = confirm("Clique em ok se estiver viva. Caso contrario cancelar");//Boolen
let altura = prompt("Digite o sua altura: ");
altura = Number(altura); 
let sexo = prompt("Digite o seu sexo: ");
let peso = prompt("Digite o seu peso: ");
peso = Number(peso);
let imc = "peso"*10; //Nan (Not a Number) - Valor invalido

console.log("nome", typeof(nome));
console.log("nasc", typeof(nasc));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));

alert`Nome: ${nome}\nAno de Nascimento:${nasc}\nViva:${viva}`;
msg =  msg +`\nAltura: ${al}\nSexo: ${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC ${imc.toFixed(2)}`;

alert(msg);
