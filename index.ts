import Server from "./classes/server";
import {router} from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';


const server = Server.instance;


//BODY

server.app.use(bodyParser.urlencoded({extended: true}));


server.app.use(cors({origin: true, credentials: true}));
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corrienco por el puerto ${server.port}`)
})

//export  default
