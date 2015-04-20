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
}

//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var i = 0;
var peopleArray = [];

// jQuery
$(document).ready(function(){
  $("#someButton").on("click", function(){
    // Create person on button click
    peopleArray[i] = new Person(randomNumber(1,100), randomNumber(1,2), randomNumber(1,100));
    // Append a person
    $("#people").append("<tr id='homies'><td>Person " + i + ": </td>" + "<td> age: " + peopleArray[i].age + "</td>" + "<td> sex: " + peopleArray[i].sex + "</td>" + "<td> weight: " + peopleArray[i].weight + "</td></p>");


    i++;
  });
});