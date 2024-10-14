// Immediately Invoked Function Expressions (IIFE)

(function milk(){
    //named IIFE
  console.log(`DB CONNECTED`)
})();

(()=>{
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Anant')

//global scope ke pollution se problem hoti hai ussey hutane ke liye use karte hai iife

// milk()

