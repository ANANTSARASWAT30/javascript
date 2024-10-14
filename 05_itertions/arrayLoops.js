// for of loop

//["","",""]
//[{},{},{}]

const arr = [1,3,5,7]

for (const num of arr) {
    console.log(num)
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet ===" "){
        continue
    }
    console.log(`Each char is ${greet}`)
    
}


// Maps are key-value pairs

const map = new Map()

map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")

console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

const myObject = {
    'game1':'NFS',
    'game2':'Spider-Man'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value) //not iterable
// }
