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
router.get('/:id', getOneRole);
router.patch('/:id', updateRole);
router.delete('/:id', deleteRole);

export default router;
