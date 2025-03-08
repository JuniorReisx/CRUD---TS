import { Router } from "express";
import { getAllUsers } from "../controllers/User/getAllUsers.controller";
import { createUser } from "../controllers/User/createUser.controller";
import { updateUser } from "../controllers/User/updateUser.controller";
import { deleteUser } from "../controllers/User/deleteUser.controller";

const routesUser = Router();


routesUser.get("/", getAllUsers);
routesUser.post("/", createUser);
routesUser.put("/:id", updateUser);
routesUser.delete("/:id", deleteUser);

export default routesUser;

