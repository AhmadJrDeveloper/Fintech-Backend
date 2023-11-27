import { STRING } from "sequelize";

// GoalModel.js
export const createTransactionModel = (sequelize, DataTypes) => {
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
        date: { 
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Users',
                key: 'id',
                as:'user_id'
           }
        },
        category_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Categories',
                key: 'id',
                as:'category_id'
          }
        },

        transaction_type: {
            type: DataTypes.BOOLEAN,
            allowNull: false ,  
        },
    },
     {
        timestamps: false
    });
    return Transaction;
};
