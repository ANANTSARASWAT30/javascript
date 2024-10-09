//stack(primitive)(copy) , Heap(Non-primitive)(reference)

let myName="Moviesvilla"

let anotherName=myName

console.log(myName)
another = "MoviesArena"
console.log(anotherName)

console.log(myName)

let user = {
    email:"anant@gmail.com",
    upi:"upi@paytm"
}

let user2=user

user2.email="Anant@gmail.com"

console.log(user.email)
console.log(user2.email)