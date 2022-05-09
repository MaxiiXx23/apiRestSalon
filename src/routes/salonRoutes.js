import { Router } from "express";
import { create } from "../controllers/salonController";
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = new Router();

router.post ('/createSalon/:idUser', tokenMiddleware, create);


export default router;