var orm = require("../config/orm");

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
  updateOne: function(devoured, condition, cb) {
    orm.updateOne("burgers", devoured, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;


// create code that will call ORM functions using burger specific input

// export at end of file