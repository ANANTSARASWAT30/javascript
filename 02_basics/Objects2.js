const tinderUser = new Object()//singleton

tinderUser.id=478
tinderUser.name="Ravi"
tinderUser.login=false

const regularUser = {
    email:"@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Anant",
            lastname:"Saraswat"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)
//console.log(regularUser.fullname?.userfullname.firstname)
//to check if fullname exist or not

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({},obj1,obj2)


// const obj3 = {obj1,obj2}

const obj3 = {...obj1,...obj2}

const users = [
    {
        id:1,
        email:"@gmail.com"
    },
    {
        id:1,
        email:"@gmail.com"
    },
    {
        id:1,
        email:"@gmail.com"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))//data type array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('login'))
 

