# Conditionals, Loops, and Recursions

In this chapter you will learn:
  - Conditionals (`if-else` statements)
  - Loops (`for` and `while` loops)
  - Recursions - how it's different from loops and functions

Except the last item, you probably have already encountered others earlier in this book. In this chapter, we shall strengthen the concepts by writing slightly more complex code that demonstrates the key ideas. 


## Conditionals

In real life, the process of making decisions involves considering each of the factors that influence the final outcome. Programming is no different, as we often need our programs to carefully consider each of the possibilities that might have an effect on which course of action to take. For example, let us consider an abstracted view of picking up the right career choice for ourselves:

<table>
  <tr>
    <td><strong>How a rational mind decides a career</strong></td>
    <td><strong>How a program can mimic the process</strong></td>
  </tr>
  <tr>
    <td>
      I should learn JavaScript if I satisfy <strong>both</strong> the following conditions:
      <ul>
        <li>I have some amount of aptitude to think methodically and logically</li>
        <li>I have an interest in the World Wide Web.</li>
      </ul>
      Otherwise I should learn something else apart from JavaScript.
    </td>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/ifelsedecisioncode.png" />
    </td>
  </tr>
</table>

When there are more than two conditions to consider, you can chain the `if-else` statements to include all of them.
```javascript
if (condition1 is true) {
  takeAction1
} 
else if (condition2 is true) {
  takeAction2
}
else if (condition3 is true) {
  takeAction3
}
.
.
.
else {
  takeActionN
}
```

