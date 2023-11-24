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
router.get('/:id', getOneCompany);
router.patch('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;
