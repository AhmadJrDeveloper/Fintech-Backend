// RoleRoute.js
import {
    addTransaction,
    getAllTransaction,
    getOneTransaction,
    updateTransaction,
    deleteTransaction
} from '../Controllers/TransactionController.js';
import { Router } from 'express';

const router = Router();

router.post('/transaction', addTransaction);
router.get('/transaction', getAllTransaction);
router.get('/transaction/:id', getOneTransaction);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);



export default router;
