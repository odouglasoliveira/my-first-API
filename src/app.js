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

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const updateTeam = teams.find((team) => team.id === Number(id));
  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }
  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

module.exports = app;