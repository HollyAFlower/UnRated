function MyFunction() {
  var Name = prompt("Please enter your name.", "Name goes here.");
  if (Name != "Name goes here.") {
    var Age = Number(prompt("Type your age.", "0"));
    document.getElementById("demo").innerHTML = "Hello " + Name + ".";
    if (Age != "0") {
        document.getElementById("demo").innerHTML = "Hello " + Name + ". You are " + Age + " years old.";
    } else {
        document.getElementById("demo").innerHTML = "Hello " + Name + ". " + "But of course you cant be 0 years old.";
    }
  } else {
    document.getElementById("demo").innerHTML = "You didn't type anything silly.";
  }
},