const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUniFiedTopology: true
    })
    .then(() => {
        console.log("Db connected successfully");
    })
    .catch( (err) => {
        console.log("Db connection error: " + err);
    })
}
