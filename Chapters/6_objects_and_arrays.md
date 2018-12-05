# Objects and Arrays

> __NOTE to Readers__: From this chapter onward, there will be less textual explanation that what you have seen before in this book. Instead, you are expected to learn from the code and the comments. Building this habit will serve you extremely well, no matter you are writing code or writing about code. As an author, I will give my best to make the code self-explanatory in terms of structure, names, and comments.

## Objects

JavaScript being a so-called "object-oriented" language, the concept of objects are central to good understanding of JavaScript code. 

One way to look at objects is to interpret with its literal meaning. In that sense, objects are everything in the physical world as well as within programs that has:
  - __`Properties`__: These are nothing but characteristics. For example, an object `human` can have properties like `num_of_limbs`, `num_of_sense_organs`, etc. Properties does not makes sense without values, and so every property in an object has a value. For our `human` object, the property `num_of_limbs` should be given value `4`, and the property `num_of_sense_organs` should have the value `5`.
  - __`Methods`__: These are actions or defined procedures that bestows behavior on an object. The `human` object can have methods like `move()`, `eat()`, `sleep()`, and `code()`. Methods are basically functions associated with the objects, and the usual rues of defining functions applies to methods too.
  
> __`Properties`__ and __`Methods`__ of objects can either be defined as their __`own`__, or can be __`inherited`__. Think of the analogy where human babies can be programmatically represented as objects. They develop certain characteristics (properties) and skills (methods) that are different from their parents, and are therefore their own! On the other hand, they also inherit a vast amount of characteristics and skills from their parents.

In JavaScript, the most common ways to initialize an object are:

```javascript
// Using braces {}
var emptyObject = {}

// Using the "new" keyword
// Find the "Behind the scenes" for this statement in the next chapter
var anotherEmptyObject = new Object(); 

// Most common way to write objects
var human = {num_of_limbs : 4, num_of_sense_organs : 5}
```

Objects can be _nested_ and _heterogenous_, i.e., an object can have multiple levels of other objects and arrays as values.

```javascript
/*
The general syntax of object is: 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var some_object = { // Indentation not part of syntax, but contributes to readability
                    property_1 : value_1,
                    property_2 : value_2,
                    .
                    .
                    .
                    // Don't put "," (comma) at the end of last property's value
                    property_n : value_n  
                  };
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Notice the indentation; good indentation is similar to good handwriting!
var human = {
              states : ["alive", "dead", "not_born_yet"],
              gender : ["transgender", "female", "male"],
              senses : {
                          num : 5,
                          names : [                  // This is an array
                                    {eyes : 2},      // The array has objects as items.
                                    {ears : 2},
                                    {nose : 1},
                                    {tongue : 1},
                                    {skin : "not_quantifiable"}                                      
                                  ]
                        }
            };
            
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Although you can write properties of objects just like any other ordinary word,
if you use any of the JavaScript keywords as a property, you must place it within
quotes, like you would write a string literal. The example below demonstrates the 
concept.

Off course, you can wrap any other non-conflicting property within the quotes.
However, when the object containing such a property is printed on the console,
the property within quotes is treated just like any other property.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

var book = {
            topic : "JavaScript", // normal property without quotes
            "for" : "beginners", // keyword used within ""
           };
            
```

```
EXERCISE
========
In an object, a property and its value is demarcated by " : " (spaceCOLONspace).
What happens when you erroneously put "=" instead of " : "?
Try it out in the console and think about the error.
```

### Most Common Actions for Object Manipulation

The code snippets below demonstrates some of the most common actions that are applicable for JavaScript objects. To fit the purpose of illustration, we shall use an empty object `var human = {};`.
  - __`The Big Bang Moment`__ 
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/emptyObjectBigBang.png"/>
          </td>
        </tr>
      </table>
      
  - __`Add properties and values`__
      ```javascript
      // General syntax
      object.property = value; // The value might be anything permissible in JavaScript
      ```
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/addProperty.png"/>
          </td>
        </tr>
      </table>
      
      > __Find out what happens when you try to add a property that already exists in the object.__
      
  - __`Query values of properties`__
      ```javascript
      // General syntax
      
      // For console mode
      object.property;
      
      // When used in full-fledged programs
      var propVal = object.property; // Value of property gets stored in the variable
      console.log(propVal); // Optional; only if you want the value to be printed on the console
      ```
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/queryProperty.png"/>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/queryNestedValueForArray.png"/>
          </td>
        </tr>
      </table>
      
      > __Find out what happens when you query a property that does not exist.__
      
  - __`Set/Modify values of properties`__
      ```javascript
      // General syntax
      
      /*
      Remember that for modifying a property's value, the property must exist.
      If not, the code will be interpreted as "a new property and its value must be added".
      */
      object.property = newValue;
      ```
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/modifyProperty.png"/>
          </td>
        </tr>
      </table>      
      
      > __Observe in the output there are lines like `states : Array(4)`, followed by lines like `0: "unborn"`, `1: "alive"`, etc. What do they mean? Keep your eyes and ears open for such information that the console often provides.__      
      
  - __`Delete properties`__
      ```javascript
      // General syntax
      delete object.property;
      ```
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/deleteProperty.png"/>
          </td>
        </tr>
      </table>      


```
EXERCISE
========

1. Although not explicitly demonstrated above, you can also write code to test existence 
   of properties and also to enumerate properties. Find out how.

2. Is any of the actions mentioned above any different for inherited properties versus own 
   properties? Prepare your own comparative analysis.

3. We discussed a bit about properties, but what about methods? Can we perform those actions 
   on methods associated with an object? Does the results differ for inherited versus own 
   methods (for example, toString() is a method that every object inherits)?
   
4. Write a function "merger(object_1, object_2)" that takes two objects as arguments and merges
   them. For example, if objects are {prop1 : "val1"} and {prop2 : "val2"}, then the resultant 
   should be {prop1 : "val1", prop2 : "val2"}.
```


##### Objects as Associative Arrays for Programmatic Manipulation

The value of a property in a JavaScript object can be accessed using any one of the following notations:
  - __`object.property;`__
  - __`object["property"];`__

The first method is the generalized syntax using the `.` (dot) notation, and you are quite familiar with it. When you use this notation, the name of the property is accessed as an __*identifier*__. As with identifiers, they have to be handled manually as they are not amenable to programmatic manipulation. This poses a severe bottleneck for programmatic manipulation of objects and their properties.

> You can learn more about __identifiers__ and other syntactic details of JavaScript from this [page on W3Schools](https://www.w3schools.com/js/js_syntax.asp).

Such limitations can be dealt with by using the second notation, which is essentially the `[]` (array) notation. In this notation, __*the property name is expressed as a string, which is a javaScript data type and is therefore amenable to programmatic manipulation*__. In this sense, JavaScript objects are similar to __associative arrays__ or __hash maps__ in other programming languages. 

<!--table>
  <tr>
    <td><strong>The limitation of the . notation</strong></td>
    <td><strong>How to make properties amenable to programmatic manipulation</strong></td>
  </tr>
  <tr>
    <td>
      <img src=""/>
    </td>
    <td>
      <img src=""/>
    </td>
  </tr>
</table-->


## Arrays

At the physical level, an array is a series of memory locations. You have already seen and written code involving arrays, and are expected to know the basics. In this section, we will primarily discuss about the various actions that involves arrays. The material is presented in a code-centric approach, where the code and the comments speak for themselves. Also, the console screenshots are absent in this section. Instead, you are expected to run the code snippets and see the results for yourself in the console.

  - __`Create Array`__
  ```javascript
  var emptyArray = [];
  var anotherEmptyArray = new Array();
  
  // This array, when filled, will allow only upto 10 elements
  var emptyArrayOfFixedLength = new Array(10); 
  
  // Arrays can be heterogenous
  var myArray = [99, "billion", true, null, ["JavaScript", -7], {prop : "val"}];
  ```
  
  - __`Read and Write Array Elements`__
  ```javascript
  /* 
  // General syntax
  someArray[index_is_n]; // reading; evaluates to the (n+1)th element
  someArray[index_is_n] = N; // writing; the (n+1)th element will be N
  */
  
  // Read the 3rd element of the array "myArray"
  myArray[2]; // Evaluates to true, which is the 3rd value
  
  // Read elements of nested arrays
  // For example, the 5th element of "myArray" is also an array
  myArray[4][0] // Evaluates to "JavaScript" - the 1st element of the nested array
  
  // Read values of properties of objects, when objects are array elements
  // For example, the 6th element of "myArray" is an object
  // In both the ways shown below, the evaluated value is the same - "val"
  myArray[5].prop // Using the dot notation
  myArray[5]["prop"] // Using the array notation; this is preferred
  
  
  
  // Write the 3rd element of the array "myArray"
  myArray[2] = false; // The new 3rd element will be false
  
  // Write elements of nested arrays
  myArray[4][0] = "My favorite language is JavaScript"; // Element at the index 0 of the nested array
  myArray[4][2] = "Programming is cool"; // A new element gets added in the nested array
  
  // Write values of properties of objects, when objects are array elements
  myArray[5]["prop"] = "new_value"; // Overwriting the value of the object's existing property
  myArray[5]["another_prop"] = "another_value" // Adding an new property and its value
  
  ``` 
  
  ```
  EXERCISE
  ========
  1. What happens when you try to read an element by passing an index that does not exist? 
     For example, for myArray, what will happen if you try to read myArray[20]? 
  
  2. What happens when you try to read myArray[-2], and myArray[-12]?
  ```
  
  - __`Array Length`__
  ```javascript
  /*
  // General syntax
  // length is the property to be used for this job, and is accessible to all arrays, 
  apart from some other data types.
  
  array.length; // array can be a literal ([]) or a variable (var myArray = [1, 2, 3])
  */
  
  [].length; // length of an empty array; evaluates to zero
  
  [1, 2, "JavaScript"].length; // Evaluates to 3
  
  myArray.length; // Evaluates to 6.
  
  /*
  Relationship between array length and last index:
  ++++++++++++++++++++++++++++++++
  last_index = array.length - 1
  ++++++++++++++++++++++++++++++++
  */
  ```  
  
  - __`Add and Delete Array Elements`__
  ```javascript
  // ADD elements
  
  // Adding elements by specifying the index
  var arr = []; // Starting with an empty array for demonstration
  arr[0] = "zero"; // Adding an element at index 0
  
  /*
  You may pass indexes without maintaining any serial.
  For example, you can add arr[2] = "whatever" after you executed arr[0] = "zero".
  */
  arr[4] = "four"; // The array will be returned as ["zero", empty, empty, empty, "four"]
  
  
  
  // DELETE elements
  /*
  // General syntax
  delete array[index_of_element];
  */
  
  delete myArray[2]; // The 3rd element of myArray, true, gets deleted and the position becomes empty.
  ``` 
  
  - __`Iterate an Array`__
  ```javascript
  
  // You have already encountered iteration using arrays; here's another example
  
  var arr = ["zero", "one", "two", "three", "four", "five", 6, 7, 89];
  var lengthOfElements = []; // This empty array will eventually store the length of elements of arr
  for (var i = 0; i < arr.length; i++) { // The for loop - face of iteration
    var l = arr[i].length; // Length of the element with which the iterator is associated
    lengthOfElements[i] = l; // Add the length of the element to another array
  }
  lengthOfElements; // Call the array to check it - [4, 3, 3, 5, 4, 4, undefined, undefined, undefined]
  
  // The undefined appears because that's the value returned when the length method operated on numbers.
  ```  
  
  - __`Multidimensional Array`__
  ```javascript
  /*
  JavaScript doesn't provide native data structures for multidimensional arrays or matrices.
  However, you can construct an array whose elements themselves are arrays of same length.
  */
  
  // General syntax
  
  var a_matrix = [[1, 2, 3], ["Ja", "va", "Script"], [true, false, null]]; // Ugly indentation
  
  // Another matrix with good indentation, representing a 3 x 3 matrix
  var another = [ // Observe that each of the elements that are array themselves are of same length - 3.
                  [1, 2, 3],
                  ["Ja", "va", "Script"],
                  [true, false, null]
                ];
  
  // How to access elements of an array within an array? The consecutive [][] notation!
  // In the example below, the first [] has 1, which is for the 2nd element of the parent array.
  // Similarly, the second [] contains 2, which stands for the 3rd element of the 2nd element.
  var third_elem_of_second_array_in_another = another[1][2];
  third_elem_of_second_array_in_another; // Evaluates to "Script"
  
  ``` 
  
  - __`Join Array`__
  ```javascript
  // JOIN Arrays
  /*
  // General syntax
  some_array.join() // Returns a string containing all the elements of some_array
  */
  
  // Simple joining
  var arr = [1, 2, "javascript", true];
  arr.join() // Returns the string "1,2,javascript,true"
  arr.join("; ") // Returns the string "1; 2; "javascript"; true" because of the delimiter "; " as argument
  
  // What happens when we try to join heterogenous arrays?
  // Elements that are arrays or objects are simply interpreted as objects
  var myArray = [99, "billion", true, null, ["JavaScript", -7], {prop : "val"}];
  myarray.join(); // Returns the string "99; billion; true; ; JavaScript,-7; [object Object]"
  
  ```  
  
  - __`Reverse an Array`__
  ```javascript
  var some_array = ["javaScript", "CoffeeScript", -99, true];
  some_array.reverse(); // Returns an array with elements in the reverse order
  ```  
  
  - __`Concatenate Arrays`__
  ```javascript
  /*
  The concat() method creates and returns a new array that contains the elements 
  of the original array on which concat() was invoked, followed by each of the arguments 
  to concat(). 

  If any of these arguments is itself an array, then it is the array elements 
  that are concatenated, not the array itself. 

  concat() does not recursively flatten arrays of arrays. 

  The method concat() does not modify the array on which it is invoked. 
  */

  var a = [1,2,3];

  a.concat(4, 5) // Returns [1,2,3,4,5]

  a.concat([4,5]); // Returns [1,2,3,4,5]

  a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7]

  a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]]
  ```  
  
  - __`Slice Arrays`__
  ```javascript
  /*
  The slice() method returns a slice, or subarray, of the specified array. 
  Its two arguments specify the start and end of the slice to be returned.  
  slice() does not modify the array on which it is invoked.
  */ 
  var a = [1,2,3,4,5];

  /*
  The returned array contains the element specified by the first argument 
  and all subsequent elements up to, but not including, the element specified by 
  the second argument.
  */
  a.slice(0,3); // Returns [1,2,3]

  /*
  If only one argument is specified, the returned array contains all elements from 
  the start position to the end of the array.
  */
  a.slice(3); // Returns [4,5] 

  /*
  If either argument is negative, it specifies an array element relative to the last 
  element in the array. 
  An argument of -1, for example, specifies the last element in the array, and an 
  argument of -3 specifies the third from last element of the array. 
  */
  a.slice(1,-1); // Returns [2,3,4] 
  a.slice(-3,-2); // Returns [3]  
  ```    
  
```
EXERCISE
========
1. Suppose you are given an array [1, 2, 11, 99, 9, 1, 7, 8, 66, 66, 8, 1]
   Your task is to write a function that:
   (i) Takes an array and one of its element as arguments.
   (ii) Returns another array that has all the positions (not index) of the specified element.
      (a) If the element is not present in the array given as argument, it returns "Not Found".
   
   In this task, two ECMAScript5 array methods indexOf() and lastIndexOf() can help.
   Research about those two methods and code up the solution.
```  

## Reminder on Mutation

As you might remember, objects and arrays are __Reference__ types, and are therefore mutable. Before you move on to the next chapter, it's high time to revise the concepts learned [__here__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/3_primitive_and_reference_types.md#mutation-in-javascript). 



[__<<= Conditionals, Loops, and Recursions__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/5_conditionals_loops_recursions.md)

[__Glimpse of Client-side JavaScript =>>__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/7_glimpse_of_clientside_javascript.md)
