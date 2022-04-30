module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuario', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },


    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
