'use strict';

//Radio button for Fahrenheit
var radioF = $("#F");
$(radioF).attr("checked", true);
//answer message displays in calculation() or invalid()
var answer = $("#answer");

$("#enterKeyboard").on({
    //Triggers event when user submits button from hitting enter on keyboard
    submit: function() {
        event.preventDefault();
        submitButton();
    },
    //Removes .redBorder if invalid from previous input when user presses keys
    keydown: function() {
        if ($("#chirps").hasClass("redBorder") === true) {
            resetBorder();
        }
    }
});

//Triggers event when user submits button from clicking mouse
$("#submitButton").click(function() {
    submitButton();
});

//Removes .redBorder if invalid from previous input when user clicks in input field
$("#chirps").on("click", function() {
    if ($("#chirps").hasClass("redBorder") === true) {
        resetBorder();
    }
});

//Grabs input value from user, declares variables for access to functions called in it
function submitButton() {
    //  Get string from input field, converts to number
    var cricketInput = +$("#chirps").val();
    //Clears input field
    $("#chirps").val("");
    //Passing in cricketInput and calculation() parameters to call invalid function to first check if input is invalid, and if it is not, to perform the calculation()
    invalid(cricketInput, calculation);
}

//1st argument is cricketInput value, second is calculation() passed as callback function
function invalid(cricketNumb, convertChirps) {
    //Checks if number is < 1 or a float as this is invalid data
    if (cricketNumb < 1 || cricketNumb % 1 !== 0) {
        //highlights the input field red to signal invalid input
        $("#chirps").addClass("redBorder");
        //Answer is an empty string, this also resets the answer from previous answers if they were valid
        $(answer).html("");
        //if the cricketStr is valid input - ie >= 1 and not a float, calculation function will execute to convert chirps to temp...
    } else {
        //Checks if convertChirps is a function, and will execute if so
        if (typeof convertChirps === "function") {
            //cricketInput is passed as an arugment named cricketStr, and the calculation function will execute
            convertChirps(cricketNumb);
        }
    }
}
//Converts cricket chirps to Fahrenheit or Celcius based off checked radio button. The parameter being passed is cricketNumb from callback
function calculation(convertCricketNumb) {
    // Calculation to turn chirps into degrees Fahrenheit
    var fTemp = convertCricketNumb + 40;
    //Conversion of F to C, rounded to the nearest 10th
    var cTempRounded = Math.round(((fTemp - 32) * .5556) * 10) / 10;
    //output variable text for calculation
    var message = "The crickets predict the temperature is about ";
    //checks if Fahrenheit is checked -  the radio button's default (from html)
    if (radioF.is(':checked')) {
        //Output of Fahrenheit calculation
        message += fTemp + "&deg;F";
        $(answer).html(message);

        //Celcius calculation
    } else {
        //output of Celsius calculation
        message += cTempRounded + "&deg;C";;
        $(answer).html(message);
    }
}

//Removes .redBorder and is called in event handlers
function resetBorder() {
    $("#chirps").removeClass("redBorder");
}
