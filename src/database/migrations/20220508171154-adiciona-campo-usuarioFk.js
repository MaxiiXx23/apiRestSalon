module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('salao','usuarioFk', 
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:'usuario',
        key: 'id',
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('salao','usuarioFk');
  }
};
