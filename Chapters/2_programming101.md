# Programming 101

In this chapter you will learn the some of the basic concepts of programming:
  - Why programming is more about thinking and less about typing    
  - Computer architecture and memory in context of data types                 
  - Best practices of programming and software engineering                   
   

```
It's tempting to skip chapters when you see large chunks of text. 

When (not if) this happens - do one simple exercise:
  1. Read the next chapters and get a feel of your understanding.
  2. Come back to this chapter, internalize the material presented here, 
     and then visit the subsequent chapters. I bet that you will experience 
     the difference.

I guarantee that preparing a strong foundation by internaliz  ing the material
presented in this chapter will contribute immensely to your understanding of 
many of the "why" of programming. Remember that the questions no one raises 
are the ones that are most important in having a complete understanding.

```


## Think more, type less     

[Bill Atkinson](https://en.wikipedia.org/wiki/Bill_Atkinson), one of the main contributors to Apple's GUI, once reported his accomplishment as `"... deleted more than 21,000 lines of code..."`. As a result, the code ran much faster. Most importantly, the nice rounded rectangular GUI objects that Apple pioneered was achieved after minor tweaks in the remaining code. Although what Bill did is more of an exception than norm, it teaches us something very important - programming has as much relation with typing, as mathematics has with chalk or pencil.    

At its core, programming involves the following steps:
  1. __What's the problem?__ - Given a problem, translate the vague requirements into concrete statements, which is essentially defining the problem with precision. The difficulty involved in this step is often under-appreciated. For industry problems, this is perhaps the most difficult steps that require tonnes of experience.   
  2. __Does a solution exist?__ - Think about the solutions. Will a known mathematical formula be sufficient? If so, the code will be quite trivial. Usually most computational tasks are not adequately covered by mathematical formula, and that's why we need algorithms.    
  3. __Let's create/use an algorithm!__ - Try to think about a process - a sequence of steps - that will give you an accurate or reasonably good solution. Think about how much time will the process take to complete, as well as the memory required for execution. Always remember this - algorithms are precisely and unambiguously articulated sequence of instructions, and the goal of computer science is to deeply understand their efficiencies in terms of time and memory requirements. All the frightening mathematics that you see in computer science serves this singular end goal. 
  4. __Dry Run__ - Now that you have a solution, DO NOT rush to the _code-monkey mode_. Test your algorithm manually - take some inputs (normal, slightly tricky, and edge cases) based on the problem definition, and visualize how each of the steps are modifying/handling your input. Is the output you got the right one for each of the input variants you tested with? In most cases, the answer will be NO. Go back to the drawing board and troubleshoot. This technique is called "_dry run_", and is immensely helpful in your journey of becoming an ace problem solver. Never forget that computers are more dumb than you can imagine, and it is your responsibility to tell what needs to be done.     
  5. __Type-Run-Debug__ - Fire up your favorite text editor or IDE, and type in the code. Don't be a macho - use a modern IDE, as they help in avoiding the syntax errors. Execute your code. In most cases, the compiler or the interpreter will throw up some error. The compilers and interpreters are your friend - they tell on your face what's wrong with your code from the perspective of language definition. Understand the cryptic error messages and debug your program until it runs successfully.    
  
These five steps address pure programming, which is often the case when you are a beginner or need to code for academic purposes. Software engineering is a superset of these steps, which we shall briefly discuss towards the end of this chapter.       

> __A Note on Programming Languages__:     
Unless you are bound by constraints that are beyond your control (like the browser-JavaScript marriage), the choice of programming language must depend on the task at hand.     
Compiled source code executes a lot faster than the interpreted ones. The interpreted languages make up for the loss of speed by offering some facilities to develop software faster. In fact, lots of companies favor languages like Python over C++ because they think that developer's time is much more costly than processor's time. In many cases, such a philosophy saves a lot of money for the companies. However, very large scale enterprise software, safety-critical or mission-critical software, etc., are better written in statically typed languages.        

## Computer Architecture and Data Types     

There is no shame in revisiting the basics of computers, especially when we are newbies in the world of programming. What we are about to do is same as stalwarts like Elon Musk do - _thinking from first principles_.     

### The problem with data types...    
Most modern computers are manufactured using the [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture), which implies that data resides in the memory, and computation is performed by the processor. These dumb but useful beasts see everything as `0` and `1`; be it a beautiful piece of code or your favorite movie - they are incapable of appreciating anything beyond those two numbers. And that's a serious problem! We need to write programs for calculating salary of employees, and we also need to write programs for displaying their name on the monitor. If both salary and name are series of `0`s and `1`s in the computer's memory, how do we ask the computer to differentiate between the two? In a generalized rephrasing of the question, how do we ask the computers to differentiate between the binary equivalents of __different types of data__?     

### Who can help?
Globally, numerical quantities are expressed by the decimal number system. Standards defined by [ASCII](https://en.wikipedia.org/wiki/ASCII) and [Unicode](https://en.wikipedia.org/wiki/Unicode) gives us a way to represent non-numerical characters as decimal numbers. Thus, we have an agreed way to represent everything as decimal numbers, and convert them uniformly into binary numbers. Although such standardization is a good first step, it still does not solves our problem. To appreciate the problem, let's take a bottom-up approach and understand what's happening at a hardware level.    

### Electrical Engineering and Programming
<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/ABasicComputer.gif"/>
    </td>
  </tr>
</table>


```
Block diagram of a basic computer with uniprocessor CPU. 
  - Black lines indicate data flow. 
  - Red lines indicate control flow. 
  - Arrows indicate direction of flow.
```    

Don't worry if you didn't understand the details presented in the illustration above. Its crux is that there are different components of a processor that handles the instructions/logic and the data, both of which are electric currents carried by dedicated wires called _"bus"_. The electrical circuits present in a CPU responds only to voltage levels, either by transmitting current or blocking it. At this level, all we have are the analog equivalent of the binary - `-5 volt` and `+5 volt`. It is very difficult to implement an abstract human construct like data type at the hardware level. However, not all hopes are lost, as the __allocation of memory chunks of different sizes for different types of data__ can serve as a distinguishing factor!    

### Can compilers/interpreters help?
We will probe this possibility of solving our problem from the other end of the spectrum, which is essentially a top-down approach. Let's invite the compilers and the interpreters into the game and spice it up!    

> __Compilers__ and __interpreters__ are special programs that has the grammar of the programming language embedded in it. Although compilers and interpreters are technically very different pieces of software in terms of functionality and scope, they share some common functions in terms of handling the code. For the sake of simplicity, in this discussion we will club them together and try to find solution from the common subset of their functions.

To get an intuitive feeling of the possible role of compilers/interpreters in solving this problem, think about the following:    
  - The compilers and interpreters are responsible for triggering the process of generating the correct sequence of `0`s and `1`s.    
  - Once generated, the circuits take it up.    
  - There is one entity, the operating system layer, between the compilers/interpreters and the processor that meddles with the machine code.     
  
If the circuits are incapable of handling abstractions, then it must be the entity producing the machine code that has the onus of responsibility to dumb down things at a level that electrical engineering can address! In fact, it only makes sense that an abstraction like distinction between data types is handled by something more abstract than the bare circuits.     

### Help is on the way...    

Although not a complete list, given below are some tasks that compilers and interpreters perform when they are invoked:    

<table>
  <tr>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/roleOfCompilers.png"/>
    </td>
  </tr>
</table>   

Although not technically accurate, what interests is the 3rd item on the list. To understand what the 3rd item means, let's write two lines of code:
```javascript
// var means variable in the JavaScript world

var name = "John";
var age = 30;
```

The above lines of JavaScript code are syntactically correct and are contained within one source file. When the JavaScript interpreter is invoked, the code readily passes the first two tests of syntactical correctness and module references. Since the code does not warrant an output, the 4th task is not performed by the interpreter. What remains is the all-important 3rd item on the list, which we shall closely inspect.    

As with most interpreted languages, the JavaScript interpreter goes through a source code file line by line. Let me take you through the same journey that the interpreter goes through, when our code is fed into it:        
  1. The first line starts with `//`, and is thus ignored by the interpreter as a comment for humans.     
  2. The second line does not have the `//` signs at it's beginning, and the interpreter senses that this is a legitimate line of code.     
  3. The line is parsed for lexical sanity, which our code passes with flying colors.    
  4. Once the syntactical correctness is ensured, the interpreter starts deciphering it's meaning.     
      1. The first word it encounters is `var`, which triggers an anticipation that a variable is on the way! You can visualize variables as entities in a program that occupies a certain range of memory locations, based on the type of the value it contains.     
      2. In our first legitimate line of code, the name of the variable is `name`, and it contains a value `John`. Since the value `John` is enclosed within `""`, the interpreter knows that the value is a string, which is a continuous chain of characters. On receiving these information, the interpreter lays out a __memory map__. A schematic and truncated view of the map is  illustrated below:   
      <table>
        <tr>
          <td>
            <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/pointer_illustration.png"/>
          </td>
        </tr>
      </table>   
      
      ```
      For each of the characters "J", "o", "h", and "n", the size of the memory chunk
      allocated by the interpreter is equal. However, the chunk size is different than
      what the interpreter allocates for numbers like 0, 1, 2, ..., 9.    
      
      As we shall see soon, this variation in the size of allocated memory chunks helps 
      the lower levels in the call stack (a phrase that you will know soon) to identify
      and differentiate between types of value or data.
      ```
      > __BONUS__: Advanced readers may find some real insight in [this answer](https://softwareengineering.stackexchange.com/questions/262389/memory-needed-to-store-a-function-in-javascript) of Stack Overflow.             
  5. Step 4 and its sub-steps are repeated for the next line of code. However, since the value of the variable in this case is a number, a different memory map is laid out. *__The size of the memory chunk allocated for a numerical value is different from that of string value__*.    
  > __BONUS__: There is a beautiful but slightly technical [article](http://2ality.com/2012/04/number-encoding.html) that explains in detail the nuances of numbers in JavaScript.        
  
### The solution emerges... 

As with most human endeavors, the solution finally emerges from cooperation between different layers of software.    

Most modern programming and software engineering is based on the philosophy of "_standing on the shoulders of the giants..._". In other words, from the bare hardware to the browser (which contains the JavaScript interpreter), there are multiple layers of abstraction. Each of these layers provide a service to the layer above by exposing an Application Programming Interface (API). The chain of abstraction/programmatic services starting from the uppermost layer (the part of the stack where a __call__ generates) to the layer who finally ends the call by responding to it without passing the buck further, is called __call stack__. Let's take a look the call stack involved for most JavaScript code that starts in a browser environment:    
<table>
  <tr>
    <td>
      <img
        src = "https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/callstack.png"  
        height = 500px  
        weight = 250px  
        align = center 
      />
    </td>
  </tr>
</table>
    

```
  - When the interpreter is handed the job of laying out and managing the memory map, 
    what it actually does is invoking the low, system level facilities provided by the
    operating system.    

  - The calls are moderated by the browser engine, which acts as a mediator between the
    high and low levels of abstraction.    

  - When the system calls are invoked, they ask the operating system (the very low 
    level C and assembly code) to translate the high level data and instructions to 
    machine code - something that the processor understands. 
       * At this level, assembly instructions are specific to the processor type 
         and architecture.

  - The memory chunks are allocated at a physical level and data is put inside the memory. 

  - The size of the chunks depend on the type of data going inside.
```

All high level programming languages like JavaScript tackle the challenge of making the processor understand about different data types by delegating the heavy lifting to the system calls. The system calls, in turn, translate the high level instructions to very low level instructions (assembly code). The assembly code tells the processor to:    
  - Jump around memory locations    
  - Read/write memory locations and values      
  - Perform arithmetic and logical operations    
  - Store the results     
  - Return the memory locations of results to system calls         

> __The few activities mentioned above are the crux of any programming task, irrespective of the language you choose.__    


## Best Practices of Programming and Software Engineering     

What the industry calls "_best practices_" is essentially a mix of habits and attitude towards solving problems in an elegant yet efficient way. As with anything else, good habits yield immense benefits in the long run, and great attitude gives a perspective of the human efforts that goes into creating software. In that sense, programming is not much different from practicing art, mathematics, or any other creative pursuits.    

In this section, we discuss some timeless gems of programming that has emerged from the collective experience of billions of man-hours. If you inculcate the suggested habits right from the beginning, your efficiency in programming will increase manifold. Don't worry if you can't understand all of them right now, but it's really important that you keep them at the back of your mind.

  - __Code for humans__: Source code, written in high level programming languages like JavaScript, are for the consumption of humans. The machine will never complain if you can program it directly in machine code. But humans, especially the intelligent breed of programmers, are intolerant to gibberish.     
  - __Write Readable Code__: In continuation to the point above, always write readable code. Readability primarily comprises of the following:    
      - `Self-explanatory naming conventions`: Which is better - `var name = "John"` or `var n = "John"`? Does `n` even mean  anything?    
      - `Indentation`: Generously use the `Tab` and `Shift+Tab` keys, but follow a definite convention. In course of this book, you will come across many examples of well indented code.    
      - `Writing simple constructs`: Your code is not a place to show-off how clever you are. The guy who will inherit and maintain your code will bless you for writing simple code.    
  - __Do One Thing Well__: Good code chunks are like packets of logic that does only one thing and does it really well. This also enhances your code's reliability and ease of testing. For example, don't write gigantic functions that calculates all deductions of an employee's salary - dedicate one function each for loan deduction, provident fund deduction, etc.     
  - __Test Your Code__: Untested code is equivalent to no code at all. Write unit tests!     
  - __Design Your Software__: Every minute spent on designing and architecting your software saves you weeks in the implementation phase, and more so when your applications are extended to include new features. Remember that typing the syntax is the easiest part, and that's not programming in true sense.      
  
  
[__<<= Welcome to JavaScript__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/1_welcome_to_javascript.md)     

[__Primitive and Reference Types =>>__](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/3_primitive_and_reference_types.md)


