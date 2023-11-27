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
import {verifyToken} from '../middelware/auth.js'

const router = Router();

router.post('/user',verifyToken, addUser);
router.get('/user', verifyToken,getAllUser);
router.get('/user/:id',verifyToken, getOneUser);
router.patch('/user/:id',verifyToken, updateUser);
router.delete('/user/:id',verifyToken, deleteUser);
router.post('/login', login);



export default router;
