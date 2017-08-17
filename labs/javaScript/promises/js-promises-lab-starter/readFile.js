'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }

//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

//   let lines = content.split('\n');

//   // clean up the array by removing the empty line
//   lines.pop();

//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });

let promiseToReadFile = new Promise((resolve, reject) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
    resolve(content);
    reject(error);
  });
});
  promiseToReadFile.then((result) => {
      return result;
    })
    .then(()=>{
      let lines = content.split('\n');
      return lines;
    })
    .then((lines)=>{
      lines.pop();
      return lines;
    })
    .then((lines)=>{
        lines.forEach(function(line) {
      console.log('Hello, ' + line + '!');
      });
    })
    
      
   
    .catch((error)=> {
      console.error(error);
    })
