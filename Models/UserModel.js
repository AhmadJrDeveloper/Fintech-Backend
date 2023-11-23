export const createRoleModel = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Roles', // This is the name of the referenced table
                key: 'id'       // This is the name of the referenced column in the Roles table
            }
        }
    }, {
        timestamps: false
    });

    User.associate = (models) => {
        User.belongsTo(models.Roles, { foreignKey: 'role_id' });
    };

    return User;
};
