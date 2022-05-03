const User = require('./../../app/models/User');

describe("Unit test for class user", () => {
    test("Create an user object", () =>{
        //invocar el codigo que se va a usar
        const user = new User(1, "viikecp", "Virginia", "Bio", "DateCreated", "last");
        //lo esperado
        expect(user.id).toBe(1)
        expect(user.user).toBe("viikecp")
        expect(user.name).toBe("Virginia")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("DateCreated")
        expect(user.lastUpdated).toBe("last")
    })
})