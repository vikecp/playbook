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
    });
    //req. 3
    test('Add getters', () =>{
        const user = new User(1, "viikecp", "Virginia", "Bio");
        expect(user.getUserName).toBe("viikecp")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})