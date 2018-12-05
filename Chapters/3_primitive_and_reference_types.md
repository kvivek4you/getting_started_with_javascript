# Primitive and Reference Types

If you have read the previous chapter [Programming 101](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/2_programming101.md), then by now you should have a decent idea about data types. In this chapter, we shall learn about the data types and structures in context of JavaScript. Most importantly, you will learn the concept of __mutability__, which is extremely important to master for writing bulletproof code.

## Data Types in JavaScript

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/dataTypes.png"/>
    </td>
  </tr>
</table>   

To get a feel of what these data types are, and what they look like, go through the following code snippet:    

```javascript
// var means variable in JavaScript

// Examples of Number
var an_integer = 9;
var a_fraction = -0.54;

// Examples of String
var language = "JavaScript";
var initial = 'J';

// Examples of Boolean
var newbie = true;
var pro = false;

// Example of null and undefined, which are special
var proficiency = null;
var goal; // The variable named goal becomes an undefined variable

/*
Arrays and Objects can be heterogenous and nested.
You will see what it means in the following examples.
BTW, this is an example of long-form comment.
*/
// Example of Array
var wish_list = ["billionaire", [0, 'binary', 1], 69, {thisObject : "isAwesOme"}];
var another_array = [0,1,2,
                     3,4,5,
                     6,7,8];
                     
// Example of Object
// Also, example of well indented code
var data_point = {
                  x_axis : {
                            label : "Year", 
                            values : ["1990", "1995", "2000", "2005", "2010", "2015", "2012"],
                            },
                  y_axis : {
                            label : "Revenue (in million USD)",
                            values : [0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400],
                            },
                 };
```

> __NOTE:__ Don't worry if you feel that you have been thrown into the deep end of the pool and you know nothing about swimming. As you progress in your journey of become a programmer, frustration will be your partner and [imposter syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) will be your spouse. In this chapter and the subsequent ones, we will slowly go through the details of each of the elements mentioned above, and some more.    

## Data Types and Mutation

JavaScript data types are categorized under two themes - __Primitive__ and __Reference__. There is a profound reason behind this categorization. In this section, we shall explore _why, or on what basis, the data types are categorized_.

### Mutation

Bring your mind back to JavaScript if the topic reminds you of _X Men_ - the theme of several blockbuster Hollywood movies. In context of programming, __mutation__ implies the phenomenon of changing or overriding the originally defined values and capabilities of entities involved in a program. When mentioned as a property of data types, we use the terms __mutable__ and __immutable__, depending on whether the concerned data types can be mutated or not. The core concept of mutation is common across all programming languages, although the specifics of applicability may vary depending on the context.

### Mutation in JavaScript
To get a feel of mutation in JavaScript, consider the following illustration from the JavaScript interpreter console embedded within the Chrome browser:

<table>
  <thead>
  </head>
  <tbody>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/immutableNumber.png"/>
      </td>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/mutableObject.png"/>      
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/immutableText.png"/>
      </td>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/mutableText.png"/>      
      </td>
  </tr>  
  </tbody>
</table>


As a summary, remember the following:  
> The __Primitive__ types are __immutable__, because they are _not referenced_. On the other hand, __Reference__ types are obviously _referenced via pointers_, and are therefore __mutable__.    

```
EXERCISE
==========
Go back to the chapter Programming 101 and revise the concepts of data types and memory locations. 
Then doodle block diagrams like the ones you found in that chapter in context of mutability, as presented in the above illustration. 
As you do it, talk it out loud and explain it to an imaginary laymen in front of you. 
Do such exercises often, especially whenever you encounter a concept that is difficult to grasp first time - it brings immense clarity and confidence.
```
## Notes on "null" and "undefined"
We haven't discussed much about these two mysterious data types, although you might have seen enough clues that indicate they are somewhat special and different from the others. In the subsequent chapters we will see some usage of these two data types, but this is a nice opportunity to give a basic explanation of what they are, and how they work.

__null__ and __undefined__ are unique values themselves, and not a data types per se - not at least like _Number_ and _String_ data types. For example, 2 and -5.7 are both numbers, and although they belong to the same data type, they are different in their magnitude, and hence their possible effects on the program. However, __null__ and __undefined__ are unique values themselves, and a type in their own right since JavaScript interpreters handle them differently than other kids on the block.    

### null

__null__ is a special value that we assign to variables when our intention is to keep the memory allocated for the variable empty after it is declared. This is a perfectly defined behavior for the interpreter to asses. The use cases for __null__ might not be apparent, but in the subsequent chapters you will encounter some examples where it's needed.

