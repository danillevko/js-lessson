// const string='hello world';
// console.log(string.split(' '));
// console.log(string.split(''));


// const names = ['asd', 'dfggd', 'werrrwe']
// console.log(names.join(', '));
// console.log(names.join('/'));


// const names = ['asd', 'dfggd', 'werrrwe'];
// console.log(names.indexOf('werrrwe'));
// console.log(names.includes('asd'));
// console.log(names.includes('ppop'));


// const nums=[1, 2, 3, 4];
// nums.push(5);
// console.log(nums);
// nums.pop(5);
// console.log(nums);
// nums.unshift(0);
// console.log(nums);
// nums.shift(0);
// console.log(nums);


// const numS=[1,2,3,4,5];
// numS.push(6);


// const clients=['bob', 'anna', 'jame'];
// clients.pop('jame');
// console.log(clients);


// const numS=[1,2,3,4,5];
// console.log(numS.indexOf(3));


// const stringS=['bob', 'anna', 'jame', 'lilly', 'ron'];
// console.log(stringS.join(', '));


// const title = 'Top 10 benefits of React framework';
// const a = title.toLowerCase().split(' ').join('-');
// console.log(a);


// const line = 'apple banana orange apple banana';
// const a=line.split(' ');
// const fruit = [];
// for(i=0; i<line.length; i++){
//     if(!fruit.includes(a[i])){
//         fruit.push(a[i]);
//     }
// }
// console.log(fruit);


// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total=0;

// let sum = array1.concat(array2);
// for(let i=0; i<sum.length; i++){
//     total+=sum[i];
// }
// console.log(total);


// const message = 'Welcome to Ukraine!';
// let letters = message.split('');
// console.log(letters);
// console.log(letters.indexOf('l'));
// let join = letters.join('');
// console.log(join);


// const styles = [ 'Джаз', 'Блюз',];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles.splice(1, 1, 'Класика');
// console.log(styles);
// let shift = styles.shift();
// console.log(shift);
// styles.unshift('Реп', 'Реггі');
// console.log(styles);


const a = 'JavaScript';
let result = '';
for(b of a){
    if(b === b.toUpperCase()){
        result += b.toLowerCase();
    } else{
        result += b.toUpperCase();
    }
}
console.log(result);