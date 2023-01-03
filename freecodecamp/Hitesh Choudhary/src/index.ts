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

    protected _courseCount = 1

    readonly city: string ="Lahore"
    constructor(
        public email: string,
        public name: string
        
        )
        {
    }

    private deleteToken(){
        console.log("Token Deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("Course count cannot be less than 1")
        }
        this._courseCount = courseNum

    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
    
}

const hitesh = new User("h@h.com", "hitesh");
