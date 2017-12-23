var userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
  var result;
  result = "";
  for ( var i = 0; i < string.length ; i = i + 1 ) {
    var letter;
    letter = string[i];
    if ( letter === "e" ) {
      // Change here.
      result = result + letter;
    } else {
      // And change here.
      result = result + letter.toUpperCase();
    }
  }
  return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);
var brokenVariable;
brokenVariable = "This will be broken";
var turtlesWithSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
// Use .filter() instead of .pop().
reversedTurtlesWithoutSplinter = turtlesWithSplinter.filter(function(turtle){
  // What is the value of turtle?
  console.log(turtle);
  return turtle !== "Splinter";
}).reverse();
$("#response").html(reversedTurtlesWithoutSplinter);



> var f;
> f = function(){ return "I am a return value." };
> f();
> var makeFullName, hughessFullName;
> makeFullName = function(firstName, lastName){
    firstName + " " + lastName;
  }
> hughessFullName = makeFullName("Langston", "Hughes");
> console.log("Is your name " + hughessFullName + "?");
//--> Is your name undefined?
> var turtles, sortedReversedTurtles;
> turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
> sortedReversedTurtles = turtles.sort().reverse();
//--> ["Raphael", "Michelangelo", "Leonardo", "Donatello"]
> var makeFullName, hughessFullName;
> makeFullName = function(firstName, lastName){
    return firstName + " " + lastName;
  }
> hughessFullName = makeFullName("Langston" "Hughes");
> console.log("Is your name " + hughessFullName + "?");
//--> Is your name Langston Hughes?
> var turtles, sortedReversedTurtles;
> turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
> sortedReversedTurtles = turtles.sort().reverse();
//--> ["Raphael", "Michelangelo", "Leonardo", "Donatello"]
> var turtlesWithSplinter, reversedTurtlesWithoutSplinter;
> turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
> // oops. let's pop() Splinter off before reversing…
> reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();
var userString, upperCaseMinusE, upperCasedString;
// First, we need a string from the user.
userString = prompt("What do you want to UPPeRCASe?");
// Second, we need to create our function.
upperCaseMinusE = function(string){
  // Something will happen here…
};
// Third, we need to pass the user’s string to the
// function and assign the return value to a
// variable.
upperCasedString = upperCaseMinusE(userString);
// And we can then print the string to the webpage.
$("#response").html(upperCasedString);
upperCaseMinusE = function(string){
  if ( letter === "e" ) {
    result = letter;
  } else {
    result = letter.toUpperCase();
  }
};
upperCaseMinusE = function(string){
  for ( var i = 0; i < string.length ; i = i + 1 ) {
    if ( letter === "e" ) {
      result = letter;
    } else {
      result = letter.toUpperCase();
    }
  }
};
upperCaseMinusE = function(string){
  for ( var i = 0; i < string.length ; i = i + 1 ) {
    var letter;
    letter = string[i];
    if ( letter === "e" ) {
      result = letter;
    } else {
      result = letter.toUpperCase();
    }
  }
};
var userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
  var result;
  result = "";
  for ( var i = 0; i < string.length ; i = i + 1 ) {
    var letter;
    letter = string[i];
    if ( letter === "e" ) {
      result = letter;
    } else {
      result = letter.toUpperCase();
    }
  }
  return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);
var userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
  var result;
  result = "";
  for ( var i = 0; i < string.length ; i = i + 1 ) {
    var letter;
    letter = string[i];
    if ( letter === "e" ) {
      // Change here.
      result = result + letter;
    } else {
      // And change here.
      result = result + letter.toUpperCase();
    }
  }
  return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);
upperCaseMinusE = function(string){
  var result, stringArray;
  result = "";
  // Since forEach() only works on arrays, we have
  // to convert the string to an array:
  stringArray = string.split("");
  // Now we call forEach() on stringArray:
  stringArray.forEach(function(letter){
    if ( letter === "e" ) {
      result = result + letter;
    } else {
      result = result + letter.toUpperCase();
    }
  }) // Note the parenthesis!
  return result;
};
var leonardo, donatello, raphael, michelangelo, turtles;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
var leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = ""; // a list of weapons.
$("#response").html(weapons);
turtles.forEach(function(turtle){
  weapons = weapons + turtle.weapon + " ";
})
var leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
  return turtle.weapon;
});
// weapons is now ["katana", "bo", "sai", "nunchaku"]
$("#response").html(weapons);
var leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort();
// weapons is now ["bo", "katana", "nunchaku", "sai"]. Sorted!
$("#response").html(weapons);
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort().join(", ");
// weapons is now "bo, katana, nunchaku, sai". Sorted, with commas.
$("#response").html(weapons);
var names;
names = turtles.map(function(turtle){
  return turtle.name;
}).sort().join(", ");
$("#response").html(names);
var names, namesWithO;
names = turtles.map(function(turtle){
  return turtle.name;
}).sort();
namesWithO = names.filter(function(name){
  return name.includes("o");
}).join(", ");
$("#response").html(namesWithO);
var numbers = [1, 2, 3]
var newNumbers = [];
for(var i = 0; < numbers.length; i+++) {
  newNumbers[i] = numbers [i] * 2
}
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort().join(", ");
// weapons is now "bo, katana, nunchaku, sai". Sorted, with commas.
$("#response").html(weapons);
