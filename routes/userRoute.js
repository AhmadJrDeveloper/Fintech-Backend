// RoleRoute.js
import {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    login
} from '../Controllers/UserController.js';
import { Router } from 'express';

const router = Router();

router.post('/user', addUser);
router.get('/user', getAllUser);
router.get('/user/:id', getOneUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/login', login);



export default router;
