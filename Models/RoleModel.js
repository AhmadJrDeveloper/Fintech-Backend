// RoleModel.js
export const createRoleModel = (sequelize, DataTypes) => {
    const Role = sequelize.define("Roles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Role;
};
