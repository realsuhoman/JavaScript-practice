//Function
// - 프로그램의 기본 구성 요소
// - 하위 프로그램으로도 불리고 여러 번 사용할 수 있습니다.
// - 한가지 작업을 수행하거나 값을 계산합니다.

// 1. 함수 선언
// 1. Function declaration
// function name(param1, param2) { body... return; }
// 하나의 함수는 한가지 일을 하도록 만들어야 한다.
// 함수 이름 작성. do Something, 명령어, 동사
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(suho) {
  console.log(suho);
}
log('JS');
log(12345);

// 2. Parameters
// premitive parameters : 메모리에 값이 그대로 저장되어 있기 때문에 값이 전달된다
// object parameters: passed by reference 오브젝트는 메모리에 레퍼런스가 저장되기 때문에 레퍼런스가 전달된다.

function changeName(obj) {
  obj.name = 'coder';
}

const suho = { name: 'suho' };
changeName(suho);
console.log(suho);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'suho');

// 5. Local scope 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // 지역변수 밖에서 호출하면 에러 발생.
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// 함수는 다른 변수와 같이 취급된다.
// 변수에 값으로 할당할 수 있음
// 인수로 다른 함수에 전달할 수 있습니다.
// 다른 함수에 의해 반환될 수 있다

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// 정해진 데이터를 처리하는 경우에는 if문보다 swidch문을 사용하자.
function calculate(command, a, b) {}
