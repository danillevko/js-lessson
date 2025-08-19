// const numbers = [1, 4, 16, 121, 9, 10];
// const squaredNumbers = [];
// const testNums = function(numbers, callback){
//     for(let i=0; i<numbers.length; i++){
//      squaredNumbers.push(callback(numbers[i]));
//     }
//     return squaredNumbers;
// }

// const squared = function(number){
//     return number*number;
// }

// console.log(testNums(numbers, squared));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processArray = function(numbers, callback){
    const addedNumbers = [];
    for(let i=0; i<numbers.length; i++){
        addedNumbers.push(callback(numbers[i]));
    }
    return addedNumbers;
}

const addingFunction = function(num){
    return num + 1;
}

console.log(processArray(numbers, addingFunction));