const User = require('./../../app/models/User');

describe("Unit test for class user", () => {
    test("Create an user object", () =>{
        //invocar el codigo que se va a usar
        const user = new User(1, "viikecp", "Virginia", "Bio");
        //lo esperado
        expect(user.id).toBe(1)
        expect(user.user).toBe("viikecp")
        expect(user.name).toBe("Virginia")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})