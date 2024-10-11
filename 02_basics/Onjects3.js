const course = {
    name:"Js in hindi",
    price:"999rs",
    courseInstructor:"Anant"
}

// const {courseInstructor} = course // destructuring objects
const {courseInstructor:Instructor} = course
console.log(Instructor)

// { //object as api
//     name:"Anant",
//     coursename:"js in hindi",
//     price:999
// }

// [ //array as api
//     {},
//     {},
//     {} JSON = javascript object notation
// ]

