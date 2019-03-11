import Server from "./classes/server";
import {router} from "./routes/router";
import  bodyParser from "body-parser";

const server = new Server();


//BODY

server.app.use (bodyParser.urlencoded({extended:true}));
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corrienco por el puerto ${server.port}`)
})

//export  default
