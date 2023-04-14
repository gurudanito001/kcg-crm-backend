'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      // await queryInterface.createTable('users', { id: Sequelize.INTEGER });
      await queryInterface.addColumn(
        'Customer', // table name
        'isApproved', // new field name
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      )
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
