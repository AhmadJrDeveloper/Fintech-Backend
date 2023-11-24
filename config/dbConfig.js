// dbConfig.js
export const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "finance",
    PORT: 3307,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
