// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


//Funcion agrgar al amigo
function agregarAmigos(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === ""){
        alert('Porfavor escribe un nombre');
        return;
    }
    
    
    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();

}

function actualizarLista(){
    const listAmigo = document.getElementById("listaAmigos");
    listAmigo.innerHTML = "";

    amigos.forEach( amigo =>{
        const li = document.createElement("li");
        li.textContent = amigo;
        listAmigo.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear. Agrega alguno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resulta = document.getElementById("resultado");
    resulta.innerHTML = `<li>${amigoSorteado}</li>`;

}   

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
    document.querySelector("#btnAdicionar").addEventListener("click", agregarAmigos);
});
