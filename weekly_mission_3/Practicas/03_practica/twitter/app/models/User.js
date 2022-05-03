class User{
    constructor(id, username, name, bio){
        //`id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`
        this.id = id;
        this.user = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    get getUserName(){
        return this.user;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
    //set
    set setUsername(newUsername){
        this.user = newUsername;
    }

    set setBio(newBio){
        this.bio = newBio;
    }
}

module.exports = User;