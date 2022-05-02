import { Router } from 'express';
import { create, update, profile} from '../controllers/userController';

const router = new Router();

router.post('/', create);
router.put('/:idUser', update);
router.get('/profile/:idUser', profile);

export default router;