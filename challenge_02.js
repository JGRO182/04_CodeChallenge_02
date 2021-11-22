/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */


const name = prompt("Bitte geben Sie Ihren Namen ein");
const ageString = prompt("Bitte geben Sie Ihr alter ein");
const age = parseInt(ageString);

/*******  mit Switch  *******/

// switch (true) {
//     case age >= 0 && age < 6:
//         console.log(name +" trinkt Milch");
//         break;
//     case age >5 && age < 13:
//         console.log(name +" trinkt Saft");
//         break;
//     case age >12 && age < 18:
//         console.log(name +" trinkt Cola");
//         break;
//     case age >17:
//         console.log(name +" trinkt Wein");
//         break;
//     default:
//         console.log("Eingegebenes Alter nicht möglich");
//         break;
// }

/*******  mit if / else if  *******/

if (age >= 0 && age < 6){
    console.log(name +" trinkt Milch");
}else if (age >5 && age < 13){
    console.log(name +" trinkt Saft");
}else if(age >12 && age < 18){
    console.log(name +" trinkt Cola");
}else if(age >17){
    console.log(name +" trinkt Wein");
}else{
    console.log("Eingegebenes Alter nicht möglich");
}




// /********Ternäre Schreibweise **********/

// console.log(
// (age >= 0 && age < 6) ? name +" trinkt Milch": 
// (age >5 && age < 13) ? name +" trinkt Saft" : 
// (age >12 && age < 18) ? name +" trinkt Cola" : 
// (age >17) ? name +" trinkt Wein" : "Eingegebenes Alter nicht möglich"
// )




