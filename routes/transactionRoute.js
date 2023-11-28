// RoleRoute.js
import {
    addTransaction,
    getAllTransaction,
    getOneTransaction,
    updateTransaction,
    deleteTransaction
} from '../Controllers/TransactionController.js';
import { Router } from 'express';
import { verifyAccountant, verifyToken } from '../middelware/auth.js';
const router = Router();

router.post('/transaction', verifyAccountant,addTransaction);
router.get('/transaction',verifyToken, getAllTransaction);
router.get('/transaction/:id',verifyToken, getOneTransaction);
router.patch('/transaction/:id',verifyAccountant, updateTransaction);
router.delete('/transaction/:id', verifyAccountant,deleteTransaction);



export default router;
