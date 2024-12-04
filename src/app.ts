import express,{json} from "express";
import router from "./routes";
import cors from "cors";//precisa instalar a tipagem dele
//funcão para criar e comunicar o app

function createApp(){
    const app = express()

    //VAMOS UTILIZAR MIDDLES
    //isto define que será json
    app.use(json());
    app.use(cors());//para quem consumir o navegador fale que é uma api confiavel
    app.use("/api",router);
    
//ou
//aqui é permitir quem ou quais metodos podem ser acessados
/* 
const corsOptions={
    origin:['http://felipao.sistem.com'],
    methods:["GET"],
}
app.use(cors(corsOptions));

    return app;
}

*/

}
export default createApp;

