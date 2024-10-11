// singleton (constructor)
//Object.create
//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Anant",
    [mySym]:"myKey1", //[] to use mySym as symbol
    "age":22,//cannot access with .
    location:"Mathura"

}

console.log(JsUser["age"])
console.log(JsUser[mySym])// we can Only Access symbol with[]

//Object.freeze(JsUser)

//treat function as variable in Js

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())



