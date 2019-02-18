///////////////////////////////////////
// Lecture: Hoisting

// SO this is Hoisting. ON the creation phase of the execution context, the function is already defined.
// There fore the function is already available to the developer even before the line of the function.

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// The only way to create new scopes is through creating new functions.
// Lexical scoping: basically nested scopes, have access to eachother?





// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a);
}

console.log(window.a);


///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
}










