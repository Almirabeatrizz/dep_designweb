const agenda = []
let atual = null;

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if(atual == null){
        let item = [nome.value, idade.value]
        let confirmacao = agenda.find(i =>i[0] == nome.value);
        if (confirmacao == false){
            //agenda.push(item); // Inclui no final
            agenda.unshift(item); // Inclui no inicio
            alert(`Amigo adicionado com sucesso!`);
        }else{
            alert(`Amigo já cadastrado!`);
        }
    }else{
        let item = agenda[atual]; //[Nome, Idade]
        item [0] = nome.value;
        item [1] = idade.value;
        atual = null;
    }
    listarAgenda();
    nome.value = "";
    idade.value = "";
});

function listarAgenda(){
    for(let i = 0; i<agenda.length; i++){
        let item = agenda[i]; //[Nome, Idade]
        let nome = item[0];
        let idade = Number (item[1]);
        let atualizar =`<button onclick="detalhar(${i});">Atualizar</button`;
        let remover = `<button onclick="remover(${i});">Remover</button`;
        itens = itens + `<li>Nome: ${nome} | Idade: ${idade} | ${atualizar} | ${remover}</li>`;
    }
    lista.innerHTML = itens; 
}

function detalhar(i){
    atual = i;
    let item = agenda[atual]; //[Nome, Idade]
    nome.value = item[0]; //Nome
    idade.value = item[1]; //Idade
}

function remover(i){
    atual = i;
    let item = agenda[i]; //[Nome, Idade]
    let confirmacao = confirm(`Deseja realmente excluir ${item[0]}`);
    if (confirmacao == true){
        agenda.splice(atual, 1);
    }
    atual = null;
    listarAgenda();
}