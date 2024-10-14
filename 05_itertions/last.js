// Reduce

const myNums = [1,2,3]

// const mytotal = myNums.reduce((acc,currval) => {
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc + currval
// },0)

const mytotal = myNums.reduce((acc,currval) => acc+currval,0)

// console.log(mytotal)


const shopppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"python course",
        price:999
    }
]

const cartTotal = shopppingCart.reduce((acc,currval)=>acc+currval.price,0)

console.log(cartTotal)