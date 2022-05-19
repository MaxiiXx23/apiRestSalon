import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';
export class Salon extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 150],
                        msg: 'Invalid salon name.'
                    }
                }
            },
            fotoPerfil: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            banner: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            avaliacao: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Avaliacao must be float.'
                    }
                }
            },
            profileVirtual: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'profileVirtual is empty.'
                    }
                }
            }


        },
            { sequelize, tableName: 'salao' });



        return this;
    }
    static associate(models) {
        this.hasMany(models.Adress,
            {
                foreignKey: 'salaoFk',
                
            })
    }

}