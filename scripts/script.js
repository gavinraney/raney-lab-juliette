function myFunction() {
  var x = document.getElementById("suggestions");
  if (x.className === "suggestions") {
    x.className += " responsive";
  } else {
    x.className = "suggestions";
  }
}

// began to do this with modals to open in new pages but did not create separate pages for inputs and instead included them on the html
