// UserController.js
import { db } from "../Models/index.js";
import bcrypt from 'bcrypt';
const User = db.Users;



const addUser = async (req, res) => {
    let info = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id
    };
    
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(info.password, 10);
        info.password = hashedPassword;
  
        const user = await User.create(info);
        res.status(200).send(user);
    } catch (error) {
        console.error("Error creating User:", error);
        res.status(500).send(error.message);
    }
  };    



// 2. get all Users
const getAllUser = async (req, res) => {
    try {
        // Fetch all users
        let users = await User.findAll({
             include: [
            { model: db.Roles, as: "role" }
            ],
        });

        // Check if there are no users
        if (users.length === 0) {
            res.status(404).send({ message: "No users in the database" });
            return;
        }

        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send(error.message);
    }
};


// 3. get single User
const getOneUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findOne({
        where: { id: id },
        include: [
            { model: db.Roles, as: "role" },
        ],
     });
    res.status(200).send(user);
}

// 4. update User
const updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } });
    res.status(200).send(user);
}

// 5. delete User
const deleteUser = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id: id } });
    res.status(200).send('User deleted');
}

export {
    addUser,
    getAllUser ,
    getOneUser,
    updateUser,
    deleteUser
};
