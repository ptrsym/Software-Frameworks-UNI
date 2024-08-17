//1
let numbers = [15, 12, 9, 26, 19];
console.log(numbers);

//2
numbers.push(20);
console.log(numbers);

//3
numbers.unshift(105);
console.log(numbers);

//4
numbers.splice(2, 0, 17);
console.log(numbers);

//5
numbers.pop();
console.log(numbers);

//6
numbers.splice(1, 1);
console.log(numbers);

//7
numbers[4] = 100;
console.log(numbers);

//8
numbers = numbers.map(num => num * 2);
console.log(numbers);

//9
numbers = numbers.reduce((total, num) => total + num);
console.log(numbers);