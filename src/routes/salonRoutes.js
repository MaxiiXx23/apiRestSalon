import { Router } from "express";
import { update } from "../controllers/salonController";
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = new Router();

router.put ('/updateSalon/:idSalon', tokenMiddleware, update);


export default router;