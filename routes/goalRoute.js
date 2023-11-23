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

router.post('/addGoal', addGoal);
router.get('/getAllGoals', getAllGoals);
router.get('/:id', getOneGoal);
router.patch('/:id', updateGoal);
router.delete('/:id', deleteGoal);

export default router;
