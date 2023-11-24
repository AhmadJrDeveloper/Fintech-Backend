// UserController.js
import { db } from "../Models/index.js";
const Transaction = db.Transactions;



const addTransaction= async (req, res) => {
    let info = {
        amount: req.body.amount,
        data: req.body.data,
        description: req.body.description,
        user_id: req.body.user_id,
        category_id: req.body.category_id,
        transaction_type: req.body.transaction_type
    };
    
    try {
        const transaction = await Transaction.create(info)
        res.status(200).send(transaction)
        }

        catch (error) {
            console.error("Error creating Transaction:", error);
            res.status(500).send("Internal Server Error");
        }   
    };    



// 2. get all Users
const getAllTransaction = async (req, res) => {
    try {
        // Fetch all users
        let transactions = await Transaction.findAll({});

        // Check if there are no users
        if (transactions.length === 0) {
            res.status(404).send({ message: "No users in the database" });
            return;
        }

        res.status(200).send(transactions);
    } catch (error) {
        console.error("Error fetching transaction:", error);
        res.status(500).send(error.message);
    }
};


// 3. get single User
const getOneTransaction= async (req, res) => {
    let id = req.params.id;
    let transaction = await Transaction.findOne({ where: { id: id } });
    res.status(200).send(transaction);
}

// 4. update User
const updateTransaction = async (req, res) => {
    let id = req.params.id;
    const transaction = await Transaction.update(req.body, { where: { id: id } });
    res.status(200).send(transaction);
}

// 5. delete User
const deleteTransaction = async (req, res) => {
    let id = req.params.id;
    await Transaction.destroy({ where: { id: id } });
    res.status(200).send('User deleted');
}

export {
    addTransaction,
    getAllTransaction,
    getOneTransaction,
    updateTransaction,
    deleteTransaction
};
