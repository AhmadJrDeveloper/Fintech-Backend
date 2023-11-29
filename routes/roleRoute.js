import {
    addRole,
    getAllRoles,
    getOneRole,
    updateRole,
    deleteRole
} from '../Controllers/RoleController.js';
import { Router } from 'express';
import { verifyToken ,verifyadmin } from '../middelware/auth.js';
const router = Router();

router.post('/role',verifyToken, addRole);
router.get('/role',verifyadmin, getAllRoles);
router.get('/role/:id',verifyToken, getOneRole);
router.patch('/role/:id',verifyadmin, updateRole);
router.delete('/role/:id',verifyadmin, deleteRole);

export default router;
