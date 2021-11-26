// 1. Use strict
// added in ES 5 ES 5에 추가되었음
// use this for Vanilla Javascript 바닐라 자바스크립트에 사용함
'use strict';

// 2. Variable (mutable), rw(read/write) 변수(변경가능), 읽기 쓰기 모두 가능
// ES6에서 추가되었음
let globalName = 'global name';
{
  let name = 'suho';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(사용금지!)
// var hoisting (선언을 아래에서 위로 이동)
// 블록 범위가 없음
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants (변하지 않음), r(읽기 전용)
// 불변 데이터 유형을 선호하는 이유.
// - 보안상의 이유.
// - thread safety
// - 실수를 줄여줌
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const suho = 'suho';
const greeting = 'hello' + suho;
console.log(char);
console.log(`value: ${greeting}, type: ${typeof greeting}`); // typeof 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.
const helloBob = `hi ${suho}!`; //templeate literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 > 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: $ ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

const shin = { name: 'shin', age: 20 };
shin.age = 29;
console.log(shin);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
