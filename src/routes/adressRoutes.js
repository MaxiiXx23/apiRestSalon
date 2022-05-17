import { Router } from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { create } from '../controllers/adressController';
const router = new Router();

router.post('/', tokenMiddleware, create );

export default router;