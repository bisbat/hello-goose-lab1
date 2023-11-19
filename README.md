# hello-goose-lab1
Problem:
You are building a system to categorize temperatures. Write a TypeScript function called categorizeTemperature that takes a temperature in Celsius as a parameter and returns a category string based on the following criteria:

If the temperature is less than 0, return "Freezing".
If the temperature is between 0 (inclusive) and 10 (exclusive), return "Cold".
If the temperature is between 10 (inclusive) and 25 (exclusive), return "Moderate".
If the temperature is 25 or higher, return "Hot".

Example:
```ts
console.log(categorizeTemperature(-5)); // Output: "Freezing"
console.log(categorizeTemperature(5));  // Output: "Cold"
console.log(categorizeTemperature(15)); // Output: "Moderate"
console.log(categorizeTemperature(30)); // Output: "Hot"
```
Constraints:
The input temperature will be a number.

# hello-goose-lab2
Let's step up the challenge a bit. Here's a more complex problem:
Problem:
You are designing a grading system for a class. Write a TypeScript function called calculateGrade that takes a student's score as a percentage and returns a grade according to the following grading scale:

A: 90% and above
B: 80% to 89%
C: 70% to 79%
D: 60% to 69%
F: Below 60%
Your function should also consider an additional factor: bonus points. If a student's score is above 95%, they should receive an additional "+". If a student's score is below 50%, they should receive an additional "-". The final grade should include any bonus points.

Example:
```TS
console.log(calculateGrade(92)); // Output: "A"
console.log(calculateGrade(85)); // Output: "B"
console.log(calculateGrade(70)); // Output: "C"
console.log(calculateGrade(63)); // Output: "D"
console.log(calculateGrade(45)); // Output: "F-"
console.log(calculateGrade(98)); // Output: "A+"
```
Constraints:
The input score will be a number between 0 and 100 (inclusive).
Note:
The grade should be a string that includes the letter grade and any bonus points. For example, "A+", "B", "C-", etc.
