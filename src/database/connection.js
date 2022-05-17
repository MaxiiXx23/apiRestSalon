import Sequelize from 'sequelize';
import databaseConfig from '../config/databaseConfig';

import { User } from '../models/User';
import { Salon } from '../models/Salon';
import { Adress } from '../models/Adress';

const models = [User, Salon, Adress];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models))

