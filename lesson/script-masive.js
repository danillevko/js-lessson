// const world = [1, 2, 3]









// const Arr1=[1, 5, '4', 'hello'];
// const Arr2=[ true, 2, {}, ['a'], 222];
// console.log(Arr1[1]+Arr2[1]);


// const strings=['hi', 'bye', 'sybau']
// console.log(typeof strings[0]);
// console.log(strings[strings.length -1]);
// strings[strings.length -1] = 'privet';
// console.log(strings[strings.length -1]);
// for(let i=0; i<strings.length; i++){                        
//     console.log(strings[i]);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for(let i=0; i<cart.length; i++){
//     total+=cart[i];
// }
// console.log(total);


// const names=['bob', 'anna', 'denis'];
// for(const item of names){
//     console.log(item);
// }

// const Arr1=[18,19,20,21];
// Arr1[4] = 22;
// for(let i=0; i<=Arr1.length; i++){
//     console.log(Arr1[i]);
// }

// const Arr2=[18,'19',20,21];
// for(const item of Arr2){
//     console.log(typeof item);
//     console.log(item);
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0; 
// for(let i=0; i<=numbers.length; i++){
//     if(numbers[i]%2===0){
//         total+=numbers[i];
//     }
// }
// console.log(total);


// const login=['bob', 'gabe', 'anna', 'loran'];
// const ourLogin='danil';
// for(let i=0; i<=login.length; i++){
//     if(login[i] === ourLogin){
//         console.log(`Користувач ${ourLogin} знайдено.`);
//     } else{
//         console.log(`Користувач ${ourLogin} не знайдено`);
//     }
// }


const login=['bob', 'gabe', 'anna', 'loran'];
const ourLogin='anna';
for(const item of login){
    if(item === ourLogin){
        console.log(`Користувач ${ourLogin} знайдено.`);
        break;
    } 
}