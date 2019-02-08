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
}
function Add() {
  var I1 = Number(prompt("Type a number.", 0));
  var I2 = Number(prompt("Type a second number.", 1));
  var I3 = I1 + I2;
  if (true) {
    document.getElementById("demo2").innerHTML = "The sum of " + I1 + " and " + I2 + " is " + I3 + ".";
  }
}
function Multiply() {
  var I1 = Number(prompt("Type a number.", 0));
  var I2 = Number(prompt("Type a second number.", 1));
  var I3 = I1 * I2;
  if (true) {
    document.getElementById("demo2").innerHTML = "The multiple of " + I1 + " and " + I2 + " is " + I3 + ".";
  }
}
function Devide() {
  var I1 = Number(prompt("Type a number.", 0));
  var I2 = Number(prompt("Type a second number.", 1));
  var I3 = I1 / I2;
  if (true) {
    document.getElementById("demo2").innerHTML = "The devisor of " + I1 + " and " + I2 + " is " + I3 + ".";
  }
}
function Subtract() {
  var I1 = Number(prompt("Type a number.", 0));
  var I2 = Number(prompt("Type a second number.", 1));
  var I3 = I1 - I2;
  if (true) {
    document.getElementById("demo2").innerHTML = "The difference of " + I1 + " and " + I2 + " is " + I3 + ".";
  }
}
