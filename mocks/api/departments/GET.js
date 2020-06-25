const data = [
  {
    id: '1',
    department: 'Clothes'
  },
  {
    id: '2',
    department: 'Shoes'
  },
  {
    id: '3',
    department: 'Electronic'
  }
];

module.exports = (request, response) => {
  response.json(data);
};