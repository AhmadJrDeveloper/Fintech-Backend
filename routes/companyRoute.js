// RoleRoute.js
import {
    addCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany
} from '../Controllers/CompanyController.js';
import { Router } from 'express';
import { verifyadmin ,verifyToken} from '../middelware/auth.js';

const router = Router();

router.post('/company',verifyadmin, addCompany);
router.get('/company',verifyToken, getAllCompanies);
router.get('/company/:id',verifyToken, getOneCompany);
router.patch('/company:id', verifyadmin,updateCompany);
router.delete('/company/:id', verifyadmin,deleteCompany);

export default router;