```javascript
var empty_variable = null; // We deliberately want the variable to be empty.

/* 
This is a way telling the interpreter that we know exactly what we want to do - 
keep the memory location of the variable empty when it is declared and initialized.

Remember that null is not a string.
*/
```


### undefined
In general, a variable is __undefined__ in JavaScript if the interpreter finds that after declaring the name of the variable, no value has been assigned to it. The reason is quite obvious - without an assigned value, the interpreter cannot decide what kind of data the variable is supposed to contain, and how much memory should be allocated to the variable initially.     

```javascript

/* 
The following variable is defined. If not in the console mode, 
the interpreter treats this perfectly fine.
*/
var name = "John"; 

var age; // This is an undefined variable. 
```

#### Strange behavior in the console mode
If you look closely at the code illustrations in the section for __mutation__, you will observe that even for perfectly valid and complete statements like `var a_number = 9;`, the JavaScript console (the interactive mode of the interpreter) _returns_ `undefined`. But why does the interpreter returns `undefined`, even when there is nothing wrong? To understand the reason, we should follow our technique of thinking like the interpreter.    

  1. When the interpreter first sees the term `var`, it anticipates that a variable is on the way. Apart from that, it has no other information at all. However, it knows that it should encounter a break in the form of whitespace character, followed by a string.    
  2. As expected, it next sees a whitespace and ignores it. It keeps looking on for a string and gets `a_number`. It now knows what to do next - allocate a memory for the newly minted variable, and it does exactly that. However, just after it allocates the memory without having any idea what kind of a variable (based on data type) it is handling, it becomes curious and looks inside the memory locations. Sure enough, it finds nothing there, because it has not got anything to put inside it yet! But being the impatient kid it is in the _console_ mode (when it's interactive), it jumps to a conclusion - the variable has not been defined properly!     
  3. Next thing you know, it spits out `undefined` on the console.    
  4. Then it goes on looking for other things till it encounters `;`, which indicates _end of statement_. As we are the programmers who can do no wrong, we have given it food for thought - the `=` operator that indicates __assignment__, and then a number `9` that indicates the __assigned value__. The interpreter realizes its mistake and puts the value `9` inside the memory location allocated for `a_number`, keeping it ready for subsequent instructions. However, the egoistic personality it is, it never bothers to tell us that it had done a mistake of jumping to conclusion too quickly! But when asked again, it corrects its mistake and reveals the correct value of a well-defined variable.
  <table>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/undefinedSelfCorrection.png"/>
      </td>
    </tr>
  </table>      
  
> __NOTE__: In the console mode, the interpreter even handles __null__ the same way it would handle other data types.
<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/nullUndefined%20Console.png"/>
    </td>
  </tr>
</table>    


## Notes on =, ==, and ===

It's extremely important to understand the difference between the three operators =, ==, and ===. Very rarely do beginners develop a clear understanding of == and ===, although = is somewhat well understood. However, having a clear concept of the distinction between the two very similar operators can save a lots of time when you proceed to advanced stages of your programming journey.    

`=` represents assignment; what ever is on the right of the sign is assigned to the one on the left. For example:
```javascript
var age = 25; // Initial age is 25
age = 30; // Then, the value 30 is assigned to the variable "age".
var age_future = 35; // A new variable is initialized
age = age_future; // Whatever value is in "age_future" is now assigned to "age"
age; // Evaluates to 35
```
`==` represents comparison, and evaluates to either `true` or `false`. But this comparison is rather loose in nature - only the values of the entities on either side of the sign are compared, but not their individual types. Rather, the types are converted whenever possible to make the comparison a valid operation. On the other hand, `===` introduces strong type-checking In other words, type conversion is not allowed for `===` test. This is, therefore, more strict than the `==` operation. For example:
<table>
  <tr>
    <td><strong>== implies only value comparison; type conversion allowed<strong></td>
    <td><strong>=== implies both value and type comparison; no type conversion<strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/%3D%3Dtest.png"></td>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/%3D%3D%3Dtest.png"></td>
  </tr>
</table>

> __NOTE__: In the above example, you can say that `===` yields more accurate results than `==`, because `null` and `undefined` are obviously not same, no matter how many times the `==` test tells us that their equivalence is `true`. In the chapter [Your First JavaScript Program](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/4_your_first_javascript_program.md), where we shall discuss about a function to calculate square root, you will see more instances of type conversion happening under the hood.



[__<<= Programming 101__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/2_programming101.md)    

[__Your First JavaScript Program =>>__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/4_your_first_javascript_program.md)

