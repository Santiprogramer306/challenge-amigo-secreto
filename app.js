let listaAmigos = [];

// agregar un amigo
function agregarAmigo() {
  const amigosUsuario = document.getElementById("amigo");
  const valor = amigosUsuario.value.trim(); // .trim() quita espacios vacíos

  if (valor) {
    // agregar a la lista visual
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = valor;
    document.getElementById("listaAmigos").appendChild(nuevoLi);

    // agregar al array
    listaAmigos.push(valor);
    console.log(listaAmigos);

    amigosUsuario.value = ""; // limpiar input
  } else {
    alert("Por favor, inserte un nombre válido.");
  }
}

// sortear un amigo
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indice];

  alert("El amigo sorteado es: " + amigoSorteado);
}
