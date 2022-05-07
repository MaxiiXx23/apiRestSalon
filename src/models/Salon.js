import Sequelize, { Model } from 'sequelize';

export class Salon extends Model {
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [2,150],
                        msg:'Invalid salon name.'
                    }
                }
            },
            fotoPerfil:{
                type: Sequelize.STRING,
                defaultValue: '',
            },
            banner:{
                type: Sequelize.STRING,
                defaultValue: '',  
            },
            avaliacao:{
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat:{
                        msg: 'Avaliacao must be float.'
                    }
                }
            }
            
        }, 
            {sequelize, tableName: 'salao'})
    }
}