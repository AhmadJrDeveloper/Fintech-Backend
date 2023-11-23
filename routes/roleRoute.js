import {
    addRole,
    getAllRoles,
    getOneRole,
    updateRole,
    deleteRole
} from '../Controllers/RoleController.js';
import { Router } from 'express';

const router = Router();

router.post('/addRole', addRole);
router.get('/getAllRoles', getAllRoles);
router.get('/:id', getOneRole);
router.patch('/:id', updateRole);
router.delete('/:id', deleteRole);

export default router;
