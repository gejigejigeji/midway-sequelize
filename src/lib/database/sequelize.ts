import {Sequelize} from 'sequelize-typescript';
import {User} from '../models/users/User';
import {Post} from '../models/posts/Post';
import {config} from "../../config/sequelize";

export const sequelize =  new Sequelize({
    database: 'test',
    dialect: 'mysql',
    username: 'root',
    password: '0',
    storage: ':memory:',
    // models: [`${__dirname}/lib/models`],
    define:config
});
sequelize.addModels([Post, User]);