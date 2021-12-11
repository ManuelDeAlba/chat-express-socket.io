const socket = io();
        
const mensajes = document.querySelector(".mensajes");
const formulario = document.querySelector("#formulario");
const inpMensaje = document.querySelector("#inpMensaje");

let nombre = prompt("Ingresa tu nombre:");

document.querySelector('.titulo').textContent = `Usuario: ${nombre}`;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpMensaje.value.trim()){
        socket.emit("message", { id: socket.id, usuario: nombre, mensaje: inpMensaje.value });
        inpMensaje.value = "";
    }
})

socket.on("message", ({id, usuario, mensaje}) => {
    mensajes.innerHTML += `<div class="mensaje ${id == socket.id ? "derecha" : "izquierda"}"><b>${usuario}:</b> ${mensaje}</div>`;

    mensajes.scrollTop = mensajes.scrollHeight;
})