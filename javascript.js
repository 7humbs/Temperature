'use strict';

//highlights the border red for invalid()
//Set to global for resetBorder()
var inputBorder = document.getElementById("chirps");

function submitButton() {
  //  Get number string from input field in html document
  var cricketStr = document.getElementById("chirps").value;
  // for invalid() and calculation()
  var submit = true;
  //answer message displays in calculation() or invalid()
  var answer = document.getElementById("answer");

  function invalid() {

    if (cricketStr < 1 || cricketStr % 1 !== 0) {
      //highlights the input field red
      inputBorder.className = "redBorder";
      answer.innerHTML = "";
      submit = false;
      //will not perform calculation()
      return submit;
    }
  }
  //Converts cricket chirps to Fahrenheit or Celcius based off radio butten
  function calculation() {
    //Radio button for Fahrenheit
    var radioF = document.getElementById("F");
    //  Turns string into an integer for calculations
    var cricketNum = parseInt(cricketStr);
    // Calculation to turn chirps into degrees Fahrenheit
    var fTemp = cricketNum + 40;
    //Coversion of F to C, and rounded to the nearest 10th
    var cTempRounded = Math.round(((fTemp - 32) * .5556) * 10) / 10;
    //output variable text for calculation
    var message = "The crickets predict the temperature is about ";
    //checks if submit is true based on invalid() and if Fahrenheit is checked -  the radio button's default
    if (submit === true && radioF.checked === true) {
      //Output of Fahrenheit calculation
      message += fTemp + "&deg;F";
      answer.innerHTML = message;
      //checks if submit is true based on invalid() and if Fahrenheit is NOT checked (thus, it is Celsius)
    } else if (submit === true && radioF.checked !== true) {
      //output of Celsius calculation
      message += cTempRounded + "&deg;C";;
      answer.innerHTML = message;
    }
  }
  //  Assigns an empty value to clear the input field after user clicks button
  function clearValueField() {
    document.getElementById("chirps").value = "";
  }

  clearValueField();
  invalid();
  calculation();
}

function resetBorder() {
  inputBorder.className = "";
}
