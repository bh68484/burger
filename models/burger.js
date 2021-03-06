// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(update, condition, callback) {
    orm.updateOne("burgers", update, condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
