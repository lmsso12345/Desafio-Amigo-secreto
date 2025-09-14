let amigos = [];


function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}


function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong> 🎁</li>`;
}


function reiniciarSorteio() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}
