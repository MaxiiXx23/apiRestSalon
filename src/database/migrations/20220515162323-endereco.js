module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('endereco', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pais:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      salaoFk:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'salao',
          key:'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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

    await queryInterface.dropTable('endereco');

  }
};
