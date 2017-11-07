//console.log("Hello!!");
//var name = "Razvan";
//console.log("Hello" + name);

//for (i = 1; i <= 10; i++)
//{
//    console.log(i);
//}

function helloWorld() {
    var greeting = "Hello World"
    alert(greeting);
}

//helloWorld();

function add(a, b) {
    return a + b;
}

console.log(add(2, 4));

//This is just a different way of defining functions, just like the above function.
//var otherFunction = function (a, b) {
//    return a + b;
//}

//console.log(otherFunction(2, 8));

//Write a function that takes in a name and prints "Hello [name]."
//One way
function userName(name) {
    console.log("Hello" + name);
    //return "Hello " + name);
}

console.log(userName(" Razvan"));

//Other way


//this is the updateDiv javascript function used in the html

function updateDiv() {
    var outputString = "Hello and welcome to Raz's webpage.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString+"</p>"
}

function swap() {

    var imageSrc = document.getElementById("swapImage").src;

    if (imageSrc.includes("download")) {
        document.getElementById("swapImage").src = "Images/tiger2.jpg";
    }
    else {
        document.getElementById("swapImage").src = "Images/download.jpg";
    }
    console.log(document.getElementById("swapImage").src);
}

function printArray() {
    var favCharacters = ["Luffy", "Sanji", "Zoro", "Law"];
    var outputText = "<ul>";

    for (i = 0; i < favCharacters.length; i++) {
        outputText += "<li>" + favCharacters[i] + "</li>"
    }
    outputText += "</ul";
    document.getElementById("sectionTwo").innerHTML = outputText;
}