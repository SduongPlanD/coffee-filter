const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller.js');




//define rest api, with stackable filters
app.get('/api/machines/:product_type?/:water_line_compatible?', controller.findMachines);

app.get('/api/pods/:product_type?/:coffee_flavor?/:pack_size?', controller.findPods)


app.listen(port, () => console.log(`Listening on port ${port}`));