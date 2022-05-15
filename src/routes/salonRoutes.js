import { Router } from "express";
import { profile, update } from "../controllers/salonController";
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = new Router();

router.get('/profile/:idSalon', tokenMiddleware, profile);
router.put ('/updateSalon/:idSalon', tokenMiddleware, update);


export default router;