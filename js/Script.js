var person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
  document.getElementById("Script").innerHTML =
  "Hello " + person + "! How are you today?";
}