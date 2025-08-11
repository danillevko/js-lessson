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


const line = 'apple banana orange apple banana';
const a=line.split(' ');
const fruit = [];
for(i=0; i<line.length; i++){
    if(!fruit.includes(a[i])){
        fruit.push(a[i]);
    }
}
console.log(fruit);

