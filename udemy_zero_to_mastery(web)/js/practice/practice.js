// 149
// 삼항연산자
// condition ? expr1: expr2;
// function isUservalid(bool) {
//     return bool;
// }

// var answer = isUservalid(true) ? "you may enter" : "Access Denied"
// console.log(answer)

// var automatedAnswer =
//     "Your account # is " + ( isUservalid(true) ? "1234" : "not available")
// console.log(automatedAnswer)

// function condition() {
//     if(isUservalid(true)) {
//         return "You may enter";
//     } else {
//         return "Access denied";
//     }
// }

// var answer2 = condition();
// console.log(answer2)

// switch 문
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "you encounter a monster";
//             break;
//         case "back":
//             whatHappens = "you encounter a home";
//             break;
//         case "right":
//             whatHappens = "you encounter a river";
//             break;
//         case "left":
//             whatHappens = "you encounter a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid director";            
//     }
//     return whatHappens;
// }

// console.log(moveCommand("forward"))
// console.log(moveCommand("left"))
// console.log(moveCommand("back"))
// console.log(moveCommand("right"))
// console.log(moveCommand("123465"))

// 151 es6
// let and const

// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }

// console.log('outside', wizardLevel) // false

// if (experience > 90) {
//     let wizardLevel = true;
//     console.log('inside', wizardLevel) // true
// } 

// // var과의 비교
// var wizardLevel2 = false;
// if (experience > 90) {
//     var wizardLevel2 = true;
//     console.log('inside', wizardLevel2) // true
// } 

// console.log('outside', wizardLevel2) // true

// // const
// const player = 'bobby';
// player = "sally"(error)  , const는 reassign이 불가!!
// 바꾸지 않을 변수가 있으면 const 사용, 함수라던가..

// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// };

// const의 attribute는 변경할 수 있음
// console.log(obj);
// obj.wizardLevel = true;
// console.log(obj);
// obj.player = 'sally';
// console.log(obj);

// Destruction
// 방법 1
// const player = obj.player;
// const experience = obj.experiencel;
// let wizardLevel = obj.wizardLevel;
// 방법 2
// const { player, experience} = obj;
// let { wizardLevel } = obj;

// const name = "john snow";
// const obj = {
//     [name]: "hello", 
//     [1 + 2]: 'hihi'
// };

// console.log(obj) // { '3': 'hihi', 'john snow': 'hello' }
// console.log(name)

// const a = "Simon";
// const b = true;
// const c = {};

// const obj = {
//     a,
//     b,
//     c
// };

// console.log(obj);  // { a: 'Simon', b: true, c: {} }

// Template Strings
// const name = "Sally";
// const age = 34;
// const pet = "horse";

// const greeting = "Hello" + name + "you seem to be doing" + age + "!";
// console.log(greeting);
// // 무조건 `(백틱)으로 묶어야 $ 사용 가능
// const greetingBest = `Hello ${name} you seem to be ${age-10}, What a lovely ${pet} you have`;
// console.log(greetingBest);

// default arguments

// function greet(name='', age=30, pet='cat') {
//     return `Hello ${name} you seem to be ${age-10}, What a lovely ${pet} you have`;
// }

// console.log(greet()) // Hello  you seem to be 20, What a lovely cat you have
// console.log(greet("john", 50, "monkey")) // Hello john you seem to be 40, What a lovely monkey you have

// Symbol type

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');
// console.log(sym1);
// console.log(sym2);
// console.log(sym3);
// console.log(sym2 === sym3); // false

// arrow functions

// function add(a, b) {
//     return a + b;
// }
// // 위에 function이랑 똑같음
// const add2 = (a, b) => a + b;

// console.log(add(1,3)) // 4
// console.log(add2(1,3)) // 4








// console.log('hello'.includes('o'));

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'))

// const square = (x) => x**2;
// console.log(square(2))

// const cube = (x) => x**3;
// console.log(square(3))

// const isValidAge = (age = 10) => age;
// console.log(isValidAge(23))
// // Symbol
// // Create a symbol: "This is my first Symbol"
// const sym = Symbol('This is my first Symbol');
// console.log(sym)

// 153. Advanced Functions
// 함수가 실행될 때마다 함수안의 지역변수가 계속 선언됨
// 이게 함수간의 간섭을 막는데 도움이 됨
// 별도의 스코프를 가짐으로써 다른 함수에서 똑같은 변수를 사용해도 문제가 없어짐
// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         console.log(greet);
//     }
//     return second;    
// }

