// what is a program
// - allocate memory
// - parse and execute
// 크롬에서 v8엔지은 작성한 자바스크립트를 읽고
// 기계에서 실행가능한 instructions으로 바꾼다.
// 엔진은 메모리 힙과 call stack으로 나뉜다.
// 메모리 힙에서 메모리 할당, 콜스택에서 코드를 읽고 실행하고
// 어딨는지 알려준다.
// const a = 1;
// const b = 10;
// const c = 100;
// 메모리 누수는 사용하지 않은 메모리가 있을 때 발생한다.
// 사용하지 않고 나두면 메모리에 계속 자리 차지함
// 그래서 global 변수가 안좋음

// 콜스택
// console.log('1');
// console.log('2');
// console.log('3');
// 순서대로 콜 스택에 넣고, 하나씩 pop하면서 실행한다.

// const one = () => {
//     const two = () => {
//         console.log('4');
//     }
//     two();
// }
// console.log(one())


// console.log('4') -> 처음 실행 -> 제거
// two() -> 실행 -> 제거
// one() -> 마지막으로 실행 -> 제거
// CALL STACK

// 싱글스레드 -> 1 call stack (FILO)
// 멀티스레드 -> multi call stack
// why single thread -> 복잡한 시나리오를 처리할 필요가 없어 쉽다.
// multi thread의 경우 deadlocks 등의 상황 발생

// function foo() {
//     foo()
// }

// foo() // RangeError: Maximum call stack size exceeded

// think of asynchronous like a behavior. Synchronous execution is great
// because it's predictable

console.log('1');
// 2000ms 뒤에 실행된다. ㄷㄷ 이게 비동기
setTimeout(() => {
    console.log('2');
}, 0)
console.log('3');

// Web APIs - DOM(document), AJAX(XMLHttpRequest), Timeout(setTimeout)
// 자바스크립트가 아닌 웹에서 제공함

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// settimeout이 들어오면 web api로 보내고 2초뒤에 callback하도록
// 함 그동안 다른 코드들이 돌아가고 2초가 되면 콜백큐에서 callback()
// 명령을 콜스택으로 돌려주고 이제서야 기다렸던 함수를 실행함
// 0으로 설정하더라도 이미 console.log(3)으로 콜스택이 이동해버림
// 그래서 132로 나옴
// 자바스크립트는 비동기식이다(콜백)


