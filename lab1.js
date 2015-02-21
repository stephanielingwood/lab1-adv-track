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

 I'm happy to answer any questions on Slack or through the discussions in Canvas. I will post the
 questions I receive and the answers I give to a discussion group in Canvas.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
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
assert(1 === 2, "this is an assertion failure example. 1===2");

/*
 TODO: 8 points
 Invoke assert twice. Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

// I have a membership at the zoo :-)

assert("Komodo Dragon" === "Komodo Dragon");
assert("Turtle" === "Kangaroo", "The strings aren't equal. Also, kangaroos don't have shells.");

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = "More food please.",
    sentence2 = "Come over here so you can scratch my belly.";

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with "chirp" The
 assertions at the end of this section should pass when you're done.  Use
 **two** different kinds of loops to implement this.
 HINT: the "split" method on String will be useful.
*/

function chirpMakerOne(sentence) {
  sentence = sentence.split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = "chirp";
  }
  sentence = sentence.join(" ") + ".";
  console.log("The meerkat says " + sentence);
  return sentence;
}

sentence1 = chirpMakerOne(sentence1);
sentence2 = chirpMakerOne(sentence2);

// Method 2
// Reset sentence values
var sentence1 = "More food please.",
    sentence2 = "Come over here so you can scratch my belly.";

function chirpMakerTwo(theSentence) {
  var i = 0;
  theSentence = theSentence.split(" ");
  while (i < theSentence.length) {
    theSentence[i] = "chirp";
    i++;
  }
  theSentence = theSentence.join(" ") + ".";
  console.log("The meerkat says " + theSentence);
  return theSentence;
}

sentence1 = chirpMakerTwo(sentence1);
sentence2 = chirpMakerTwo(sentence2);

assert(sentence1 === "chirp chirp chirp.", "sentence 1 should have 3 chirps");
assert(sentence2 === "chirp chirp chirp chirp chirp chirp chirp chirp chirp.",
  "sentence 2 should have 9 chirps");

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

nextAnimal = favoriteAnimals[Math.floor(Math.random() * favoriteAnimals.length)];

console.log("The next animal I'm going to visit is the " + nextAnimal);

assert(nextAnimal, "assign something to nextAnimal");

/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ],
    tooHungryDay;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

function lionFeeding(meals) {
  var averageMeal = 0,
      totalMeals = 0;
  for (var i = 0; i < meals.length; i++) {
      totalMeals += meals[i];
      averageMeal = totalMeals / (i + 1);
      console.log("On day " + (i + 1) + " the lion ate an average of " + averageMeal + " meals");
      if (averageMeal < 4) {
        tooHungryDay = i + 1;
        console.log("The lion ate the caretaker on day " + tooHungryDay);
        return tooHungryDay;
      }
  }
}

lionFeeding(mealsPerDay);

assert(tooHungryDay, "don't forget to assign the answer to tooHungryDay");
assert(tooHungryDay < 10, "the lion is too hungry before the end of the array");

/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 run the tools with:
  ./node_modules/.bin/grunt jshint
  ./node_modules/.bin/grunt jscs

or, if you installed grunt globally, you can just type
  $ grunt
   and it will run both.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
