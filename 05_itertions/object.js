const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    console.log(programming[key])
}

for (const key in programming) {
    console.log(key)
}

// for (const key in map) {
//     console.log(key)//not iterable   
// }

// object for in loop, array for of loop


const coding = ['js','ruby','cpp']

// coding.forEach( function (item) {
//     console.log(item)
// } )
// coding.forEach( (item) => {
//     console.log(item)
// } )

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'c++',
        languageFileName:'cpp'
    },
    {
        languageName:'python',
        languageFileName:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})
