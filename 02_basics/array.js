
const array=[1,2,3]//resizable and mix of data

// array cpy make shallow copy

const myHeros=["shaktimaan","Migthy Raju"]

const array1=new Array(1,2,3,4)

//prototype

console.log(array[0])

//array methods

array.push(4)
console.log(array)
array.pop()

array.unshift(1)
console.log(array)
array.shift()

console.log(array.includes(4))
console,log(array.indexOf(3))

const array2=array.join()


//slice, spice

console.log("A",array)

const myn = array.slice(1,3)// 3 not include

console.log(myn)
console.log("B",array)

const myn2 = array.splice(1,3)

console.log(myn2)//manupilate the original array


