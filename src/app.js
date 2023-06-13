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

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === Number(id));
  return res.status(201).json({ team });
});

module.exports = app;