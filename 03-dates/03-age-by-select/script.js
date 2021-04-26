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

    document.getElementById("run").onclick = function() {   // we select the element we wont the function to apply to : function starts on click
        let dobDay = document.getElementById("dob-day").value; // getting a raw value for dobDay via .value
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;

        let dobBday = new Date(dobYear, dobMonth, dobDay);
        
        let dateToday = new Date(); 
        
       
    
    
        let diff = dateToday.getTime() - dobBday.getTime(); // javascript saves age as milliseconds since 1970
        let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // milliseconds -> seconds -> minutes -> hours -> days -> years calculations //math() cause its a method needs brackets math.floor rond af nr beneden
        
        alert(dobBday);
        alert(age);
    

}

})();
