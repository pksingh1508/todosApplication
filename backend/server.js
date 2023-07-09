const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is Running");
})

// db connection
require("./config/database").dbConnect();

// mount the routes
const todoRoute = require("./routes/todoRoutes");
app.use("/api/v1", todoRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
})
