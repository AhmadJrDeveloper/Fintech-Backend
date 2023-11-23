// GoalModel.js
export const createGoalModel = (sequelize, DataTypes) => {
    const Goal = sequelize.define("Goals", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        target:{type: DataTypes.INTEGER,
                allowNull: false
        },
        startDate:{type: DataTypes.DATEONLY,
                    allowNull: false
        },
        endDate:{type: DataTypes.DATEONLY,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('yearly', 'monthly', 'weekly'),
            allowNull: false,
        },



            
    }, {
        timestamps: false
    });
    return Goal;
};
