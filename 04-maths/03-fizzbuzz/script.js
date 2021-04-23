/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    
    for (let i = 1; i <= 100; i++) {
        
     if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {

        console.log("fizzBuzz");

     }

    else if (Number.isInteger(i / 3)) {

        console.log("fizz");
    }

    else if (Number.isInteger(i / 5)) {

        console.log("buzz");

    }
     
    else 

        console.log(i);
    }   

    
    // your code here


    /*TODO : console.log output
    
    multitudes means we can also divide by, eg : 5.4 = 20 => 20/5 = 4 
    remainder 0 or integer result
    IF remainder 0 its okay
    
    */

let myObj = { "name":"John", "age":30, "car":null };
console.log(myObj.name);
})();

