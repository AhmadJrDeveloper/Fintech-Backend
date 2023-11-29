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
import {verifyadmin, verifyToken} from '../middelware/auth.js'

const router = Router();

router.post('/user',verifyadmin, addUser);
router.get('/user', verifyToken,getAllUser);
router.get('/user/:id',verifyToken, getOneUser);
router.patch('/user/:id',verifyadmin, updateUser);
router.delete('/user/:id',verifyadmin, deleteUser);
router.post('/login', login);



export default router;
