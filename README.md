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
