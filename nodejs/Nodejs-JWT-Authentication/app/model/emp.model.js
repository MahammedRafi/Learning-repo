module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define('employees', {
      id :{
          type:Sequelize.INTEGER,
          primaryKey: true
      },
	  name: {
		  type: Sequelize.STRING
	  },
	  username: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  }
	});
	
	return Employee;
}