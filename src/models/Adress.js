import Sequelize, { Model } from 'sequelize';

class Adress extends Model {
    static init(sequelize){
        super.init({
            rua:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args:[3,200],
                        msg: 'Rua is invalid.'
                    }
                }
            },
            numero: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt:{
                        msg: 'Numero is invalid.'
                    }
                }
            },
            cep:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args:[8],
                        msg: 'CEP is invalid.'
                    }
                }
            },
            cidade:{
                type: Sequelize.STRING,
                defaultValue:'',
                validate: {
                    len:{
                        args:[2,200],
                        msg: 'Cidade is invalid.'
                    }
                }
            },
            estado: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args:[2],
                        msg: 'Estado is invalid.'
                    }
                }
            },
            pais:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [2],

                    }
                }
            },
        
        }, 
        {sequelize, tableName:'endereco'})
        return this;
    }
}
export { Adress };