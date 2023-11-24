// ../Models/index.js
import { dbConfig } from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import { createRoleModel } from './RoleModel.js';
import { createGoalModel } from './GoalModel.js';
import { createUserModel } from './UserModel.js';
import { createCategoryModel } from "./CategoryModel.js";
import { createCompanyModel } from "./CompanyModel.js";


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("connected to the database");
    })
    .catch(error => {
        console.error("error connecting: " + error);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Roles = createRoleModel(sequelize, DataTypes);
db.Goals = createGoalModel(sequelize, DataTypes);
db.Users = createUserModel(sequelize, DataTypes);
db.Categories = createCategoryModel(sequelize, DataTypes);
db.Companies = createCompanyModel(sequelize, DataTypes);



db.Roles.hasMany = (db.Users,{
    foreignKey:"role_id",
    as:"user"
})

db.Users.belongTo = (db.Roles,{
    foreignKey:"role_id"
    ,as:"role"
})




db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database synchronization done!");
    });

export { db };
