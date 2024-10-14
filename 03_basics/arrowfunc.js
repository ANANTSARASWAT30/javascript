const user = {
    username:"Anant",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }


}

// user.welcomeMessage()
// user.username="Pari"
// user.welcomeMessage()

// console.log(this)

// browser ke andar jo globel object hai voh hai window object


// function milk(){
//     let username="Anant"
//     console.log(this.username)
// }

// milk()

const chai = ()=>{
     let username = "Anant"
     console.log(this)
}

// chai()

// const addTwo = (num1,num2)=>{
//      return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2 //implicite return

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Anant"})

console.log(addTwo(5,6))

const arr = [2,5,8,10]