// const newFunc = first(); //undefined
// console.log(newFunc()); //Hi
// second만 넘겨줄거 같지만, greet를 기억해서 넘겨줌
// Closures - a functions ran. the function executed. It's never going to execute again.
// But it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

// Currying 
// means we're changing this fucntion to only accept one parameter at a time
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// console.log(curriedMultiply(3)); //[Function (anonymous)], (b) => a * b(크롬 콘솔 상에서)
// console.log(curriedMultiply(3)(4)) // 12 (제대로 작동함)
// // curriedMultiply(3) = (b) => 3 * b
// // curriedMultiply(3)(4) = 3*4 = 12
// const multiplyBy5 = curriedMultiply(5);
// console.log(multiplyBy5(10)); // 50

// Compose
// is the act of putting two functions together to form a third fucntion
// where the ouput fo one function is the input of the other
// const compose = (f, g) => (a) => f(g(a));  // 합성함수, 중첩함수 (nested function)

// const sum = (num) => num + 1;

// console.log(compose(sum, sum)(5)); // 7  sum(sum(5))

//  Avoiding Side effects, functional purity.

// var a = 1;
// function b() {
//     a = 2; // 이 경우에 외부에 영향을 끼침 -> side effects
// }
// side effect를 피하면 functional purity를 얻을 수 있다.
// deterministic -> 입력 파라미터가 없던, 있던 return 값이 항상 있도록 한다.
// 이것이 버그를 피하는 핵심 원칙
//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, 
// change during a program’s execution. It must only depend on its input elements.

// 155. Advanced Arrays

// const array = [1, 2, 10, 16];

// const double = []
// const newArray = array.forEach(num => {
//     double.push(num * 2);
// });

// console.log('for Each', double); // [ 2, 4, 20, 32 ]

// // map, filter, reduce
// // super useful
// // loop 등에서 사용

// const mapArray = array.map(num => {
//     return num * 2; 
// })

// console.log('map', mapArray); // [ 2, 4, 20, 32 ]

// const mapArray2 = array.map(num => num * 2); // 이런식으로도 가능
// console.log('map', mapArray2); // [ 2, 4, 20, 32 ]
// forEach -> operation we tell it to on each element
// map -> has a restriction on the operation,
// expects the operation to return an element
// the map iterates again loops through over a collection of
// elements applying the operation on each element
// finally storing the result of each invocation of the operation
// map transforms the array
// forEach just does a whole bunch of actions based on the array
// forEach는 side effect의 위험이 있다.
// map은 데이터를 변경하는 것이 아닌, 새로 카피해서 만드는 개념

// filter
// filter도 map처럼 새로운 어레이를 만들어 변수에 저장하고
// filter는 조건에 맞는 요소들을 어레이로 만들어 저장하여 변수에 저장함
// const filterArray = array.filter(num => {
//     return num > 5
// })
// const filterArray = array.filter(num => num > 5); , 이렇게도 가능
// console.log('filter', filterArray)

// reduce
// map, filter, reduce는 functional purity을 가지고 있어 매우 많이쓰이고, 유용하다.
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num
// }, 0);  // 0은 accumulator 인자의 default 값, 만약에 30으로 바꾸면 결과가 59로 나옴

// console.log('reduce', reduceArray);


// 157 Advanced object
// referenc type
// console.log([] === []) // false, array객체 생성, 또 다른 array 객체 생성, 비교 --> false(다른 객체니까)
// console.log([1] === [1]) // false
// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10};
// console.log(object1 === object2); // true
// console.log(object1 === object3); // false
// console.log(object1.value === object3.value); //true

// object1.value = 15;
// console.log(object2); // { value: 15 }

// console.log(1 === 1) // true
// === 이 true이려면 변수가 참조하는 객체가 같아야함

// context vs scope
// context tells you, where we are within the object
// console.log(this);  // {}, 크롬 console 에서 실행시 window 객체 반환
// console.log(this == window); // 크롬에서 실행시 true
// 'this' means is what is the object environment that we're in right now
// , the best way to think about it is what is to the left of the dot?
// window.alert() 는 this.alert() 같음

