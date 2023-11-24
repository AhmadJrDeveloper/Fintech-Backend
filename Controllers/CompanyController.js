import { db } from "../Models/index.js";

const Company = db.Companies;
// 1. Create new company
const addCompany = async (req, res) => {
    let info = {
        name: req.body.name,
        phone_number: req.body.phone_number,
        capital: req.body.capital,
        balance: req.body.balance
    };

    try {
        const company = await Company.create(info);
        res.status(200).send(company);
    } catch (error) {
        console.error("Error creating role:", error);
        res.status(500).send(error.message);
    }
};
// 2. get all companies
const getAllCompanies = async (req, res) => {
    console.log("working")
    let companyy = await Company.findAll({});
    res.status(200).send(companyy);
}
// 3. get single company
const getOneCompany = async (req, res) => {
    let id = req.params.id;
    let company = await Company.findOne({ where: { id: id } });
    res.status(200).send(company);
}
// 4. update company
const updateCompany = async (req, res) => {
    let id = req.params.id;
    const company = await Company.update(req.body, { where: { id: id } });
    res.status(200).send(company);
}
// 5. delete company
const deleteCompany = async (req, res) => {
    let id = req.params.id;
    await Company.destroy({ where: { id: id } });
    res.status(200).send('deleted');
}
export {
    addCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany
};
