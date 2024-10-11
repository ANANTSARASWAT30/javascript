// temporal proposal

let myDate = new Date()

console.log(myDate)

console.log(myDate.toDateString())

console.log(myDate.toLocaleDateString())

console.log(typeof myDate)

let myNewDate = new Date(2023,0,23)
console.log(myNewDate.toDateString())

let myTimeStamp = new Date.now()

console.log(myTimeStamp)
console.log(myNewDate.getTime())

console.log(Math.floor(Date.now()/1000))


console.log(myNewDate.getDay())

myNewDate.toDateString('default',{
    weekday:"long"
})