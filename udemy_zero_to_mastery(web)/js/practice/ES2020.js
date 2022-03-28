// 1. BigInt
console.log(typeof 164189743216354654651621) // number
console.log(typeof 1n) // bigint
// max_safe_integer
console.log(Number.MAX_SAFE_INTEGER)
// 9007199254741000
console.log(Number.MAX_SAFE_INTEGER + 10)
// 9007199254741000, 큰 수에서 연산이 잘안됨
console.log(9007199254741000-1)
// 9007199254740999n(bigint에서는 작동함)
console.log(9007199254741000n-1n)
console.log(1n+2n) // 3n
// 2. optional Chaining operation ?.
let will_pokemon ={
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrie_pokemon ={
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

// chaining operation
// 연속해서 확인해나감(3(or多)중 for문 할 필요가 없음)
let weight3 = andrie_pokemon?.pikachu?.weight

console.log(weight3)

// 3.  Nullish coalescing opreation ??
let power = andrie_pokemon?.pikachu?.power || 'no power'
// truth면 값을 주고, 없으면 False이면 no power 반환
// power가 빈 문자열('')이더라도 False임
console.log(power) // no power
// nullish coalescing은 '',0 등은 있는 것으로 친다.
let power2 = andrie_pokemon?.pikachu?.power ?? 'no power'
console.log(power2) // 0

