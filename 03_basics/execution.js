// JS execution Content

//Global EC->this //Function EC //Eval EC(problem of Global EC)
// single threaded

//phases
//->Memory Creation Phase
//->Execution Phase

let val1 = 10
let val2 = 20

function addNum(num1,num2){
    let result= num1+num2
    return result
}

let R1=addNum(val1,val2)
let R2=addNum(2,8)

//1-> Global Execution->this

//2->Memory Phase
// val1-> undefined
// val2-> undefined
// addnum-> defination
//result1 ->undefined
// result2-> undefinded

//3-> execution Phase
// val1->10
// val2->20
// addNum

//LIFO



