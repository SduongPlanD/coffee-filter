const db = require('../database/index.js');

const findMachines = (req, res) => {
  const filter = req.params;

  db.findMachines(filter, (err, data) => {
    if (err) {
      console.log('error retreiving machines')
      return
    }
    res.send(data)
  })
};

const findPods = (req, res) => {
  const filter = req.params;
  db.findPods(filter, (err, data) => {
    if (err) {
      console.log('error retreiving pods')
      return
    }
    res.send(data)
  })
};

module.exports = {
  findMachines,
  findPods
}