import { http} from "./http";
import "./websocket/client";

http.listen(3333, ()=>{console.log("Servers is running on port 3333");
});





/** 
* GET = Buscas
* POST = Criação
* PUT  = Alteração
* DELETE = Deletar
* PATCH = Alterar uma informação especifica
*/