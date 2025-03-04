// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//   }, []);
//   return <h1>{count}</h1>;
// };

// export default Counter;

// function User (name)  {
//   this.name = name;
// }
// User.prototype.sayHello = () => {
//   console.log(`Hello, ${this.name}`)
// };
// const user1 = new User('Alice');
// user1.sayHello()

// function counter() {
//   let count = 0;
//   return () => console.log(count ++)
// }
// const count1 = counter();
// count1()
// count1()
// count1()
// const count2 = counter();
// count2()
// count2()

// console.log(foo)
// var foo = 'Hello';
// console.log(foo)

// app.get('/data', async (req, res) => {
//   const resutl = fetch('https://api.example.com/data')
//   res.send(await result.json())
// })

// app.use((req, res, next) => {
//   console.log('hi')
// })

// useEffect(() => {
//   console.log('effec ')

// },[user])

// function sum (...numbers, extra) {
//   return numbers.reduce((acc, num) => acc + num,0) + extra
// }

// const [user, setUser] = useState({name: 'mahfuz', age: '20'})

// function updeat() {
//   setUser({age:30})
// }

// console.log(1 + "2", + 3);


// function multiply(x, y = 2) {
//   return x * y;

// }
// console.log(multiply(5))
// console.log(multiply(5, undefined))
// console.log(multiply(5, null))

// const a = [1, 2, 3];
// const b = a
// b.push(4)
// console.log(b)
// const x = 1;
// const y = 2;
// const a = x + y++;
// console.log(x,y)

// let x = [1, 2, 3];
// let y = [...x]

// y[0] = 4
// console.log(x[0],y[0])

// const numbers = [1, 2, 3];
// numbers[10] = 10
// console.log(numbers.length)

// let numbers = [1, 2, 3];
// numbers = numbers.map(num => num * 2)
// console.log(numbers)
const x = 10;
function foo() {
  console.log(x);
  const x = 20
}
foo()