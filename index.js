var slider1 = document.getElementById("myRange1");
var output1 = document.querySelector(".value-1");
output1.innerHTML = slider1.value + " miles per gallon"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function(e) {
  output1.innerHTML = this.value + " miles per gallon";
}


var slider2 = document.getElementById("myRange2");
var output2 = document.querySelector(".value-2");
output2.innerHTML = slider2.value + " miles per gallon"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function(e) {
  output2.innerHTML = this.value + " miles per gallon";
}

