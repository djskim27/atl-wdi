require('es6-promise');
// //warm up
// setTimeout(() => {
//     console.log("TIMED OUT!");
// }, 300);

//  'use strict';

//FULFILL A PROMISE

//     var promise = new Promise(function (fulfill, reject) {
//       // Your solution here
//       setTimeout(() => {
//           fulfill();
//       },300);
//     });

//     promise.then(() => {
//         console.log('FULFILLED!');
//     })

//REJECT A PROMISE
var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => {
        reject(new Error('REJECTED!'))
    }, 300);
});

function onReject(error) {
    // Your solution here
    console.log(error.message);
}


// Your solution here
promise.then(null, onReject);