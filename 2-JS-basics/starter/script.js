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
/*
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

*/
/* Tip Calculator

function calculateTip(bill) {
   let percentage;
   if (bill < 50) {
      percentage = .2;
   } else if (bill > 50 && bill < 200) {
      percentage = .15;
   } else {
      percentage = .1;
   }
   return percentage * bill;
}

console.log(calculateTip(124));

var foodBills = [124, 48, 268];
var totalBills = [];

foodBills.forEach(function(e){
   console.log(calculateTip(e));
});

*/



/******* BMI CALCULATOR *******/

//Create "Person" class with a calculate BMI function
class Person {
   constructor(firstName, lastName, height, mass) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.height = height;
      this.mass = mass;
      }

      calculateBmi() {
         return this.mass / (this.height * this.height);
      }

}

//Created a function to compare BMIs
var compareBmi = function (nameA, nameB) {

   firstNameA = nameA.firstName;
   firstNameB = nameB.firstName;
   let bmiA = nameA.calculateBmi();
   console.log(firstNameA + "'s BMI is " + bmiA.toString());
   let bmiB = nameB.calculateBmi();
   console.log(firstNameB + "'s BMI is " + bmiB.toString());

   if (bmiA > bmiB) {
      console.log(firstNameA + "'s BMI is higher than " + firstNameB + "'s.");
   } else if (bmiA < bmiB) {
      console.log(firstNameB + "'s BMI is higher than " + firstNameA + "'s.");
   } else {
      console.log("Both " + firstNameA + "'s and " + firstNameB + "'s BMIs are the same!");
   }

}

//Created instances of the Person class, Mark and Emma
let mark = new Person("Mark", "Smith", 1.81, 74);
let emma = new Person("Emma", "Wood", 1.60, 52);

//Called function
compareBmi(emma, mark);

// Talk to Russ about how this could be used to input details online to get instant BMI repsonse




