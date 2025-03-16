// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    let error = validarValorInput(amigo);

    if (validarValorInput(amigo)){
        alert(error);
    } else if (amigos.includes(amigo)) {
        alert("Este amigo ya fue agregado.");
    }    
    else {
        amigos.push(amigo);
        document.getElementById("amigo").value = '';
        actualizarListaAmigos();
    }
    console.log(amigos);
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, agregue un amigo antes de sortear.");
        return;
        
    } else if (amigos.length > 0) {
        let random = Math.floor(Math.random() * amigos.length);
        console.log(random);
        console.log(amigos[random]);
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigos[random]}`;
        document.getElementById("listaAmigos").innerHTML = '';
        amigos = [];
    }
}

// Función para validar el valor del input
function validarValorInput(string) {
    if (string == '') {
        return "Por favor, inserte un nombre."
    }
}