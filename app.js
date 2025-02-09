//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeamigos = [];
let lista = document.getElementById("listaAmigos");
let inputNomeInserido = document.getElementById("amigo");
let resultado = document.getElementById("resultado");

// Adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = inputNomeInserido.value.trim(); // Remove espaços extras
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido");
        return;
    }
    if (listaDeamigos.includes(nomeAmigo)) {
        alert("Amigo já adicionado");
        return;
    }
    listaDeamigos.push(nomeAmigo);
    atualizarLista();
    inputNomeInserido.value = ""; // Limpa o campo de entrada
}

// Capturar o evento "Enter" no campo de entrada
inputNomeInserido.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
        event.preventDefault(); // Evita o comportamento padrão do Enter (submeter formulário)
    }
}
);

// Listar amigos na tela
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    listaDeamigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
    );
}

// Sortear um amigo secreto
function sortearAmigo() {
    if (listaDeamigos.length === 0) {
        alert("Antes de sortear, deve-se adicionar amigos");
        return;
    }
    if (listaDeamigos.length < 4) {
        alert("Adicione pelo menos quatro amigos para sortear");
        return;
    }
    let amigoSorteado = listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

// Limpar a lista
function limparLista() {
    listaDeamigos = [];
    atualizarLista();
    resultado.innerHTML = ""; 
}