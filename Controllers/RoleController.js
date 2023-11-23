// RoleController.js
import { db } from "../Models/index.js";

const Role = db.Roles;



// 1. Create new role
const addRole = async (req, res) => {
    let info = {
        name: req.body.name
    };

    try {
        const role = await Role.create(info);
        res.status(200).send(role);
    } catch (error) {
        console.error("Error creating role:", error);
        res.status(500).send("Internal Server Error");
    }
};



// 2. get all roles
const getAllRoles = async (req, res) => {
    console.log("alla ma3o")
    let roless = await Role.findAll({});
    res.status(200).send(roless);
}

// 3. get single role
const getOneRole = async (req, res) => {
    let id = req.params.id;
    let role = await Role.findOne({ where: { id: id } });
    res.status(200).send(role);
}

// 4. update role
const updateRole = async (req, res) => {
    let id = req.params.id;
    const role = await Role.update(req.body, { where: { id: id } });
    res.status(200).send(role);
}

// 5. delete role
const deleteRole = async (req, res) => {
    let id = req.params.id;
    await Role.destroy({ where: { id: id } });
    res.status(200).send('role deleted');
}

export {
    addRole,
    getAllRoles,
    getOneRole,
    updateRole,
    deleteRole
};
