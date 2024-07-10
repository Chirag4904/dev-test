const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const dotEnv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
dotEnv.config();

const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
	res.send(200).json({ message: "Welcome" });
});
app.use("/api", taskRoutes);

sequelize
	.sync({ force: false })
	.then(() => {
		console.log("Database synced successfully");
		app.listen(3000, () => console.log("Server ready on port 3000."));
	})
	.catch((error) => {
		console.error("Unable to sync database:", error);
	});
