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


let a=8;
while(true){
    let a=prompt('what is ur grade?');
    if(a>7){
        console.log(a);
    } else {
        alert('get out');
        break;
    }
}