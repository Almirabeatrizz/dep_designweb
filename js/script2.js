let saudacao_a = () =>{
    alert(`Ola Fulano, seja bem-vindo!`);
}

let saudacao_b = (nome) => {
    alert(`Olá ${nome}, seja bem-vindo!`);
}

let saudacao_c = (nome="Desconhecido") =>{
    alert(`Olá ${nome}, seja bem vindo!`);
}

let saudacao_d = (nome="Desconhecido") =>{
    return `Olá ${nome}, seja bem-vindo!`;
}