import express from "express";
import { create, fetch,deleteUser, update } from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch)
route.post("/create",create)
route.put("/update/:id", update)
route.delete("/delete/:id",deleteUser)

export default route;