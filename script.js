//1
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//2
const names = ["alice", "bob", "charlie"];

const uppercaseNames = names.map(name => name.toUpperCase());

console.log(uppercaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]

//3
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
  ];
  
  const expensiveProducts = products.filter(product => product.price > 500);
  const prices = expensiveProducts.map(product => product.price);
  
  console.log(prices); // Output: [1000, 700]