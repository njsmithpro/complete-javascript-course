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

function calculateAge(birthYear) {

   return 2018 - birthYear;

}

var ageNick = calculateAge(1986);
console.log(ageNick);

function calculateRetirementYears(year, firstName) {
   let age = calculateAge(year);
   let yearsLeft = 65 - age;

   if (yearsLeft > 0) {
      console.log(firstName + " has " + yearsLeft + " years left until retirement");
   } else {
      console.log(firstName + " has already retired!!");
   }


}

calculateRetirementYears(1986, "Nick");