"use strict";
// let user ={   };
//
// user.name="John";
// user.surname="Smith";
// user.name="Pith";
// delete user.name;
//
//
//
// function isEpmty(obj) {
//     for (let key in obj){
//         return true;
//     }
//     return false;
// }
// let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // };
// // let sum=0;
// // for (let key in salaries){
// //     sum= sum+ salaries[key]
// // }
// // console.log(sum);



// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};



function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }

    return menu;

}
multiplyNumeric(menu);
 addEventListener();

