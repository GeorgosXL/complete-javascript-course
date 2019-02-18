// Objects and methods JS

class User {

    constructor(name, height)
    {
        this.name = name;
        this.height = height;
    }

    logName()
    {
        console.log(this.name);
    }
}

var user = new User('georgos', 188);

user.logName(); 
