**Problem: Format User Names**<br>
You are given an array of user objects, where each object has a firstName and a lastName. Write a TypeScript program or function that uses the map() method to create a new array of formatted full names.
```ts
interface User {
    firstName: string;
    lastName: string;
}

let users: User[] = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Alice', lastName: 'Smith' },
    { firstName: 'Bob', lastName: 'Johnson' },
];

// Your code here

// Output: [ 'John Doe', 'Alice Smith', 'Bob Johnson' ]
```
Your task is to use the map() method to create a new array formattedNames containing the full names formatted as shown in the comment. Each full name should be a combination of firstName and lastName, separated by a space.
