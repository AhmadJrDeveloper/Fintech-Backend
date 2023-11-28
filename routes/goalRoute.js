// GoalRoute.js
import {
    addGoal,
    getAllGoals,
    getOneGoal,
    updateGoal,
    deleteGoal
} from '../Controllers/GoalController.js';
import { Router } from 'express';
import { verifyFinancialManager, verifyToken } from '../middelware/auth.js';

const router = Router();

router.post('/goal',verifyFinancialManager,  addGoal);
router.get('/goal',verifyToken, getAllGoals);
router.get('/goal/:id',verifyToken, getOneGoal);
router.patch('/goal/:id',verifyFinancialManager, updateGoal);
router.delete('/goal/:id',verifyFinancialManager, deleteGoal);

export default router;
