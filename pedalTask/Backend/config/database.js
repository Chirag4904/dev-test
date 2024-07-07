const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(
	"postgres://default:AzbKH9qUaYJ2@ep-yellow-bird-a1ubngln.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
	{
		dialect: pg,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	}
);

module.exports = sequelize;
