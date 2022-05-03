const UserService = require('./../../app/services/userService')


describe('Test for userService', ()=> {
    test("1. Create a new user using the UserServices", ()=>{
        const user = UserService.create(1, "viike","Virginia")
        expect(user.id).toBe(1)
        expect(user.user).toBe("viike")
        expect(user.name).toBe("Virginia")
        expect(user.bio).not.toBeUndefined()
    })
})