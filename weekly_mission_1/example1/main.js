// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto myCar
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado make es la clave y ford el valor
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

// Variables de contexto local privadas
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

/* Para poder cambiar los valores de las variables, se crea un objeto
 una variable constante se puede asignar a un objeto con determinadas propiedades.
 Aunque la variable no se pueda asignar a un nuevo valor, si se puede cambiar el valor de sus propiedades.
*/
// Variable para guardar las variables locales y hacerlas publicas.
 const exported = {
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: "Otro valor público",
   publicBaz: baz,
   publicBarArray: privateBar
 }

// Exposición de variables locales

 return exported //sera publico
})()

console.log(myModule)