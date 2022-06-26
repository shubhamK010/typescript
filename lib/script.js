"use strict";
let na = "shubham";
console.log(na);
console.log('bye');
let inputBoxOne = document.querySelector('#one');
let inputBoxTwo = document.querySelector('#two');
let buttonA = document.querySelector('button');
buttonA === null || buttonA === void 0 ? void 0 : buttonA.addEventListener('click', function () {
    let val1 = Number(inputBoxOne.value);
    let val2 = Number(inputBoxTwo.value);
    alert(val1 + val2);
});
//js me iska out put 5+9=14 ata..lekin ts me 5+9=59 ayega because .value se hume string milta hai..string+string string dega number nahi dega
//in js= 5+9=14
//in ts=5+9=59
