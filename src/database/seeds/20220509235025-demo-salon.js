
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('salao', [{
        nome: 'SalonMaxHair',
        fotoPerfil: 'http://localhost:3000/uploads/salon/profile/1652140410434_20829.jpg',
        avaliacao:'1.0',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('salao', null, {});

  }
};
