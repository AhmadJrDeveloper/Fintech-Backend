// RoleRoute.js
import {
    addCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany
} from '../Controllers/CompanyController.js';
import { Router } from 'express';

const router = Router();

router.post('/company', addCompany);
router.get('/company', getAllCompanies);
router.get('/company/:id', getOneCompany);
router.patch('/company:id', updateCompany);
router.delete('/company/:id', deleteCompany);

export default router;
