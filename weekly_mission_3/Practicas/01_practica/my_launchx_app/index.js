const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
const fer =  new MissionCommander('Fernanda')
const rodo = new MissionCommander('Rodolfo')
console.log(carlo.name, fer.name, rodo.name);