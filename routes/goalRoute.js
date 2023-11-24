// GoalRoute.js
import {
    addGoal,
    getAllGoals,
    getOneGoal,
    updateGoal,
    deleteGoal
} from '../Controllers/GoalController.js';
import { Router } from 'express';

const router = Router();

router.post('/goal', addGoal);
router.get('/goal', getAllGoals);
router.get('/goal/:id', getOneGoal);
router.patch('/goal/:id', updateGoal);
router.delete('/goal/:id', deleteGoal);

export default router;
