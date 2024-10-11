const marvel=["Thor","Iron Man","Star Lord"]
const Dc=["Superman","Batman","Aquaman"]

// marvel.push(Dc)

console.log(marvel)

// const allHero=marvel.concat(Dc)


// console.log(allHero)

const allnewHeros=[...marvel,...Dc]

console.log(allnewHeros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7[8,9]]] 

const Arr=anotherArr.flat(Infinity)

console.log(Arr)

console.log(Array.from("Anant"))

console.log(Array.from({name:"Anant"}))// good question you are a good question

let s1=100
let s2=120
let s3=140

console.log(Array.of(s1,s2,s3))




