/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {


        const person = {
            lastname: "Delnatte",
            firstname: "Pierre-Antoine",
            nickname: "Leny",
            birthDate: "08-05-1985",
            city: "Liège",
            status: "married",

            // your code here

        };
       // for (const [key, value] of Object.entries(person)) {  if you want to see everything
         //   console.log(`${key}: ${value}`);
         console.log(Object.keys(person));  // if you want to see property names only
         console.log(Object.values(person)); // if you want to see values
        //}
    });


})();
