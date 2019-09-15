const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var machineSchema = new Schema({
  _id: String,
  product_type: String,
  model_type: String,
  water_line_compatible: Boolean,
});

var podSchema = new Schema({
  _id: String,
  product_type: String,
  coffe_flavor: String,
  pack_size: String,
});

var Machines = mongoose.model('Machines', machineSchema);
var Pods = mongoose.model('Pods', podSchema);

mongoose.connect('mongodb://localhost/coffee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const findMachines = (filter, callback) => {
  var query = {}
  if (filter["product_type"]) {
    query["product_type"] = filter["product_type"]
  }
  if (filter["water_line_compatible"]) {
    query["water_line_compatible"] = filter["water_line_compatible"]
  }

  Machines.find(query, function (err, result) {
    if (err) throw err

    callback(err, result)
  })
}

const findPods = (filter, callback) => {
  var query = {}
  if (filter["product_type"]) {
    query["product_type"] = filter["product_type"]
  }
  if (filter["coffee_flavor"]) {
    query["coffee_flavor"] = filter["coffee_flavor"]
  }
  if (filter["pack_size"]) {
    query["pack_size"] = filter["pack_size"]
  }

  Pods.find(query, function (err, result) {
    if (err) throw err
    callback(err, result)
  })
}

module.exports = {
  findMachines,
  findPods
}