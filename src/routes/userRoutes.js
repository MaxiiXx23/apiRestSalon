import { Router } from 'express';
import { create } from '../controllers/userController';

const router = new Router();

router.post('/', create)

export default router;