require('dotenv').load();
const Sequelize = require("sequelize");

module.exports = () => {
		sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
		host: 'localhost',
		dialect: 'postgres',
		port: 5432,
		protocol: null,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	});

	sequelize
	.authenticate()
	.then(() => {
		console.log('Success');
	})
	.catch(err => {
		console.error('Unable to connect:', err);
	});

	//Defining the models for the database
	const User = sequelize.define('users', {
		firstname: { type: Sequelize.STRING },
		lastname: { type: Sequelize.STRING },
		email: { type: Sequelize.STRING },
		username: { type: Sequelize.STRING },
		password: { type: Sequelize.STRING }
	});

	const Item = sequelize.define('items', {
		itemName: { type: Sequelize.STRING },
	});
	  	
	const Tag = sequelize.define('tags', {
		tagName: { type: Sequelize.STRING }
	});

	// Force creating the tables in the database (Replaces existing tables)
	// User.sync({ force: true })
	// Item.sync({ force: true })
	// Tag.sync({ force: true })

	//Associations between tables
	User.hasMany(Item)
	Item.belongsTo(User)
	User.hasMany(Tag)
	Tag.belongsTo(User)
	Item.hasMany(Tag)
	Tag.belongsTo(Item)

	// Used to initialize the associations between the tables
	// const sync = ()=>{
	// 	return sequelize.sync({force: true})
	// }
	// sync()

	db = {}		
	db.Sequelize = sequelize
	db.User = User
	db.Item = Item
	db.Tag = Tag
}