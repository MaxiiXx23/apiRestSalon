import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export class User extends Model {
    static init(sequelize) {
        super.init({
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email must be unique.'
                },
                validate: {
                    isEmail: {
                        msg: 'Email is invalid.'
                    }
                }
            },
            senha: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            foto: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 150],
                        msg: 'Name is invalid.'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 200],
                        msg: 'Lastname is invalid.'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Age is invalid.'
                    }
                }
            },
            senhaVirtual: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 30],
                        msg: 'Invalid password, must contain between 6 to 30 characters.'
                    }

                }
            }
        },
            {
                sequelize,
                tableName:'usuario'
            });
        this.addHook('beforeSave', async usuario => {
            if(usuario.senhaVirtual) {
                usuario.senha = await bcryptjs.hash(usuario.senhaVirtual, 8);
            }
        })
        return this;
    }
    passwordCompare(password){
        return bcryptjs.compare(password, this.senha);
    }
}