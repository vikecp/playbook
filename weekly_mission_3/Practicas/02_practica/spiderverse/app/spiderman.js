class spiderman{
    constructor(Name, Edad, ActorInterprete,PeliculasQueAparecio, EstudioCine){
        this.nombre = Name;
        this.edad = Edad;
        this.actor = ActorInterprete;
        this.peliculas = PeliculasQueAparecio;
        this.estudio = EstudioCine;
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.estudio} studio`
    }
}

module.exports = spiderman