function myFunction() {
  var x = document.getElementById("suggestions");
  if (x.className === "suggestions") {
    x.className += " responsive";
  } else {
    x.className = "suggestions";
  }
}
