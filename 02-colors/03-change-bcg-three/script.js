/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    document.getElementById('run').onclick  = function () {
        let random ; 
while(random !== '#123456') {


   random = '#' + Math.floor(Math.random() * 16777215).toString(16); // value math needs to be bigger for hexadecimal, then tostring value is 16
    document.body.style.backgroundColor = random ;
    console.log(random)
    
}

    }






    // your code here

})();
