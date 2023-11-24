// RoleRoute.js
import {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser
} from '../Controllers/UserController.js';
import { Router } from 'express';

const router = Router();

router.post('/user', addUser);
router.get('/user', getAllUser);
router.get('/user/:id', getOneUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);



export default router;
