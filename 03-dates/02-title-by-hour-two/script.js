/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    /*
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        console.log(hours+ "" +minutes);
      if (hours+""+minutes < 1730) {
          document.getElementById("target").innerHTML = 'Hello' ;
      } else {
          document.getElementById("target").innerHTML = 'Good evening';
      }
    */

    //if hours, then check minutes
     
    // declaring 2 variables and assigning values in hours and minutes
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    /*if  |PERSONAL TEST, MIGHT NOT WORK 100%| (hours < 18 && minutes < 1050) {
        document.getElementById("target").innerHTML = "Hello";
    }

    else {
        document.getElementById("target").innerHTML = 'Good evening';
    */

       // 3 conditions needed : later than hours 17, 17 : 30 and else 
   if (hours >17) {

    document.getElementById("target").innerHTML = "Good Evening!";
}

    else if (hours === 17 && minutes >=30) {
        
    document.getElementById("target").innerHTML = "Good Evening!";
}

    else {
     document.getElementById("target").innerHTML = "Hello!"

    }

   



    


})();
