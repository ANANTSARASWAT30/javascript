// function sayMyName(){
//     console.log("A")
//     console.log("N")
//     console.log("A")
//     console.log("N")
//     console.log("T")

// }

// sayMyName()

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){//parameters
        let result=number1+number2

        return result
    }

const result=addTwoNumbers(3,5)//arguments

function loginUserMessage(username="Shiva"){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(...num1){
     return num1
}

const user = {
    userName:"Anant",
    price:199
}

function print(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}

print({
    userName:"Sam",
    price:299
})

const newArr=[200,300,400]

function returnSecondVal(Array){
    console.log(`The Second Value of Array is ${Array[1]}`)
}

returnSecondVal(newArr)
