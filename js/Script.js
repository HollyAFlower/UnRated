function MyFunction() {
  var Name = prompt("Please enter your name.", "Type name here.");
  if (Name != "Type name here.") {
    document.getElementById("demo").innerHTML = "Hello " + Name + ".";
  } else {
    document.getElementById("demo").innerHTML = "You didn't type anything silly.";
  }
}