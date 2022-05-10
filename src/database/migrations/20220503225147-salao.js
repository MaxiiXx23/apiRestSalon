module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('salao', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fotoPerfil: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      banner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salao');

  }
};