> __Switch-Case Statements__: Instead of using chained `if-else` statements, you can also use another powerful method - the `switch-case` statements. Although not covered as part of this book, you can learn about it from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) or [W3Schools](https://www.w3schools.com/js/js_switch.asp).

### NOTE on the Importance of "else" 

It is often observed that programmers omit the `else` statements - they only include the `if` statement and thinks that the else statement is not required. It's an awfully bad practice, and you must never develop that habit. The most important reason behind including the `else` statement is that you control the outcome of the program when the `if` condition is not true. For example, see what happens when you omit the `else` statement in the `should_i_learn_js()` function:

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/shouldIlearnJS_returnsNull.png"/>
    </td>
  </tr>
</table>

Our function returned `null`, because the default value of the variable `focusOnJavaScript` was `null`, and when the conditions failed to pass the `if` statement, our program had no specific instructions for assigning any meaningful value to the variable `focusOnJavaScript`.

In a world of connected programs, where output of one function often becomes input to another, imagine what would happen if the output of `should_i_learn_js()` is passed on to a function that displays the result as HTML in a webpage! The end user sees the cryptic `null`, which does not add value to his quest of making a career choice!


### Example of Nested Conditional Statements

When required, you can nest the conditional statements, as illustrated below:

```javascript
// Another layer of information is added to this object
var infoMatrix = {
  programmingAptitude : {
    goodAtLogic : false,
    loveComputers : true
  },
  interestInWeb: false
};

// Nested if-else block added
function should_i_learn_js(infoMatrix) {
  // The initial decision on whether to learn JavaScript or not!
  var focusOnJavaScript = null;
  // The following if-else block determines whether you should learn JavaScript 
  if (infoMatrix.programmingAptitude.loveComputers == true) {
    if (infoMatrix.programmingAptitude.goodAtLogic == true) {
      focusOnJavaScript = "Yes";
    }
    else {
      focusOnJavaScript = "May be!";
    }
  }
  else {
    focusOnJavaScript = "No";
  }
  return focusOnJavaScript;
};

// Call the function
should_i_learn_js(infoMatrix);
```

<table>
  <tr>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/nestedifelse.png"></td>
  </tr>
</table>


## Loops

One of the key motivators behind writing programs is to automate processes. In other words, significant amount of programming effort goes into thinking about repetitions and redundancies involved in a process. Once we know what repeats, we can employ computers that are excellent at doing repetitive tasks without any error. 

> __Loops__ are programming/algorithmic constructs that provide us a framework to concisely express the action that must be taken as long as the condition for repeating the task is met. 

Think of a scenario where you are watching a Formula 1 race - every time your favorite driver completes on lap, you add `1` to the number of laps completed. If the race consists of 50 laps, your algorithm to get the correct lap count would be:
  1. Let the counter be `num_of_laps`. Initially, `num_of_laps = 0`.
  2. As long as `num_of_laps` is less than or equal to `50`:
      1. Add `1` to `num_of_laps`.
  3. Stop doing the repetitive task when `num_of_laps` is equal to `51`.
  4. Get the final count, i.e., the final value of `num_of_laps`.

If you observe carefully, there are __three fundamental aspects of looping algorithm__:
  1. An entity on the basis of which you determine the repetitive task. In this case, it's the variable `num_of_laps`.
  2. A set of _start_, _continuation_, and _end_ conditions - we have `num_of_laps = 0`, `num_of_laps <= 50` and `num_of_laps = 51` respectively.
  3. A repetitive task to be performed within the boundaries of _start_ and _end_ conditions, i.e, as long as the _continuation_ condition is satisfied. In this example, it's increasing the value of `num_of_laps` by `1`, every time a lap is completed.


### "for" loop

Let's write a JavaScript statement to implement the algorithm:

```javascript
// This is called a "for" loop
for (var num_of_laps = 0; num_of_laps <= 50; num_of_laps++) {};
```

Isn't it a very succinct way of representing the concept? However, this small snippet deserves some explanation for you to clearly understand each of it's components.

  - The entity on the basis of which we loop, and the start condition, is `var num_of_laps = 0`.
  - The continuation condition is `num_of_laps <= 50`.
  - The end condition is `num_of_laps = 51`. 
  - The last repetitive action is `num_of_laps++`. It means increase the value of the variable by `1`.
  - Empty braces `{}` means _"don't do anything"_, but jump directly to `num_of_laps++` - the last action.
  
Generally you will write code within the `{}` to perform repetitive tasks.
For example, if you want to add `10` points for each lap completed, the code will be:
```javascript
var points = 0;
for (var num_of_laps = 0; num_of_laps <= 50; num_of_laps++) {
  points += 10; // Increase the point by 10 before incrementing the counter.
}
```

Understand the above code snippet very carefully, because it conveys the essence of the concept of `for` loops. We shall resort to our favorite technique of thinking like a computer. So assume that you are the computer, and it's your job to do what the code asks you to do. 
  - The first line is `var points = 0`. I know the routine!
      - I have to allocate a memory block for a number data type
      - Store the location as a pointer
      - Associate the block with the string `points`
      - Put `0` inside the allocated memory block
  - Ah, it's a `for` loop... Let me see what I need to do.
      - Set the variable `num_of_laps` to `0`, just like I did for the first line of code. Pretty straight forward! Oh, I see   something even after `;` - it smells like a counter! Let me confirm...
      - I was right - a counter it is! There is a _continuation_ condition `num_of_laps <= 50`. Cool, I will keep that in mind and  check this condition every time I iterate (start over again) through this loop. I know there will be a "last repetitive action" after this, but I will look into it later. Let me check what else I need to do. I'm sure I will get further instructions within the `{}`.
      - Hmm... doesn't seem to be much of heavy lifting - all I need to do is:
          - Read the current value of the variable `points`. Since this is my first iteration, the value will be same as the initial value `0`.
          - Add `10` to the current value. Ok, so `0 + 10` becomes `10`. Similarly, the next time I come to this line of code, I will make the value `20`, and then `30`, and so on. I will continue doing it till I reach the end condition of the loop. Hey human reader... Yes you... You think you are smart and I'm dumb? So tell me, what will be the final value of `points` when I finish looping 50 times? 
          - Overwrite the new value in the memory location. So I erase the old value `0`, and write the new value `10`. In the next iteration, when I read the value of the variable `points`, I will get `10`.
      - No further instructions! Thanks to the programmer... Oh, I almost forgot, I need to perform the last repetitive action that I skipped earlier!
          - I just have to add `1` to the current value of `num_of_points`. That's easy... I have done similar thing just now! I read that the current value of `num_of_laps` is `0`, and I add `1` to it. So the new value of `num_of_laps` is `1`. The next time I come here, I will see 1 and make it 2, and then 3, and then 4, and so on. I will have to do this till I reach the 50th lap, when I will make it `51`. When I read the value `51` and check it against the condition `num_of_laps <= 50`, it's bound to fail and I will exit the loop!


### "while" loop

Let's explore another approach which is slightly verbose:
```javascript
var num_of_laps = 0; // start condition
var points = 0;

// This is called a "while" loop
while (num_of_laps <= 50) { // continuation, or end condition
  points += 10 // Increase points by 10
  num_of_laps = num_of_laps + 1; // last repetitive action
}
```

The `while` loop expresses the same idea as that of a `for` loop, but with a different syntax. Almost all `for` loop statements can be expressed as `while` loops and vice-versa. For some, the `for` loop is intuitive to grasp, while for others it's the `while` loop. However, `while` loops can be disastrous if not handled carefully, as explained in the next sub-section.

#### The danger of "while" loops
The syntax of `for` loops, with clear distinction between the different components of the `start-continue-repeat-end` paradigm, provides a safety net for the less careful programmer. But not the `while` loops! The `while` loop hands over the control to the programmer, and waits for the opportunity to devastate a program. 

`while` loops simply translate into this - "As long as a certain condition is satisfied, continue doing what I have asked for". This sort of instruction to computers can lead to never-ending or infinite loops, thus consuming large chunks of memory or even system crashes. Now let's consider an example where a careless implementation can lead to devastation.

```javascript
// Modify our function to calculate square root
function calcsqRoot(num) {
  while (typeof(num) == "number") { // The danger looms!
    if (num >= 0) {
      console.log(Math.sqrt(num));
    }
    else {
      console.log("Not a good input!");
    }
  }
}

// Next step - call the function and pass an input to it.
// calcSqRoot(your_input_here);
```

Save any work that you have been doing. Copy the function and paste it on the browser's console. Then call the function and pass any real number as an argument to it.

Take a coffee break for 10 minutes. When you return to your computer and try to do something useful, tell me how it feels. Hmm... lesson learned!

### Notes on Increment/Decrement Operations

  - `some_var = some_var + 2` means:
      - Read the value from the memory allocated for `some_var`.
      - Add `2` to that value.
      - Overwrite the allocated memory with the new value.
  - `some_var += 2` means the same thing as explained above - read current value, increment the current value by 2, overwrite the new value! 
  - Similar things happen for `some_var = some_var * 2` and `some_var *= 2` - the only difference is multiplication.
  - `some_var++` is a shorthand for `some_var = some_var + 1` or `some_var += 1`.
  - `++some_var` is a different beast. It means that:
      - First increase the value by 1
      - Then Read the value.


> __Operator Overloading__: This is a complex concept for a beginner, and you can't really understand the "why" behind it until you develop a deep understanding of programming abstractions like `class`, `inheritance`, `object`, `constructor` and `method`. However, it doesn't stops you from getting a glimpse of it, which we shall do by illustrating an example. You might have observed that the `+` operator adds real numbers, _concatenates_ strings (like `"My " + "name"` yields `"My name"`), and so on. Now think about it - how is it possible that the same `+` operator performs different things on different data types? Such behaviors are outcome of what we call _operator overloading_ in languages other than JavaScript. __*Please note that although the ECMA6 standard have proposals for operator overloading, JavaScript did not supported the generalized concept of Operator Overloading*__. Advanced readers can see [this](https://stackoverflow.com/questions/19620667/javascript-operator-overloading) and [that](https://www.keithcirkel.co.uk/proposal-operator-overloading/) for some more information (I know "this and that" is wrong English, so suck your lecture back). 

### Notes on Iteration

We have already discussed different facets of `iteration` informally. In this sub-section, you will learn about the core concepts of `iteration`.

> The `for` and `while` loops are agents of `iteration`, where an `iterator` is an entity that traverses the journey of loops by shifting its association with different items of the `iterable`. 

The above statement, although correct, is quite abstract and difficult to understand. Let's consider an example that illustrates the concepts. __Read the comments accompanying the code__ carefully - the explanations are embedded there.

```javascript
// Example to understand the concept of iteration

/*
Consider an array, which is nothing but an indexed list of item.
Unlike lists, each item in an array has an index.

++++++++++++++++++++++++++++++++++
An array is an iterable entity, since we can iterate through its different elements
++++++++++++++++++++++++++++++++++

In JavaScript and many other programming languages, the starting 
index is 0 (zero). To generalize, the 'k'th item has index (k-1).
Thus if an array has N items:
  - The first item has an index 0
  - The second item has an index 1
  - The third item has an index 2
  .
  .
  .
  - The (N-1)th item has an index (N-2)
  - The Nth item has an index (N-1)
*/

function itemLengthCalculator(someArray) {
  var nameLengths = {}; // This empty object will eventually be filled with items and their lengths.
  for (var indx = 0; indx < someArray.length; indx++) { // "indx" is our iterator
    // The general syntax to access an item is "array[index_of_item]"
    // "indx" iterates through each element of the array
    var itemString = someArray[indx]; // Array is an iterable entity;     
    // "itemString" contains a string, which has 'length' method
    var noOfCharsInString = itemString.length;   
    // Adds a property and its value to the object, or modifies for an existing property
    // The general syntax is object[property] = value
    nameLengths[itemString] = noOfCharsInString;
  }
  return nameLengths;
}


var dataVizLib = ["FusionCharts", "HighCharts", "D3"]; // An array with 3 items.

itemLengthCalculator(dataVizLib); // Call the function and pass the array "dataVizLib"

```

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/iterationExample.png"/>
    </td>
  </tr>
</table>


## Recursion

There are two ways of solving the problem of repetition - `iteration` and `recursion`. If implemented carefully (_without falling into the trap of infinite loops or never-ending recursive calls_), recursions produce elegant and concise solutions to many complicated problems.

Let's understand recursion by revising our high school mathematics! I'm sure you remember _factorials_, and if don't, here's the reminder:

> __Factorial__ of positive integer N is defined as the consecutive product of all other non-zero positive integers starting from 1 and leading all the way up to N. In other words, `factorial N = 1 x 2 x 3 x 4 x ... x N`. If you observe carefully, you will find that we can rewrite the expression as `1 x 2 x 3 x ... x (N - 1) x N`. The first `(N - 1)` terms is, by definition, `factorial (N - 1)`. Thus we obtain a very powerful way of expressing the whole thing: `factorial N = factorial(N - 1) X N`. _As a special case, `factorial 0` is defined as `1`_. Interestingly, `factorial 1` is also `1`!

__Recursive functions involve two aspects__:
  - One or more __base cases__, which does not conform to any pattern. In case of factorials, it is the factorial of `0` and `1`.
  - A __pattern__ that underlies the rest of the cases. In most cases, the pattern can be clearly expressed as lower instances of the same function, and as such, the function is dependent on it's lower versions. For factorials, it is `factorial N = factorial(N - 1) X N`.

Now let's delve into the code for implementing the recursive function of factorials.

```javascript
function factorial(num) {
  /*
  For the sake of simplicity, we skip the input sanity check
  Instead, we assume that the argument will be a no-negative integer
  For production quality code, such shortcuts are not at all recommended
  */
  var fact = null;
  if (num === 0) {
    fact = 1;
  } 
  else {
    // See how a function is calling itself!
    fact = num * factorial(num - 1) // Crux of recursion - a function calls a lower version of it.
  }
  return fact;
}

```

> You can __learn__ about implementing the `factorial()` function using the `while` loop in the [Microsoft documentation page](https://docs.microsoft.com/en-us/scripting/javascript/advanced/recursion-javascript), and also a bit about __how people react to bad code__ from a comment at the bottom of the page. If you want to grasp the mathematics behind it (which I wholeheartedly recommend), read the first chapter of Donald Knuth's book [Concrete Mathematics](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/Concrete_Mathematics_2e.pdf).

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/fact2.png"/>
    </td>
  </tr>
</table>

> __Errors are important__ clues to learn more about programming and the language you are using. In the above image, I deliberately included some errors by passing a negative integer to the function. You can see all hell breaks loose when you don't implement mechanisms to do the sanity check of inputs.

```
EXERCISE
========
1. Write a function "fib(num)" to get all the Fibonacci Numbers appearing before a given number. 
   The function should discard    any input apart from the valid ones. You can learn about 
   Fibonacci Numbers from Wikipedia: https://en.wikipedia.org/wiki/Fibonacci_number
   
2. BONUS PROBLEM - Write a function "steps()" to solve the Tower of Hanoi puzzle. You can learn 
   more about it from Wikipedia: https://en.wikipedia.org/wiki/Tower_of_Hanoi
   There are further legends along the same line, which you can explore:
    * http://larc.unt.edu/ian/TowersOfHanoi/index64.html
    * https://www.codechef.com/problems/CDWY02
```

[__<<= Your First JavaScript Program__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/4_your_first_javascript_program.md)

[__Objects and Arrays =>>__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/6_objects_and_arrays.md)
