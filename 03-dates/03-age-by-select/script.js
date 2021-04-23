/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // your code here

    document.getElementById("run").onclick = function() {
        let dobDay = document.getElementById("dob-day").value;
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;

        let dobBday = new Date(dobYear, dobMonth, dobDay);
        
        let dateToday = new Date(); 
        
       
    
    
        let diff = dateToday.getTime() - dobBday.getTime();
        let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        
        alert(dobBday);
        alert(age);
    

}

})();
