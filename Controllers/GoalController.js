// GoalController.js
import { db } from "../Models/index.js";

const Goal = db.Goals;



// 1. Create new goal
const addGoal = async (req, res) => {
    let info = {
        name: req.body.name,
        target:req.body.target,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        type:req.body.type
    };
    
    try {
        if (!['weekly', 'monthly', 'yearly'].includes(req.body.type)) {
            return res.status(400).json({ error: 'Invalid goal value' });
          }
      
        const goal = await Goal.create(info);
        res.status(200).send(goal);
    } catch (error) {
        console.error("Error creating goal:", error);
        res.status(500).send(error.message);
    }
};



// 2. get all goals
const getAllGoals = async (req, res) => {
    console.log("alla ma3o")
    let goals = await Goal.findAll({});
    res.status(200).send(goals);
}

// 3. get single goal
const getOneGoal = async (req, res) => {
    let id = req.params.id;
    let goal = await Goal.findOne({ where: { id: id } });
    res.status(200).send(goal);
}

// 4. update goal
const updateGoal = async (req, res) => {
    if (!['weekly', 'montly', 'yearly'].includes(req.body.type)) {
        return res.status(400).json({ error: 'Invalid goal value' });
      }
    let id = req.params.id;
    const goal = await Goal.update(req.body, { where: { id: id } });
    res.status(200).send(goal);
}

// 5. delete goal
const deleteGoal = async (req, res) => {
    let id = req.params.id;
    await Goal.destroy({ where: { id: id } });
    res.status(200).send('goal deleted');
}

export {
    addGoal,
    getAllGoals,
    getOneGoal,
    updateGoal,
    deleteGoal
};
