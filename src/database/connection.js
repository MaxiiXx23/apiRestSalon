import Sequelize from 'sequelize';
import databaseConfig from '../config/databaseConfig';

import { User } from '../models/User';
import { Salon } from '../models/Salon';
import { Endereco } from '../models/Endereco';

const models = [User, Salon, Endereco];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models))

