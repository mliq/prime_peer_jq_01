//Utility function

function Person(age, sex, weight){
	this.age = age;
	this.sex = sex;
	this.weight = weight;

	if(sex == 1) {
		this.sex = "Male";
	}else{
		this.sex = "Female";
	}

	if(this.sex == "Male"){
		this.name = maleNames[randomNumber(0,maleNames.length-1)];
	} else {
		this.name = femaleNames[randomNumber(0,femaleNames.length-1)];
	}
}

//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// Initialize Variables
var i = 0;
var peopleArray = [];
var maleNames = ["Bob", "Mike", "Jim", "Brian", "Scott", "John"];
var femaleNames = ["Jill", "Roberta", "Michelle", "Jamie", "Shawnella", "Jackie"];

// jQuery
$(document).ready(function(){
  $("#someButton").on("click", function(){
    // Create person on button click
    peopleArray[i] = new Person(randomNumber(1,100), randomNumber(1,2), randomNumber(1,100));
    // Append a person
    $("#people").append("<tr id='homies'><td>Person " + i + ": " + peopleArray[i].name + "</td>" + "<td> age: " + peopleArray[i].age + "</td>" + "<td> sex: " + peopleArray[i].sex + "</td>" + "<td> weight: " + peopleArray[i].weight + "</td></p>");


    i++;
  });
});