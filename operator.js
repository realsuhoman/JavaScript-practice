// 1. String concatenation

console.log('my' + 'cat'); // "my cat"
console.log('1' + 2); // '12'
let suho = 3;
let mino = 2;
console.log(`string literals: 1 + 2 = ${suho + mino}`); // 달러 싸인을 이용하면 변수 값을 계산해서 스트링으로 포함해서 문자열을 만듬

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIcnrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncerment = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;
console.log((x += y));

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than
console.log(10 > 6); // less than
console.log(10 >= 6); // less than

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 첫번째가 트루면 뒤에 상관없이 트루다
// 심플한 애들을 앞에 적고 함수를 호출 하는 애들은 뒤에 배치하는게 좋다.
console.log(`or:${value1 || value2 || check()}`);

// && (and), finds the first false value
console.log(`and:${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('ㅇㅅㅇ');
  }
  return true;
}

// ! (not) 바꿔 줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const suho1 = { name: 'suho' };
const suho2 = { name: 'suho' };
// suho1 과 suho2는 똑같은 데이터가 들어 있는 오브젝트지만 실제로는 메모리에 각각 다른 레퍼런스가 들어 있음
const suho3 = suho1;
console.log(suho1 == suho2);
console.log(suho1 === suho2);
console.log(suho1 === suho3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ? 코드 가독성이 떨어지기 때문에 간단할 때만 사용하는게 좋다!
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}
// if문에서 너무 많은 if 와 else 를 사용하게 될 경우 스위치 사용하는 것을 고려하자.

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
