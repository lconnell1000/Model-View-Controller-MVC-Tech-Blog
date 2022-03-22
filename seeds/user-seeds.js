const { User } = require('../models');

const userData = [
    {
        username: "lconnell1000",
        twitter: "lconnell1000",
        github: "lconnell1000",
        email: "lconnell1000@gmail.com",
        password: "hello101"
    },
    {
        username: "mattdsena",
        twitter: "mattdsena",
        github: "mattdsena",
        email: "mattdsena@gmail.com",
        password: "hello102"
    },
    {
        username: "claymcintosh",
        twitter: "claymcintosh",
        github: "claymcintosh",
        email: "claymcintosh@gmail.com",
        password: "hello103"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;