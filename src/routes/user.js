const controller = require("../controllers");
module.exports.user = {
  getUsers: () => controller.user.getUsers(),
  getUser: (args) => controller.user.getUser(args),
  addUser: (args) => controller.user.addUser(args),
  deleteUser: (args) => controller.user.deleteUser(args),
  updateUser: (args) => controller.user.updateUser(args),
};
