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

assert('giraffe'.length === 'meerkat'.length, 'this test passes because both strings are the same length');
assert('giraffe' === 'meerkat', 'this test fails because they are different strings');


//your code goes here

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

//your code goes here

//This functions takes a string parameter and changes all of the words to chirp
var translateToMeerkat = function(sentence) {
  //splits sentences
  sentence = sentence.split(' ');

  //changes each sentence array value to 'chirp'
  for (var i = 0; i < sentence.length; i++) {
  sentence[i] = 'chirp';
  }

  //strings array back to one string
  var chirpString = '';
  var chirpCount = 0;
  while (chirpCount < sentence.length) {
    chirpString += sentence[chirpCount];
    if (chirpCount === sentence.length - 1) {
      chirpString += '.';
    }else {
      chirpString += ' ';
    }
    chirpCount++;
  }
  return chirpString;
};

sentence1 = translateToMeerkat(sentence1);
sentence2 = translateToMeerkat(sentence2);
console.log(sentence1);
console.log(sentence2);

assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = [ 'elephant', 'penguin', 'eagle', 'camel' ];
var nextAnimal;

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick
// your code goes here
var randNum = Math.floor(Math.random() * 4);
nextAnimal = favoriteAnimals[randNum];
console.log(nextAnimal);

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
var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ];
var tooHungryDay;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/
var totalMeals = 0;
var firstTimeHungry = true;
// your code goes here
for (var i = 0; i < mealsPerDay.length; i++) {
  //calculates the average and prints the day and average
  totalMeals += mealsPerDay[i];
  var averageMeals = totalMeals / (i + 1);
  console.log('Average meals/day for day ' + (i + 1) + ' = ' + averageMeals);
  //if statement to check if average meals is below 4 and if its the first time
  if (averageMeals < 4 && firstTimeHungry) {
    tooHungryDay = i;
    console.log('Day ' + (i + 1) + ' is hungry day');
    firstTimeHungry = false;
  }
}

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
