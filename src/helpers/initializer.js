const connectDB = require("../../config/connection");
let initializer = () => {
  connectDB();
};
module.exports = initializer;
