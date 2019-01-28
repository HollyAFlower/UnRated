var years = prompt("Please enter your age in years: " , "0");
var months = years * 12;
if (years != null) {  
    document.getElementById("Script").innerHTML = 
		"Age in Years: " + years + 
		"<br>" + 
		"Age in months: " + months;
}