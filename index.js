const express = require("express");
const socketIO = require("socket.io");

const app = express();

app.set("PORT", process.env.PORT || 3000);

app.use(express.static("public"));

let servidor = app.listen(app.get("PORT"), () => {
    console.log("Servidor en el puerto", app.get("PORT"));
})

const io = socketIO(servidor);

io.on("connection", socket => {
    console.log("Conexión:", socket.id);
    
    socket.on("message", data => {
        io.emit("message", data);
    })
})