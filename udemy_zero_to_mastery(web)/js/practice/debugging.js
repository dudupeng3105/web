// 1. first read a code
const flattened = [[0, 1],[2,3],[4,5]].reduce(
    (accumulator, array) => {
        debugger; // console에서 디버깅 가능
        return accumulator.concat([0, 1])
    }, []);
// 

console.log(flattened)