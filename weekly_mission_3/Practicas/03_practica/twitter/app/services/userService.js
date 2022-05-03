const User = require('./../models/User')
class UserService{
    //metodo create new user
    static create(id, username, name){
        return new User(id, username, name,"Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }
}
module.exports = UserService