//Coffee machines
var coffeeMachines = [

  {
    _id: 'CM001',
    product_type: 'COFFEE_MACHINE_SMALL',
    model_type: 'base model',
    water_line_compatible: false
  },
  {
    _id: 'CM002',
    product_type: 'COFFEE_MACHINE_SMALL',
    model_type: 'premium model',
    water_line_compatible: false
  },
  {
    _id: 'CM003',
    product_type: 'COFFEE_MACHINE_SMALL',
    model_type: 'deluxe model',
    water_line_compatible: true
  },
  {
    _id: 'CM101',
    product_type: 'COFFEE_MACHINE_LARGE',
    model_type: 'base model',
    water_line_compatible: false
  },
  {
    _id: 'CM102',
    product_type: 'COFFEE_MACHINE_LARGE',
    model_type: 'premium model',
    water_line_compatible: true
  },
  {
    _id: 'CM103',
    product_type: 'COFFEE_MACHINE_LARGE',
    model_type: 'deluxe model',
    water_line_compatible: true
  },
  {
    _id: 'EM001',
    product_type: 'ESPRESSO_MACHINE',
    model_type: 'base model',
    water_line_compatible: false
  },
  {
    _id: 'EM002',
    product_type: 'ESPRESSO_MACHINE',
    model_type: 'premium model',
    water_line_compatible: false
  },
  {
    _id: 'EM003',
    product_type: 'ESPRESSO_MACHINE',
    model_type: 'deluxe model',
    water_line_compatible: true
  }
]








//Coffee pods
var coffeePods = [
  {
    _id: 'CP001',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'CP003',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'CP011',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'CP013',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'CP021',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_PSL'
  },
  {
    _id: 'CP023',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_PSL'
  },
  {
    _id: 'CP031',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_MOCHA'
  },
  {
    _id: 'CP033',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_MOCHA'
  },
  {
    _id: 'CP041',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT'
  },
  {
    _id: 'CP043',
    product_type: 'COFFEE_POD_SMALL',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT'
  },
  {
    _id: 'CP101',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'CP103',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'CP111',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'CP113',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'CP121',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_PSL'
  },
  {
    _id: 'CP123',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_PSL'
  },
  {
    _id: 'CP131',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_MOCHA'
  },
  {
    _id: 'CP133',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_MOCHA'
  },
  {
    _id: 'CP141',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '1 dozen (12)',
    coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT'
  },
  {
    _id: 'CP143',
    product_type: 'COFFEE_POD_LARGE',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT'
  },
  {
    _id: 'EP003',
    product_type: 'ESPRESSO_POD',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'EP005',
    product_type: 'ESPRESSO_POD',
    pack_size: '5 dozen (60)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'EP007',
    product_type: 'ESPRESSO_POD',
    pack_size: '7 dozen (84)',
    coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
  },
  {
    _id: 'EP013',
    product_type: 'ESPRESSO_POD',
    pack_size: '3 dozen (36)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'EP015',
    product_type: 'ESPRESSO_POD',
    pack_size: '5 dozen (60)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  },
  {
    _id: 'EP017',
    product_type: 'ESPRESSO_POD',
    pack_size: '7 dozen (84)',
    coffee_flavor: 'COFFEE_FLAVOR_CARAMEL'
  }
]

module.exports = {
  coffeeMachines,
  coffeePods
}