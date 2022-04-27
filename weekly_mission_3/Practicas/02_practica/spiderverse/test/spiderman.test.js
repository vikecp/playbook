const Spiderman = require('./../app/spiderman')

describe("Unit Test for spiderman class", () => {
    test('1 Create a spiderman object', () => {
        //intanciar un objeto spiderman
        const AndrewGarfield = new Spiderman("Spiderman Sony",31, "Andrew G",2, "Sony")
        //lo esperado
        expect(AndrewGarfield.nombre).toBe("Spiderman Sony")
        expect(AndrewGarfield.edad).toBe(31)
        expect(AndrewGarfield.actor).toBe("Andrew G")
        expect(AndrewGarfield.peliculas).toBe(2)
        expect(AndrewGarfield.estudio).toBe("Sony")
    });
    test('2 Use the method getInfo()', () =>{
        const tomHolland = new Spiderman("Spiderman Marvel",25, "Tom Holland", 5, "Marvel")

        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })