# Your First JavaScript Program

If you have read the previous chapters carefully, then you should know the following:
  - Some generic programming best practices    
  - Variables    
  - Memory locations, manipulation and management     
  - Data Types - general as well as in context of JavaScript  
  - Functions
  - Utility of comments, and how comments are given in JavaScript    
  - Console mode of the interpreter   

The purpose of introducing you to those concepts is to prepare a strong foundation for programming. Even without writing a single line code yourself, you are in a position to think deeply about solving problems using programs, and also debug your programs analytically. 

> __Debugging__ is the activity of figuring out what's wrong with your program in terms of syntax, logic, dependencies, etc. You will debug a lot in course of your journey to become a programmer - be mentally prepared for arduous sessions. In fact, a lot of exercises you will encounter in this booklet will involve analytical debugging, which is one of the best ways to forge a deep understanding of your programs and the environment in which they execute.

In this chapter, you will learn the following:    
  - Where to write JavaScript code        
  - Some trivial examples of JavaScript code    
  - Some generic techniques for program flow and control    

## Where to write JavaScript code

Based on the situation you will be in, you might write JavaScript code in one or more of the following places:    
  - The `interactive console` of the interpreter embedded in browser    
  - A `.html` file    
  - A `.js` file   
  
> __NOTE__: Except when we discuss client-side JavaScript, we will write code either in the console (which is ideal for testing out concepts), or in `.js` files (which is ideal for saving the code yo wrote and refer to it later).

### Interactive Console
Although all modern browsers provide a console, in this booklet we shall follow the console provided by Google Chrome. I have no particular reason for adopting it, except that it is highly popular and has a very nice interface for other tasks involved with JavaScript programming. I would recommend that you use it too, but ultimately it's up to you to decide. 

To find the console on Google Chrome:
  1. From Chrome's Menu (the three vertical dots at the same level of the URL bar), navigate to __More Tools > Developer Tools__.
  <table>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/chromeMenu.png"/>
      </td>
    </tr>
  </table>
  
  2. Click the __Console__ tab.
  <table>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/consoleImageChrome.png"/>
      </td>
    </tr>
  </table>
  
  > __NOTE__: When you get any error on the console and need to debug, navigate to the __`Sources`__ tab beside __`Console`__.
  
### HTML file
There are two ways to include JavaScript code in a `.html` file - _inline_, and _pointer to another `.js` file_. Both the approaches are shown in the following snippet:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Basic JavaScript Demo Page</title>
  
    <!-- The following line of code shows you can ask the browser to load a 
    "JavaScript file" even before the content of the page, i.e., the html 
    is loaded. You can point the browser towards a JavaScript file by passing
    the path to your file as a value for the "src" attribute of the "script" tag.

    However, such activities of the browser often makes the 
    page load painfully slow, and is thus not recommended unless absolutely
    necessary. As a best practice, load javascript files after the content 
    has been loaded, by placing them near the end of the "body" tag. -->
  
    <script type="text/javascript" src="dependency/fusioncharts/js/fusioncharts.js"></script>
  
  </head>
  
  <body>
    <h3>JavaScript Demo</h3>
    <button id="time" onclick="myFunction()">See Current Time</button>
  
    <!-- The following line of code shows usage of inline JavaScript,
    which is appropriate when you code snippets are small. 
    Don't worry even if you don't understand the meaning of the code. -->
  
    <script>
      function myFunction() {
        document.getElementById("time").innerHTML = Date();
      }
    </script>
    
    <!-- The following line of code shows a best practice of loading JavaScript files 
    after the content is loaded -->
  
    <script type="text/javascript" src="dummy.js"></script>
  
  </body>
</html>
```
```
Exercise
========
Copy the above code and save it as an html file.
Comment out the lines of code where external JavaScript files are referenced.
Open the file on browser and click on the button that you see on the webpage.
Do you like what you see? Jot down what improvement you would like to have.
Go back to the html source code, read it very carefully and think about what
you see on the webpage. Can you relate parts of the code with the final outcome?
Which part of the code does what? How can you modify the behavior of the button?
```

### JavaScript file

Outsourcing the JavaScript code to a file and the referencing it from the `.html` file using the `<script></script>` tag makes sense, because it keeps the `.html` file clean and readable. An example of such usage is given below:
```html
<!DOCTYPE html>
<html>
  <!-- This html file contains just a button.
  It references a JavaScript file called "main.js"-->
  <head></head>
  <body>
    <script type="text/javascript" src="main.js"></script>
    <button id="time" onclick="myFunction()">See Current Time</button>
  </body>
</html>
```
> __NOTE__: Notice carefully the usage of the `<script></script>` tag in the above html - the external JavaScript file is loaded before any html content, like the button. The reason is that we want to control the behavior of the button when it is clicked. As you can see, the `button` element has an `onclick` attribute, which is technically an __event listener__. The value of the `onclick` attribute is an entity which is not defined in the rest of the html file, but is defined in the external JavaScript file referenced from the `script` element. Therefore, for the browser to know what the value `myFunction` means, it must have its definition readily available even before it encounters the `button` element in the html. In such cases, it is absolutely necessary to reference an external JavaScript file before the html element dependent on it is loaded. Such technicalities of client-side scripting are deeply rooted in the concept of [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

```javascript
// This is the main.js file
function myFunction() {
  document.getElementById("time").innerHTML = Date();
}
```

```
EXERCISE
========
What does DOM stands for?
Research on "DOM" and "event listeners" and prepare your own conceptual notes. 
It will be invaluable to have a good mental model of how DOM is created, and 
what are role does event listeners (and other things of the same breed, like 
"event handlers") play in the interactivity of your web pages. 
Essentially, all of front-end web development is DOM manipulation in some form 
or the other. So how exactly is DOM related to the concept of call stack? 
What is the relationship between the interpreter and the DOM?
```

#### Tools for Coding
While browser consoles are adequate as a playground, no serious coding can be done without a good text editor, or even better, an IDE (Integrated Development Environment). It is strongly recommended that you pick __any one__ of the following and master it while you learn coding:
  - [Sublime Text](https://www.sublimetext.com/)    
  - [Atom](https://atom.io/)    
  - [Visual Studio Code](https://code.visualstudio.com/)(you can also use the behemoth IDE [Visual Studio](https://www.visualstudio.com/), but that amount of firepower will rarely be required in the initial stages)    
> You can also use the online tool [JSFiddle](https://jsfiddle.net/) to test some concepts quickly or demonstrate an idea using small code snippets.


## Some Trivial Programs

### Hello World!
Keeping the tradition intact, write your first JavaScript program.
  1. Go to the browser console, type the following lines of code, and hit Enter.
      ```javascript
      console.log("Hello, World!");
      ```
  2. You will see that the console returns the string `Hello, World!`.
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/consoleLog.png"/>
          </td>
        </tr>
      </table>
 
      > `console.log()` is just like the `print` or equivalent statements found in almost all major programming languages. All it does is printing the value you have passed to it (within the parenthesis) on the console. Experiment with `console.log` as much as you want. I have done some for you - see the image above.
      
The single line of code that you wrote just now might be trivial, but it is powerful enough to illustrate some of the key concepts in JavaScript, and programming in general. We shall dissect each and every element of the code to understand what they do, and how they fit in the big picture. You will learn more about the elements in the subsequent chapters dedicated to the concepts they represent.
  1. `console` - It is a representative of the king in the JavaScript world - _Object_. Objects in JavaScript represents entities programmatically, and sometimes they are so beautifully designed that they represent physical entities. _Objects_ have _properties_ or characteristics, and they also have _methods_ or capabilities. For example, we can construct a _programmer_ object, and give a property _favouriteLanguage_ whose value is _JavaScript_. We can also give it methods or capabilities like _design()_, _writeCode()_, and _debugCode()_. 
  2. `.` - Read as "dot", this notation is extremely powerful and pervades major programming languages like JavaScript, Python, C++, Java, C#, etc. It sits between an object and the invoked method, and denotes the association of the two. In our case, it sits between the object _console_ and its method _log_. The combination _console.log()_ is therefore an instance of the generic concept of _object.method()_, and means that the method _log()_ associated with the object _console_ is invoked when the expression is evaluated by the interpreter.
  3. `log()` - As discussed, _log_ is the name of a method associated with the object _console_. Methods are functions associated with objects that gives them capabilities to do certain things. Functions are programming constructs very similar to Mathematics, where you pass an input to it and it produces an output. In our case, you pass a value to _log_ within the _()_, and it prints the same value on the browser's console. 
  4. `;` - The semicolon at the end of a statement or expression indicates its termination. It's a common characteristic that you will find across many programming languages. There are some cases where you can get away without using it, but you are better off using it always rather than remembering the cases where it's not mandatory. 
  
### A Simple Function

In this example, we shall write a function to find the square root of a number you pass on to it. At the same time, you will see how not thinking about the edge cases can be dangerous!    

Here's the first version of the function:
```javascript
/*
As mentioned earlier, sensible names of functions, parameters,
objects, and other programming constructs goes a long way in 
making the code readable and contextual.
*/
function calcSqRoot(num) { // Notice the function name - it's called camelCase.
  var sq_root = Math.sqrt(num); // Such variable_names_can beMoreReadable.
  return sq_root;
  };
```

Let's break down our little function and inspect it's different components, especially those that has not been discussed yet in this book:    
  1. The keyword `function` initializes a function with a name that we give, which in this case is `calcSqRoot`.    
  2. The function accepts value corresponding to the _parameter_ `num` as its _argument_ or input value, when the function is called. At the time of defining functions, we also define its parameters. Generally, we can construct a function with as many parameters as we want. The general form is:     
  ```
      function functionName(parameter1, parameter2, ...) {
        functionBody   // write your logical code here, within the braces {}
      };
  ```
  3. The `Math` object has a method `sqrt()`, which computes the square root of real number passed on to it.
  4. By definition, functions in JavaScript must produce an output (except when it is in the form of a method associated with a constructor definition). In technical parlance, it must return a value. The `return` keyword, followed by a suitable entity, determines what should the function yield as an output. In our example, the function returns the square root of the number we pass on to it.

#### Calling a Function 
Once we write our function, we can _call_ (invoke) it and pass a value corresponding to the _parameter_. Here's an example:
```javascript
calSqRoot(41); // Evaluates to 6.4031242374328485
```
<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/sqRootFunction.png"/>
    </td>
  </tr>
</table>   

```
EXERCISE
========
What would happen if we call a function without defining it? Try it out!
What did you see? What do you think such messages are called?
Can you think of any other such messages? Try to find some more.

"Math" is an object, but we never defined that object anywhere in our code.
However, it did not stopped us from using it. Logically, this implies that 
the Math object is something predefined - something we can use readily.
What are such things called? Are there more like this? Who defines these?
Where do they live, or how/from which layer of abstraction can we access them?
```

> __Statements__ and __Expressions__: This is a common topic in all programming languages, but at the same time beginners often lack a proper understanding of their meaning and difference. __Expressions__ are those pieces of code that evaluates to something. In other words, when an _expression_ gets interpreted, a value is returned. For example, `calSqRoot(41);` is an _expression_, because it returns a number. On the other hand, __statements__ are those lines of code that might trigger memory management activities or dictate the control flow of the program, but does not evaluate to anything. For example, `var sq_root = Math.sqrt(num);` is a statement that triggers memory management, but does not return any value. Off course, you may argue that the console returns _undefined_ for the statement we discussed. The reason for such strange behavior has already been discussed [earlier in this book](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/3_primitive_and_reference_types.md#strange-behaviour-in-the-console-mode).    

> __NOTES on Naming Conventions__: Each and every programming language has its own quirks about naming the programming constructs like variables, functions, and objects. JavaScript is no exception to this rule, and you can always memorize a bunch of rules about nomenclature. However, I assure you that remembering three things will keep you safe from troubled waters - names should be simple, make sense, and not start with numbers or special characters. There is also another restriction of not mixing JavaScript keywords with variable names. For example, don't write code like `var Array = [];`, as _Array_ is one of the reserved keywords for which the JavaScript interpreter have special significance. Apart from this, you will become more wise about nomenclature when you learn about _variable scopes_ in the next chapter.

#### Testing a Function
Now that we have defined and called our function while passing a legitimate input (a real number), let us experiment with other kinds of inputs as well! While pure computer science gives you mathematical frameworks to prove that your code is correct and robust, testing your code with myriad inputs is the practical way to ensure that your code works _reliably_. 

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/testingFunction.png"/>
    </td>
  </tr>
</table>

> Seems like we are done here - we have tested our functions with all possible types of inputs, and have tried to understand the results. Also, we have made some interesting observations and raised some good questions. Always do such things with your code - this is the only way to learn about programming, and the programming language as well.    

#### Improving the Function
We have travelled quite a distance since we wrote our function. But is our definition of the function adequate? Think of a situation where your program is getting its input from values submitted by a curious user through an html form. The user submits a value, your program processes it, and the output is displayed back on the webpage. For a non-technical user, will `NaN` make any sense? In such cases, it is the programmer's responsibility to think ahead of the situation and include mechanisms in the code so that a meaningful output is returned. Let's explore one of the very obvious ways to improve our code.    

```javascript
function calcSqRoot(num) {
  /* 
  The function should execute only if the input is a non-negative number.
  Otherwise, it should return a message that is easily understood.
  */
  if ((typeof(num) == "number") && (num >= 0)) {
    return Math.sqrt(num);
    /*
    typeof() is a function that returns the data type of value passed on to it.   
    "&&" means logical AND operation. In other words, it means an expression 
    containing two parts is true if and only if both the parts are true.
    Here, the two parts are typeof(num) and (num >= 0).
    */
    }
  else {
    var error_message = "Invalid input! Try with a non-negative number!";
    return error_message;
    }
  };
```

Although there are some usages of _conditionals_ (the __if-else__ blocks) to which you haven't been formally introduced, the code is quite self-explanatory and you should be able to understand the logic we are trying to build. Let's see how our improvement fares against the different possible inputs.

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/improvedFunction.png"/>
    </td>
  </tr>
</table>  

We are doing good, aren't we! Our function has improved quite a bit - it is gracefully filtering out all inputs except a non-negative number, and is also returning meaningful error message instead of the cryptic `NaN`.     

However manually testing a function with all sorts of possible input, every time it is modified, is a bit time consuming and stupid at the same time. We should think of automating the testing of our function. How can we do that? Let's explore in the next sub-section.

#### Writing Unit Test
Functions are, by definition, packets of logic that we repeatedly need to execute. Can we, therefore, write a function to test our function automatically? Sure we can! Also, when we automate tests for each unit of code we write (our square root calculating function can be considered as a unit), we call it _unit test_. Here's our function that can unit test the square root calculator:
```javascript
function test_calcSqRoot() {

  var test_inputs = [999999, 0.0065, 0/0, -1.8/0, -2, -0.7, 
                    "test", true, false, null, undefined];  
                    
  for (var input in test_inputs) {  
    var result = calcSqRoot(input); // calcSqRoot() is called for each item in the array
    var error_string = "Invalid input! Try with a non-negative number!"; 
    
    /*
    We must be very sure of the input!
    Don't get scared by the chaining of logical AND and OR operations
    The symbol && stands for logical AND; a chain of && is true iff every part is true.
    The symbol || stands for logical OR; a chain of || is true if any one part is true.
    */
    var expected_input_condition = (typeof(input) == "number") 
                                  && (input >= 0)
                                  && (typeof(result) == "number") 
                                  && (result == Math.sqrt(input));    
                                  
    var unexpected_input_condition = (input < 0) 
                                    || (typeof(input) != "number") 
                                    && (result == error_string);
    
    // The test input can either be a non-negative real number (expected input), or anything unexpected.
    if ((expected_input_condition) || (unexpected_input_condition)) {
      return "OK; test pass.";
    }
    else {
      return "Test FAIL!";
    }
  }
};    
```

The next step would be to call the unit test function so that it can tell us about the correctness of the square root calculator. Two situations can arise, and in both the cases we show how effective unit tests are!
> __NOTE__: For illustration, we have shown the unit test function twice, but in practice you have to write only once!    

<table>
  <tr>
    <td><strong>Test Pass<strong></td>
    <td><strong>Test Fail<strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/unitTestPass.png"/></td>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/unitTestFail.png"/></td>
  </tr>
</table>

#### Functions as First Class Citizens
In JavaScript, functions can be passed as arguments to other functions, and are therefore colloquially called first-class citizens. The code snippet below illustrates the point.

```javascript
// The functions written below are really stupid and does not make much sense.
// They exist only for the purpose of illustration.
// Please come up with smarter examples of your own.


// This function takes the x, y, and z coordinates of a point as arguments, and returns an array.
function point(x, y, z) {
  var arr = []; // This array will finally contain the coordinate values
  arr[0] = x; // The first element is the x coordinate; similarly 2nd for y, and 3rd for z
  arr[1] = y;
  arr[2] = z;
  return arr;
}

// This function takes an array (containing 3 real numbers as elements) as argument, and returns
// the distance of the point from the origin.
function distance_from_origin(suitable_array) {
  var x_coord = suitable_array[0];
  var y_coord = suitable_array[1];
  var z_coord = suitable_array[2];
  var distance = Math.sqrt(
                            (x_coord * x_coord)
                          + (y_coord * y_coord)
                          + (z_coord * z_coord)
                          );
  return distance;
}


// Call the function for distance and pass the function for point as its argument.
var dist = distance_from_origin(point(-1, 3, 8));
dist; // Evaluates to 8.602325267042627
```



[__<<= Primitive and Reference Types__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/3_primitive_and_reference_types.md)    

[__Conditionals, Loops, and Recursions =>>__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/5_conditionals_loops_recursions.md)
