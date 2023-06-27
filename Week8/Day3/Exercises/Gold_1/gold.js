// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

let a = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
}); //[2,4,6]
console.log(a);


// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

let b = [[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);
  },[1, 2], ); // [1,2,0,1,2,3]
  console.log(b);

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// });
// console.log(arrayNum);
// console.log(newArray);

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
const array = [[1],[2],[3],[[[4]]],[[[5]]]].reduce((acc,cur) => acc.concat(cur));
console.log(array);

// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]].reduce((acc,cur) => acc.concat(cur)).reduce((acc,cur) => acc.concat(" " + cur));
console.log(greeting);

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result = JSON.parse(JSON.stringify(trapped));

console.log(result); // Output: [3]