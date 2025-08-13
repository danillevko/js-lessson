// let a = function(){
//     console.log('hello');
// } 
// a();

// function bool(a){
//   return a%2===0;
// }
// console.log(bool(5));



// function factorial(a){
//     let b = 1;
//     for(i=2; i<=a; i++){
//         b*=i;
//     }
//     return b;
// }
// console.log(factorial(3));


// function hello2(name){
//     console.log(`Hi ${name}`);
// }
// hello2('Lola');

// function mul(n, m){
//     console.log(n*m);
//     console.log(n+m);
//     console.log(n/m);
// }
// let n = parseInt(prompt('again'));
// let m = parseInt(prompt('give  num'));
// mul(n, m);


// let array = [1, 3, 2, 5, 4];
// function maxNum(array){
//     return Math.max(...array);
// }
// console.log(maxNum(array));


let score = [100, 90, 84, 90];
let sum = 0;
function myAverageScore(...score){
    for(let i=0; i<score.length; i++){
     sum += score[i];
    }
    let average = sum/score.length;
    if(average>=91){
        console.log('A');
    } else if(average>=81 && average<=90){
        console.log('B');
    } else if(average>=71 && average<=80){
        console.log('C');
    }else if(average<=70){
        console.log('D');
    }
}
myAverageScore(...score)