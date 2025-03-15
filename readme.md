# Chrome DevTools Debugging Demo

A simple Todo application designed to demonstrate JavaScript debugging techniques using Chrome DevTools for Code Louisville students.

## Project Overview

This project contains a basic Todo application with the following features:
- Add new tasks
- Edit existing tasks
- Delete tasks

The project has been deliberately created with debugging opportunities to help students learn how to use Chrome DevTools effectively.

## Repository Structure

- [index.html](index.html): Main HTML structure
- [script.js](script.js): JavaScript functionality
- [styles.css](styles.css): CSS styling

## Learning Objectives

By working with this demo, students will learn:

1. How to open and navigate Chrome DevTools
2. How to set breakpoints in JavaScript code
3. How to step through code execution
4. How to inspect variables during runtime
5. How to identify and fix common JavaScript errors
6. How to use the Console for debugging

## Getting Started

1. Clone this repository to your local machine
2. Open the folder in your code editor
3. Open `index.html` in Chrome

## Debugging Exercises

### Exercise 1: Fix the Application Error
There is an intentional error in the `script.js` file. When you try to add a todo item, nothing happens.

1. Open Chrome DevTools (F12 or right-click > Inspect)
2. Look for errors in the Console tab
3. Find the misspelled function in the code (hint: look for "elemant")
4. Fix the error and verify the application works

### Exercise 2: Add Breakpoints
1. Open the Sources tab in DevTools
2. Find and open `script.js`
3. Add breakpoints to the following functions:
   - `addTodo()`
   - `deleteTodo()`
   - `editTodo()`
4. Interact with the application and observe how execution pauses at your breakpoints
5. Use the step-over, step-into, and step-out controls to navigate through the code

### Exercise 3: Watch Variables
1. Add todos to your list
2. Set a breakpoint inside the `renderTodos()` function
3. Add the `todos` array to your watch list
4. Observe how the array changes as you add, edit, and delete items

## Additional Resources

- [Chrome DevTools Official Documentation](https://developers.google.com/web/tools/chrome-devtools/)
- [JavaScript Debugging Tips](https://raygun.com/javascript-debugging-tips)
- [Chrome DevTools Keyboard Shortcuts](https://developers.google.com/web/tools/chrome-devtools/shortcuts)

## Notes for Instructors

Feel free to add additional bugs or challenges to extend the learning experience.