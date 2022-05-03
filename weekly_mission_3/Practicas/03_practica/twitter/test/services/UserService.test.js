const UserService = require('./../../app/services/userService')


describe('Test for userService', ()=> {
    test("1. Create a new user using the UserServices", ()=>{
        const user = UserService.create(1, "viike","Virginia")
        expect(user.id).toBe(1)
        expect(user.user).toBe("viike")
        expect(user.name).toBe("Virginia")
        expect(user.bio).not.toBeUndefined()
    });
    test('2. Get all data user in a list', ()=>{
        const user = UserService.create(1, "viike","Virginia")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("viike")
        expect(userInfoList[2]).toBe("Virginia")
        expect(userInfoList[3]).toBe("Sin bio")
    })
})