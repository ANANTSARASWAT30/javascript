// const coding = ['js','ruby','cpp']

// const values = coding.forEach((item)=>{
//     console.log(item) // not return anything
//     return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums= myNums.filter((num)=> num > 5)

// let newNums= myNums.filter((num)=> {
//     return num>5
// })
// console.log(newNums)

const newNums= []

myNums.forEach((num) => {
    if(num>5){
        newNums.push(num)
    }
})

// console.log(newNums)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnums=myNumbers.map((num)=>num+10)


// const newnums=[]
// myNumbers.forEach((num)=> newnums.push(num+10))
// console.log(newnums)


// chaining

const newnums = myNumbers
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=> num>70)

console.log(newnums)