// const object4 = {
//     a: function() {
//         console.log(this);
//     }
// }
// console.log(object4.a()) // { a: [Function: a] }
// instantiation를 할 때 매우 중요
// 게임을 만들 때 수 많은 수에 트롤, 흑마법사 등을 만든다 치면
// 개개의 function을 만드는 것이 아니라 function을 인스턴스화(복사본)해서 수행함
// instantiation
// class Player {
//     constructor(name, type) {
//         // property 생성
//         console.log('player', this)
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi I amd ${this.name}, I'm a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type){
//         // console.log('wizard', this)   // reference error 남 에러가 안나게 하려면  super를 호출하고 해야함
//         super(name, type)
//         console.log('wizard정보', this)
//     }
//     play() {
//         console.log(`WEEEEEEEEE, I'm a ${this.type}`);
//     }
// }

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic');
// console.log(wizard1.play()) // WEEEEEEEEE, I'm a Healer
// console.log(wizard1.introduce()) // Hi I amd Shelly, I'm a Healer
// console.log(wizard2.play()) // WEEEEEEEEE, I'm a Dark Magic
// console.log(wizard2.introduce()) // Hi I amd Shawn, I'm a Dark Magic

// 159 By Reference VS By Value
// a=5, b=4 (by value objects)
// a = object b = object (by reference)

// pass by value example
// var a = 5;  // (copy primitive type 5)
// var b = a;  // (copy primitive tpye 5)

// b++;

// console.log(a) //5
// console.log(b) //6

// pass by reference
// let obj1 = {name: 'Yao', password: '123'};
// let obj2 = obj1; // let obj2 = address in memory

// obj2.password = 'easybusy'

// console.log(obj1) // { name: 'Yao', password: 'easybusy' }
// console.log(obj2) // { name: 'Yao', password: 'easybusy' }

// why is this good
// not copy object, just store one object in memory
// why is this bad
// sombody else changes a property on that referenced object by mistake

// var c = [1,2,3,4,5];
// var d = c;
// var e = [].concat(c);  // cloned array
// d.push(156894165)

// console.log(d)
// console.log(c) // c도 바뀐다.
// console.log(e) // e는 바뀌지 않음

// let obj = {a: 'a', b:'b', c:'c'};
// let clone = Object.assign({}, obj); // clone object
// let clone2 = {...obj} // 또다른 객체 복사 방법

// obj.c = 5;
// console.log(obj); // { a: 'a', b: 'b', c: 5 }
// console.log(clone); // { a: 'a', b: 'b', c: 'c' }
// console.log(clone2); // { a: 'a', b: 'b', c: 'c' }

// 객체안에 객체가 또 있는 경우
// let obj = {a: 'a',
//  b:'b', 
//  c: {
//      deep: 'try and copy me'
//  }
// };
// let clone = Object.assign({}, obj); 
// let clone2 = {...obj} 
// deep clone 방법
// let superclone = JSON.parse(JSON.stringify(obj))
// // obj.c = 5;
// // console.log(obj); // { a: 'a', b: 'b', c: 5 }
// // console.log(clone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
// // console.log(clone2); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// obj.c.deep = 'hahaha';
// console.log(obj); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// console.log(clone); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// console.log(clone2); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// console.log(superclone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }, 깊은복사이므로
// 복제했지만 바뀌게 된다 -> clone은 얕은 복사임 그래서 이런 것(객체 안에 객체는 또다른 메모리 주소를 가지고 있으므로)
// 얕은복사는 첫번째 레이어만 복사 가능
// 딥클론은 성능이 떨어진다. 조심해라

// 164 ES8 (ES2017)
console.log('Turtle'.padStart(10)); // '    Turtle'
console.log('Turtle'.padEnd(10)); // 'Turtle    '

// ending comma -> 아직 수행하고 싶지않은 많은 파라미터가 있을 때 유용
// const fun = (a,b,c,d,) => {
//     console.log(a);
// }

// console.log(fun(1,2,3,4)) // 1

// Object.values
// Object.entries
// Object.keys

// let obj = {
//     username0: 'Santa',
//     username1: 'Rudolf',
//     username2: 'Mr.Grinch'
// }

// console.log(Object.keys(obj))  //[ 'username0', 'username1', 'username2' ]
// Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key])
// })
// // username0 Santa
// // username1 Rudolf
// // username2 Mr.Grinch

// Object.values(obj).forEach(value => {
//     console.log(value);
// })
// // Santa
// // Rudolf
// // Mr.Grinch

// Object.entries(obj).forEach(value => {
//     console.log(value);
// })
// // [ 'username0', 'Santa' ]
// // [ 'username1', 'Rudolf' ]
// // [ 'username2', 'Mr.Grinch' ]

// Object.entries(obj).map(value => {
//     return console.log(value[1] + value[0].replace('username', ''));
// })
// // Santa0
// // Rudolf1
// // Mr.Grinch2

// Async Await


