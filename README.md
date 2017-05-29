![ES6 for Everyone](https://es6.io/images/es6-facebook-share.png?cool=yah)

# ES6 for Everyone Starter Files

Everything you need to Learn ES6 over at [ES6.io](https://ES6.io)

---

## LOGS

### Day 1: 12 May 2017
Got this course for free from [Wes Bos](https://github.com/wesbos) as an appreciation gift :heart:  
Started looking at the overview of this course and setting up Slack.  
**Thoughts:**  
 - Completed Module #1 New Variables — Creation, Updating and Scoping
 - `var` is function scope
 - We can redeclare it multiple times in same scope
 - `let` & `const` are block scope
 - We can not redeclare it twice in same scope
 - You can update a `let` variable, but `const` variables cannot be updated
 - However, the properties of a `const` variable can change. That's because the entire object is not immutable.
 - Came to know about [Object.freeze()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), so that nothing can be added to or removed from the properties set of a frozen object.
 
 - Also, completed Module #2 Function Improvements: Arrows and Default Arguments
 - I had known about Arrow Functions from the #Javascript30 course, but more in details about it today
 - Learnt more about arrow functions, implicit returns, when & when not to use arrow functions, `this` inside arrow functions
 - Also, about default function arguments

 
### Day 2: 14 May 2017
Completed Module #3 - Template Strings  
**Thoughts:** Learnt about:-  
 - Template strings, creating html fragments with template literals
 - Using if, loop and functions inside template strings
 - Tagged templates, some use cases and sanitizing user data with tagged templates 
 - Found about [DOMPurify](https://github.com/cure53/DOMPurify) which helps to sanitize data in DOM
 
### Day 3: 15 May 2017
Completed Module #4 - Additional String Improvements
**Thoughts:**  
 - Learnt about `startsWith()`, `endsWith()`, includes() & repeat() methods and did some practice related to them
 - Also, looked into `str.endsWith(searchString[, length])` and `str.startsWith(searchString[, position])`
 
### Day 4: 16 May 2017
Completed Module #5 - Destructuring
**Thoughts:**  
 - Learnt about destructuring objects, renaming variables and default values
 - Learnt about destructuring arrays, functions and swapping variables
 - Snippets 1: `const { first, last, twitter } = someObjectHere`
 - Snippets 2: `const [ first, last, twitter ] = someArrayHere`
 
### Day 5: 17 May 2017
Completed Module #6 - Completed Module #6 Iterables & Looping  
**Thoughts:**  
 - Learnt about some advantages of `for of` loop over `for`, `foreach` and `for in`
 - `for-of` makes is easier for looping through array elements and most array-like objects like DOM NodeList, arguments
 - Learnt about `Array.prototype.entries()` method and how we can use it with `for-of` loop
 - Snippets 1: `for (const cut of cuts)`, just to get the values
 - Snippets 2: `for (const [i, cut] of cuts.entries())`, used to both index and value

### Day 6: 18 May 2017
Completed Module #7 - An Array of Array Improvements  
**Thoughts:**  
 - Learnt about `Array.from()` & `Array.of()` method 
 - Array prototype methods like `find`, `findIndex`, `some` & `every`
 - Use Case 1 for [`Array.from()`](https://pbs.twimg.com/media/DAHWQDGUwAAdOZV.jpg)
 - Use Case 2 for Array.prototype [`.some()` & `.every()`](https://pbs.twimg.com/media/DAHdt4YU0AAv31R.jpg)
 
### Day 7: 19 May 2017
Completed Module #8 - Say Hello to ...Spread and ...Rest  
**Thoughts:**  
 - Learnt about ...Spread operator & ...Rest parameters and there various use cases with lots of examples
 - Some use cases for [`Rest parameters`](https://pbs.twimg.com/media/DAMnqDdUwAYmYes.jpg)

### Day 8: 20 May 2017
Completed Module #9 - Object Literal Upgrades
**Thoughts:**  
 - Learnt about some handy stuffs like property value shorthand, method definition shorthand and computed property keys
 
Completed Module #10 - Promises
**Thoughts:**  
 - Learnt about how Promises works, creating my own promises, chaining them and working with multiple promises 
 - As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained like
 - [Chaining promises](https://pbs.twimg.com/media/DAP3qFIVYAA2tPp.jpg)

### Day 9: 23 May 2017
Completed Module #11 - Symbols (Newest primitive data type)
**Thoughts:**  
 - Learnt about Symbol data type and various use cases.
 - We can use it as object key as [unique identifier](https://pbs.twimg.com/media/DAhIFkYW0AAXLhD.jpg)


### Day 10: 24 May 2017
**Thoughts:**  
 - Learnt about [ESLint](http://eslint.org/) and it's [usability](http://eslint.org/demo/)
 - Also, looked into the [Airbnb's settings](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and did some practice
 - Looked into various [ESLint rules](http://eslint.org/docs/rules/) and tried to understand their importance and when to use them.

### Day 11: 25 May 2017
**Thoughts:**  
 - Today learnt about ESLint file & line specific settings for enabling/disabling rules
 - More info [here](http://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments)


### Day 12: 26 May 2017
**Thoughts:**  
 - Completed Module #12 - Code Quality with ESLint
 - Today learnt about JavaScript modules and WebPack 2 tooling setup
 
### Day 13: 27 May 2017
**Thoughts:**  
 - Learnt about creating our own JavaScript modules and importing/exporting them
 - Also, looked into [export statement](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export) and various syntax.
 
 
### Day 14: 28 May 2017
**Thoughts:** 
 - Completed Module #13 - JavaScript Modules and Using npm
 - Did more practice on ES6 Modules
 - Learnt about how to import specific modules when its needed

### Day 15: 29 May 2017
**Thoughts:**  
 - Completed Module #14 - ES6 Tooling
 - Learnt about SystemJS, Babel & [Polyfills](https://polyfill.io/v2/docs/) for ES6
 - Polyfills gives very good coverage for all ES6 features in old browsers

### Day 16: 30 May 2017
 
 
 