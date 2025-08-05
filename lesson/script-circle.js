// let a=0;
// while(a<10){
//     console.log(a);
//     a+=1;
// }

// let a=0;
// while(a<=5){
//     console.log(`watcher ${a}`);
//     a+=1;
// }

// let password='';
// do{
//     password = prompt('type password', '');
// } while(password.length<5);

// console.log('password is: ', password);


// let a=100;
// for(let i=0; i<a; i+=1){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }

// let num=0;
// while(num<5){
//     console.log(`Число ${num}`);
//     num+=1;
// }


// let a=8;
// while(true){
//     let a=prompt('what is ur grade?');
//     if(a>7){
//         console.log(a);
//     } else {
//         alert('get out');
//         break;
//     }
// }


// let a;
// do{
// a=prompt('give me a number');
// } while(a<100);
// alert('thanks');


// let a=prompt('give me a num');
// if(Number(a)>100){
//     alert('thanks');
// } else{
//     let a=prompt('give me a num');
// }

// let employees=10;
// let totalSalary=0;
// for(let i=0; i<employees; i++){
//     const salary=Math.floor(Math.random()*(5000-500+1));
//     totalSalary+=salary;
// }
// console.log(totalSalary);

// let min=0;
// let max=5;
// let sum=0;
// for(i=min; i<=max; i++){
//     if(i%2===0){
//         sum+=i;
//     }
// }
// console.log(sum);

let password=prompt('enter password');
let message;
if(password === null){
    message='Скасовано користувачем!';
} else if(password === 'ADMIN_PASSWORD'){
    message='Ласкаво просимо!';
} else{
    message='Доступ заборонений, невірний пароль!';
}
alert(message);