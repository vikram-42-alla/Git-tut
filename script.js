console.log("Hello this is git")
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Name ${this.name} Age ${this.age}`);
    }
}
const user=new User("Vikram",23)
user.greet()