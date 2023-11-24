// CategoryModel.js
export const createCategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define("Categories", {
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
    return Category;
};
