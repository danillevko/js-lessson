// let a='hello'+'hello';
// console.log(a.indexOf('o'));
// let b='hello'+'hello';
// console.log(b.includes('h'));
// let c='hello'+'hello';
// console.log(c.endsWith('h'));
// let d='hello'+'hello';
// console.log(d.padStart(15,'t'));
// let string='hello';
// console.log(`abv ${string}`);

// let a='danylo levko';
// console.log(a.length);

// let b='danylo';
// console.log(b.toUpperCase());

// let c='danylo';
// console.log(c.charAt(0));

// let d='danylo levko';
// console.log(d.indexOf(' '));

// let e='danylo';
// console.log(e.replace('d','@'));

// let f='JavaScript';
// console.log(f.substring(0,4));

// let x='   bob        ';
// let y='smith';
// let n='luxery';
// let g='111';
// console.log(`Гість ${x} ${y} поселяється в ${n} номер ${g}`);

// console.log(x.trim());

// let a='Ваш баланс поповнено на 1';
// console.log(a.padEnd(100,'0'));
// console.log(a.length);

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';
console.log(string1.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord2));