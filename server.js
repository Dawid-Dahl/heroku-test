require("dotenv").config();
const express = require("express");
const errorhandler = require("errorhandler");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(
	cors({
		origin: "http://localhost:1234",
		credentials: true,
	})
);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("dist"));
}

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
