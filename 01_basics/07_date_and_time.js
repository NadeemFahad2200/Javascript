Date
let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

// let mycreateDate = new Date(2023, 11, 24)
console.log(mycreateDate.toDateString());
// let mycreateDate = new Date(2023, 11, 24,6,3)
// let mycreateDate = new Date("2023-01-14")
// let mycreateDate = new Date("01-04-1990")
console.log(mycreateDate.toLocaleString());



let mycreateDate = new Date("01-14-2023")
let myStamp = Date.now()

console.log(myStamp);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})