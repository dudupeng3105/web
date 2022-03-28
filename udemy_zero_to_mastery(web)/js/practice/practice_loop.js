const basket = ['apples', 'oranges', 'grapes'];
const detailBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// // 1
// for ( let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

// // 2
// basket.forEach(item => {
//     console.log(item);
// })

// for of
// Iteration - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// enumerating - objects
for (item in detailBasket) {
    console.log(item)
}
// iterable vs enumerable의 차이 알아보기