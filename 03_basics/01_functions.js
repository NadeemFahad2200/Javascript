
function saymyname(){
console.log("N");
console.log("a");
console.log("d");
console.log("e");
console.log("e");
console.log("m");

}
// saymyname()
function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}
// addTwoNumbers(3,4)


function addTwoNumbers(num1,num2) {
    // let result = num1 + num2
    // return result              => These type of declaration
    return num1 + num2           
    
}
const result = addTwoNumbers(3,5)
// console.log("REsult:", result);

function loginuserMessage(username = "Nadeem"){
    if(username === undefined){
        console.log("Please enter a username");
        return

    }
    return`${username} just logged in`
    
}
// console.log(loginuserMessage("Nadeem"))
console.log(loginuserMessage("Aisha"))