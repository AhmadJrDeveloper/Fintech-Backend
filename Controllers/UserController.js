// RoleController.js
import { db } from "../Models/index.js";

const User = db.Users;



// 1. Create new user
const addUser = async (req, res) => {
    let info = {
        username: req.body.name,
        email:req.body.email,
        password: req.body.password,
        role_id: req.body.role_id
    };

    try {
        const user = await User.create(info);
        res.status(200).send(user);
    } catch (error) {
        console.error("Error creating role:", error);
        res.status(500).send("Internal Server Error");
    }
};



// 2. get all roles
const getUser = async (req, res) => {
    console.log("alla ma3o")
    let user = await User.findAll({});
    res.status(200).send(user);
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
    addUser,
    getUser ,
    getOneRole,
    updateRole,
    deleteRole
};
