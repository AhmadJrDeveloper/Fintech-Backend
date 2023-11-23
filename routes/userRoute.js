// RoleRoute.js
import {
    addUser,
    getUser
} from '../Controllers/UserController.js';
import { Router } from 'express';

const router = Router();

router.post('/addUser', addUser);
router.get('/getUser', getUser);


export default router;
