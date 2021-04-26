document.getElementById("red").addEventListener("mouseover", () => { console.log("mouseOverRed") }); //van rode haakjes callback functie anoniem (geen naam)
document.getElementById("yellow").addEventListener("mouseover", () => { console.log("mouseOverYellow") });
document.getElementById("green").addEventListener("mouseover", () => { console.log("mouseOverGreen") });
document.getElementById("blue").addEventListener("mouseover", () => { console.log("mouseOverBlue") });

// alt muis left click om verschillende woorden tegelijk te veranderen
//een eventlistener moet een type hebben bv. mouseover,click.. EN een callback functie. 
// callback : die functie wordt 'geroepen' bij het starten van de event.