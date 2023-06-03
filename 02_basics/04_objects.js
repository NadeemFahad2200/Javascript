// const tinderUser = new Object()    SingleTone object Declaration
// const tinderUser = {} Non Singleton object Declaration
const tinderUser = {}
tinderUser.id = "123abd"
tinderUser.name = "Nadeem" 
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:  "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nadeem",
            lastname: "Fahad"

        }

    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[

{

},
{

},
{

},
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course ={
    coursename: "Chemistry",
    price:"999",
    courseInstructor:"Nadeem"
   }
    // console.log(course.courseInstructor);

    const {courseInstructor:Instructor} = course
    // console.log(courseInstructor);
    console.log(Instructor);

    // {
//     "name": "Nadeem",
//     "coursename": "Chemistry",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
    
