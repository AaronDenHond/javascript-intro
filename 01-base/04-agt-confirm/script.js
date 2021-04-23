/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function () {

  let Age = prompt("What is your age?");
  let Gender = prompt("What is your gender?");
  let Town = prompt("What town do you live in?");
  let Answer = confirm("Are you " + Age + " ,Is your gender " + Gender + " Do you live in, " + Town + " ,Is your info correct?");

  while (Answer == false) {
    Age = prompt("What is your age?");
    Gender = prompt("What is your gender?");
    Town = prompt("What town do you live in?");
    if (confirm ("Are you " + Age + " ,Is your gender " + Gender + " Do you live in, " + Town + " ,Is your info correct?")){
      Answer = true;

    }
  }




}());
