let listaAmigos = [];


function agregarAmigo(){
// comando agregar amigos
    const amigosUsuario = document.getElementById("amigo");

    const valor = amigosUsuario.value;
   
    console.log(valor);

//comando lista
    const nuevoLi = document.createElement("li");

    nuevoLi.textContent = valor;

    const lista = document.getElementById("listaAmigos");

    lista.appendChild(nuevoLi);

        amigosUsuario.value = "";
    
    
    if (valor){

        listaAmigos.push(valor)

        console.log(listaAmigos)
    }
else if (isNaN){

alert("Por favor, inserte un nombre.")

}


}


