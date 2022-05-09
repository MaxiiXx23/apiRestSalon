import Sequelize from 'sequelize';
import databaseConfig from '../config/databaseConfig';

import { User } from '../models/User';
import { Salon } from '../models/Salon';

const models = [User, Salon];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection))

