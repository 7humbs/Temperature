'use strict';
//Input id
var $chirps = $("#chirps");
//Radio button for Fahrenheit
var $radioF = $("#F");
$($radioF).attr("checked", true);

//$answer message displays in calculation() or invalid()
var $answer = $("#answer");

//User can submit from keyboard by pressing enter or clicking the submit button
$("#cricketForm").submit(function(event) {
    event.preventDefault();
    $("#submitButton").click();
    submitButton();
});

//Removes .redBorder if invalid from previous input when user clicks or presses keys  in input field
$chirps.on("click keydown", resetBorder);

//Grabs input value from user, declares variables for access to functions called in it
function submitButton() {
    //  Get string from input field, converts to number
    var $cricketInput = +$chirps.val();
    //Clears input field
    $chirps.val("");
    //Passing in $cricketInput and calculation() aeguments to call invalid function to first check if input is invalid, and if it is not, to perform the calculation()
    invalid($cricketInput, calculation);
}

//1st parameter is $cricketInput value, second is calculation() passed as callback function
function invalid(cricketNumb, convertChirps) {
    //Checks if number is < 1 or a float as this is invalid data
    if (cricketNumb < 1 || cricketNumb % 1 !== 0) {
        //highlights the input field red to signal invalid input
        $chirps.addClass("redBorder");
        //$answer is an empty string, this also resets the $answer from previous answers if they were valid
        $($answer).html("");
        //if the cricketStr is valid input - ie >= 1 and not a float, calculation function will execute to convert $chirps to temp...
    } else {
        //Checks if convertChirps is a function
        if (typeof convertChirps === "function") {
            //cricketNumb is passed as an arugment (value of $cricketInput), and the calculation function will execute
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
    //checks if Fahrenheit is checked -  the radio button's default
    if ($radioF.is(':checked')) {
        //Output of Fahrenheit calculation
        message += fTemp + "&deg;F";
        $($answer).html(message);

        //Celcius calculation
    } else {
        //output of Celsius calculation
        message += cTempRounded + "&deg;C";;
        $($answer).html(message);
    }
}

// Removes .redBorder and is called in event handlers
function resetBorder() {
    if ($chirps.hasClass("redBorder")) {
        $chirps.removeClass("redBorder");
    }
}
