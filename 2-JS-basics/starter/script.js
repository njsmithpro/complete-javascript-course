// All in 1 function to calculate age

/* function calculateAge() {

    var birthYear = prompt("What year were you born?");

    var currentYear = new Date().getFullYear();
    
    return currentYear - birthYear;

}


var nicksAge = calculateAge();
console.log(nicksAge);

 */


//Interdependent functions to calculate age

 function currentYear() {

    return new Date().getFullYear();

 }

 function birthYear() {

    return prompt("What year were you born?");

 }

 function calculateAge (currentYear, birthYear) {

    var age = currentYear - birthYear;
    console.log(age);

 }

 calculateAge(currentYear(), birthYear());