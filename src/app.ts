import {sequelize} from './lib/database/sequelize';
sequelize.sync({alter:true});
// sequelize.sync({force:true});
