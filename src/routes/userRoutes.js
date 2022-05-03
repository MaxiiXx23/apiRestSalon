import { Router } from 'express';
import { create, update, profile} from '../controllers/userController';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = new Router();

router.post('/', create);
router.put('/:idUser',tokenMiddleware, update);
router.get('/profile/:idUser', tokenMiddleware, profile);

export default router;