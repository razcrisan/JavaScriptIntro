﻿//console.log("Hello!!");
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
