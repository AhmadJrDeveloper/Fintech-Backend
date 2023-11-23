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
router.get('/:id', getOneCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCateogry);

export default router;
