/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
   
    // your code here
    
    //selecting right element and adding an event on click
    document.getElementById('run').addEventListener('click', myFunction);

    // function that starts on click, console logging before and after myFunction to see differences
    function myFunction() {
        console.log(fruits);
        fruits.pop();
        fruits.shift();
        fruits.unshift("Banana");
        fruits.push("Kiwi");
        console.log(fruits);
       
    };
  

})();
