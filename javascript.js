'use strict';

//Triggers event when user submits button from hitting enter on keyboard
$("#enterKeyboard").submit(function(event) {
    event.preventDefault();
    submitButton();
});

//Triggers event when user submits button from clicking mouse
$("#submitButton").click(function() {
    submitButton();
});

//Removes .redBorder if invalid from previous input when user presses keys on keyboard in input field
$("#enterKeyboard").keydown(function() {
    resetBorder();
});

//Removes .redBorder if invalid from previous input when user clicks in input field
$("#chirps").click(function() {
    resetBorder();
});

//Grabs input value from user, declares variables for access to functions called in it
function submitButton() {
    //  Get string from input field in html doc
    var cricketInput = document.getElementById("chirps").value;
    //answer message displays in calculation() or invalid()
    var answer = document.getElementById("answer");
    //Clears input field
    document.getElementById("chirps").value = "";
    //Passing in cricketInput and calculation() parameters to call invalid function to first check if input is invalid, and if it is not, to perform the calculation()
    invalid(cricketInput, calculation);
}

//1st parameter is cricketInput value, renamed since it is a string from inital input submitted, second is calculation() passed as callback function
function invalid(cricketStr, convertChirps) {
    //Checks if string is < 1 or a float as this is invalid data
    if (cricketStr < 1 || cricketStr % 1 !== 0) {
        //highlights the input field red to signal invalid input
        $("#chirps").addClass("redBorder");
        //Answer is an empty string, this also resets the answer from previous answers if they were valid
        answer.innerHTML = "";
        //if the cricketStr is valid input - ie >= 1 and not a float, calculation function will execute to convert chirps to temp...
    } else {
        //Checks if convertChirps is a function, and will execute if so
        if (typeof convertChirps === "function") {
            //cricketInput is passed as an arugment named cricketStr, and the calculation function will execute
            convertChirps(cricketStr);
        }
    }
}
//Converts cricket chirps to Fahrenheit or Celcius based off checked radio button. The parameter being passed is cricketStr from callback
function calculation(convertCricketStr) {
    //Radio button for Fahrenheit
    var radioF = document.getElementById("F");
    //  Turns string into an integer for calculations
    var cricketNum = parseInt(convertCricketStr);
    // Calculation to turn chirps into degrees Fahrenheit
    var fTemp = cricketNum + 40;
    //Coversion of F to C, and rounded to the nearest 10th
    var cTempRounded = Math.round(((fTemp - 32) * .5556) * 10) / 10;
    //output variable text for calculation
    var message = "The crickets predict the temperature is about ";
    //checks if Fahrenheit is checked -  the radio button's default (from html)
    if (radioF.checked === true) {
        //Output of Fahrenheit calculation
        message += fTemp + "&deg;F";
        answer.innerHTML = message;
        //checks if Fahrenheit is NOT checked (thus, it is Celsius)
    } else if (radioF.checked !== true) {
        //output of Celsius calculation
        message += cTempRounded + "&deg;C";;
        answer.innerHTML = message;
    }
}

//Removes .redBorder and is called in event handlers
function resetBorder() {
    $("#chirps").removeClass("redBorder");
}
