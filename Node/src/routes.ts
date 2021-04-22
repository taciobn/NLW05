import { request, response, Router } from "express";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { MessagesController } from "./controller/MessagesController";



const routes = Router();

/**
 * Tipos de parametros
 * 
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas 
 * Body params => {}
 */


const settingsController = new SettingsController();
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
export {routes};