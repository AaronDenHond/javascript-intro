/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
      let op1 = document.getElementById("op-one").value ;
      let op2 = document.getElementById("op-two").value ;

       let opAdd = (+op1+ + op2) ;
       alert(opAdd);
       
    });

    document.getElementById("substraction").addEventListener("click", function() {
    
        // perform an substraction

        let op1 = document.getElementById("op-one").value ;
        let op2 = document.getElementById("op-two").value ;
        
        let opSub = op1 - op2 ;
        alert(opSub);

    });

    document.getElementById("multiplication").addEventListener("click", function() {
      
      
        // perform an multiplication

        let op1 = document.getElementById("op-one").value ;
        let op2 = document.getElementById("op-two").value ;
        
        let opMult = op1 * op2 ;
        alert(opMult);





    });




    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        let op1 = document.getElementById("op-one").value ;
        let op2 = document.getElementById("op-two").value ;
        
        let opDiv = op1 / op2 ;
        alert(opDiv);




    });

   
})();
