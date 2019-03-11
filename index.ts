import Server from "./classes/server";

const server = new Server();


server.start(() => {
    console.log(`Servidor corrienco por el puerto ${server.port}`)
})
