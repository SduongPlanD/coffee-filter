var data = require('./inventory.js');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/coffee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//defines schemas
var machineSchema = new Schema({
  _id: String,
  product_type: String,
  model_type: String,
  water_line_compatible: Boolean
},
  {
    versionKey: false
  });

var podSchema = new Schema({
  _id: String,
  product_type: String,
  coffee_flavor: String,
  pack_size: String
},
  {
    versionKey: false
  });

//compiles schemas into models
var Machines = mongoose.model('Machines', machineSchema);
var Pods = mongoose.model('Pods', podSchema);

//inserts data into collections
Machines.insertMany(data.coffeeMachines, function (err) {
  if (err) {
    console.log('Error inserting Machines into Mongo')
    return
  }
  console.log('Inserted Machines into Mongo')
})

Pods.insertMany(data.coffeePods, function (err) {
  if (err) {
    console.log('Error inserting Pods into Mongo')
    return
  }
  console.log('Inserted Pods into Mongo')
})