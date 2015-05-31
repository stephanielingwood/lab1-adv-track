'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

assert(1 === 1);
assert(1 === 2, 'this is an assertion failure example. 1 === 2');

/*------------------Assertions-------------------------------------------------
 TODO: 8 points
 Invoke assert twice. (In other words, create two assertions like the ones above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

//your code goes here

assert('tapir' === 'tapir');
assert('tapir' === 'monkey', 'A tapir is not a monkey.  You done goofed up.');

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.  Use
 **two** different kinds of loops to implement this. (10 points each.)
 HINT: the 'split' method on String will be useful.
*/

var sentence1 = 'More food please.';
var splSent1 = sentence1.split(" ");

for (var i = 0; i < splSent1.length; i++) {
  splSent1.splice([i], 1, "chirp");
}

var sentence1 = (splSent1.toString().replace(/,/g, ' ')) + ".";

//---//

var sentence2 = 'Come over here so you can scratch my belly.';
var splSent2 = sentence2.split(" ");
var i = 0;

while (i < splSent2.length) {
  splSent2.splice([i], 1, "chirp");
  i++;
}

var sentence2 = (splSent2.toString().replace(/,/g, ' ')) + ".";

//

assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

var nextAnimal = favoriteAnimals[Math.floor(Math.random() * favoriteAnimals.length)];

assert(nextAnimal, 'assign something to nextAnimal');

/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

// your code goes here

// mealsPerDay is not monday, tuesday, etc.
// cycle through array, finding the average each cycle, add index by index,
// and once the average drops below 4 the caretaker has been eaten
// tooHungryDay needs number of days before the lion ate caretaker (day before avg < 4)

// add indexes together and push to new array
// stop when index value < 4

// if (
//   // value of mealsPerDayNewVariable > 4
//   ) {
//   // avg of array indexes
// } else {
//   var tooHungryDay = //'Day ' + (mealsPerDayNewVariable.length - 1);
// }

// push to new, sum of new, avg

// var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
// var tooHungryDay;
// var sum = 0;

// for (i = 0; i <= mealsPerDay.length; i++) {
//   var myArr = [];
//   myArr.push(mealsPerDay[i]);
//   for (var i = 0; i < myArr.length; i++) {
//     sum += parseInt(myArr[i], 10);
//   }

//   var avg = sum/myArr.length;
//   console.log(avg);
// }



//

// for (i = 0; i < 11; i++) { through the indexes of myArr.length - i }

// for (i = 0; i < mealsPerDay.length; i++) {
//   console.log('Day ' + (i + 1));
// }

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');

/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
