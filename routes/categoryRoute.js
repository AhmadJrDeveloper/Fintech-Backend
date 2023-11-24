// RoleRoute.js
import {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCateogry
} from '../Controllers/CategoryController.js';
import { Router } from 'express';

const router = Router();

router.post('/category', addCategory);
router.get('/category', getAllCategories);
router.get('/category/:id', getOneCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCateogry);

export default router;
