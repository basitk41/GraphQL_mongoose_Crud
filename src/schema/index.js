const { buildSchema } = require("graphql");
const user = require("./user");
module.exports = buildSchema(`${user}`);
