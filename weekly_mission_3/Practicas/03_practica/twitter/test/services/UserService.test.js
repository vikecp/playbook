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
    });
    test("3. Update username", ()=>{
        const user = UserService.create(1, "viike","Virginia")
        UserService.updateUserUsername(user, "viikecp") //cambiar username
        expect(user.user).toBe("viikecp")
    });
    test("4. Given a list of users give me the list of usernames", ()=>{
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })
})