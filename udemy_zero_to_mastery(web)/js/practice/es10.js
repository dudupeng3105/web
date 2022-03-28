// ES10
const array = [1,[2,3],3,[4,5]]
console.log(array.flat()) //[ 1, 2, 3, 3, 4, 5 ], remove neested array

const array3 = [1,2,[3,4,[5]]]
console.log(array3.flat()) //[ 1, 2, 3, 4, [ 5 ] ] -> 한 level만 평탄화 시킴

const array4 = [1,2,[3,4,[5]]]
console.log(array4.flat(2))
// .flat(level[default = 1]), [ 1, 2, 3, 4, 5 ]

// 반 칸도 없애짐
const entries = ['bob', 'sally',,,,,'cindy']
console.log(entries.flat())
// [ 'bob', 'sally', 'cindy' ]

const zoo = [['🐦', '🐫'], '🐪', '🐣', ['🐡','🐠'], [[[['🐞']]],'🐜'],['🐘','🐯']]

const zooChaos = zoo.flatMap(animal => animal + '🐯')
console.log(zooChaos)
// [ '🐦,🐫🐯', '🐪🐯', '🐣🐯', '🐡,🐠🐯', '🐞,🐜🐯', '🐘,🐯🐯' ]

userEmail ='          eddytheeagele@gmail.com'
userEmail2 = 'jonnydangerous@gmail           '
console.log(userEmail.trimStart()) //'eddytheeagele@gmail.com'
console.log(userEmail2.trimEnd())  //'jonnydangerous@gmail'

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel',18]]

console.log(Object.fromEntries(userProfiles))
const obj = Object.fromEntries(userProfiles) // array -> dict
//{ commanderTom: 23, derekZlander: 40, hansel: 18 }
console.log(Object.entries(obj)) // dict -> array
// [ [ 'commanderTom', 23 ], [ 'derekZlander', 40 ], [ 'hansel', 18 ] ]

// 비동기 부분에서 더 배움
// try 해보고 에러나면 catch 구문 실행 (파이썬 try except 구문)
try {
    bob + 'hi'
} catch (error){
    console.log('you messed up ' + error)
}

