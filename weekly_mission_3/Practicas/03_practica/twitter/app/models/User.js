class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        //`id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`
        this.id = id;
        this.user = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
}

module.exports = User;