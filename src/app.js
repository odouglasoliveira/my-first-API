const express = require('express');

const app = express();
app.use(express.json());
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPFC',
  },
  {
    id: 2,
    name: 'Grêmio Foot-ball Porto Alegrense',
    initials: 'GRÊ',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;