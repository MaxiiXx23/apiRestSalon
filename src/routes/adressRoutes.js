import { Router } from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { create, update, deleteAdress } from '../controllers/adressController';
const router = new Router();

router.post('/:idSalon', tokenMiddleware, create);
router.put('/:idSalon', tokenMiddleware, update);
router.delete('/delete/:idAdress', tokenMiddleware, deleteAdress);

export default router;