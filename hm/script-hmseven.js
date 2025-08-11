// 1 for
const a = [1, 2, 3, 4, 5, 6];
let ttl = '';
for(i=0; i<a.length; i++){
    ttl+=a[i];
}
console.log(ttl);
// 1 join
const b = [1, 2, 3, 4, 5, 6];
console.log(b.join(''));


// 2
const cards =[
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
// minus
cards.splice(2, 1);
console.log(cards);
// add
cards.push('Карточка-6');
console.log(cards);
// change
cards.splice(2, 1, 'bob');
console.log(cards);