/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('This is an informational message') // solo aplica cuando tienes una unica funcion
logger2.verbose('This is a verbose message') // cuando quieres llamar a una especifica funcion
logger2.vike("Que tal")
