// let size = 30
// let shelf = {
//     size: size,
//     color: 'brown',
//     volume: 100,
//     open(){
//         console.log('opened');
//     }
// }
// shelf.color = 'red';
// shelf.material = 'wood';
// console.log(shelf);
// shelf.open()

// let person = {
//     name: 'bob',
//     age: 20,
//     gender: 'male',
//     info(){
//         console.log('alo');
//     }
// }
// console.log(person);
// person.info();

const students = [
    {
    name: 'bob',
    age: 20,
    gender: 'male',
    grade: 40,
    },
    {
         name: 'Sasha',
    age: 19,
    gender: 'female',
    grade: 96,
    },
    {
         name: 'DK',
    age: 16,
    gender: 'male',
    grade: 68,
    },
]
let endSolve = 0;
let sum=0;
let averageGrade = function(students){
    for(let i=0; i<students.length; i++){
        sum += students[i].grade;
        endSolve = sum / students.length;
    }
    return endSolve;
}
console.log(averageGrade(students));