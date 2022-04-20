export default class Pokemon {
    constructor (name) {
        this.name = name
      }
      //funcion
      sayHello (){
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
      }
      sayMessage(message){
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
      }
}