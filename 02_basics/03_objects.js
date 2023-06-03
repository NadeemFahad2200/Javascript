//singleton
//object.create =>That is called constroctor method
//Object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Nadeem",
    "full name": "Nadeem Fahad",
    [mySym]:"mykey1",
    age:18,
    location: "New Delhi",
    email: "Nadeem@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "Nadeem@chatgpt.com" 
// Object.freeze(JsUser)
JsUser.email = "Nadeem@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());