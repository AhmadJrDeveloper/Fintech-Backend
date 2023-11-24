import { STRING } from "sequelize";

// GoalModel.js
export const createGoalModel = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("Transactions", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data:{type: DataTypes.DATA,
                allowNull: false
        },
        description:{type: DataTypes.STRING,
                    allowNull: false
        },
        user_id:{type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.ENUM('yearly', 'monthly', 'weekly'),
            allowNull: false,
        },

        transaction_type: {
            type: DataTypes.BOOLEAN,
            allowNull: false    
        },
    },
     {
        timestamps: false
    });
    return Transaction;
};
