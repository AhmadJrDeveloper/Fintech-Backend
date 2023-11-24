import {
    addRole,
    getAllRoles,
    getOneRole,
    updateRole,
    deleteRole
} from '../Controllers/RoleController.js';
import { Router } from 'express';

const router = Router();

router.post('/role', addRole);
router.get('/role', getAllRoles);
router.get('/role/:id', getOneRole);
router.patch('/role/:id', updateRole);
router.delete('/role/:id', deleteRole);

export default router;
