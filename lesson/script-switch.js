// let a=prompt('what is the day today');
// switch(a){
//     case 'Monday':
//     alert('first day of the week');
//     break;
//     case 'Tuesday':
//         alert('second');
//         break;
//         case 'Wednesday':
//             alert('third');
//             break;
//             case 'Saturday': case 'Sunday':
//             alert('weekends');
//             break;
//             default:
//             alert('this is not a day of the week');
// }

// let a=prompt('gj');
// switch(a){
//     case '0':
//         console.log(0);
//         break;
//         case '1':
//             console.log(1);
//             break;
//             case '2': case '3':
//                 console.log(2,3);
//                 break;
// }

let a=prompt('age');
switch(true){
    case (a >= 0 && a <= 16):
        alert('kids');
        break;
        case (a >= 17 && a <= 60):
            alert('adults');
            break;
            case (a >= 61 && a <= 100):
                alert('old');
                break;
                default:
                    alert('not a number');
}