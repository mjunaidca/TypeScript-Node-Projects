"use strict";
// class User {
//     public email: string;
//     private name:string  
//     readonly city: string ="Lahore"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Lahore";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count cannot be less than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
