// Level 0
/*
    setTimeout(() => {
    console.log('1');
    }, 0);

    new Promise(function (resolve, reject) {
    console.log('2');

    resolve(3);
    })
    // add to job queue by resolve()
    .then(function (val) {
        console.log(val);
    });

    console.log(4);
*/

// Output
/*
    2
    4
    3
    1
*/

// Level 1
console.log(0);

setTimeout(() => {
  console.log('1');
}, 0);

new Promise(function (resolve, reject) {
  console.log('2');

  resolve(3);
})
  // add to job queue by resolve()
  .then(function (val) {
    console.log(val);
  });

new Promise(function (resolve, reject) {
  console.log('4');

  resolve(5);
})
  // add to job queue by resolve()
  .then(function (val) {
    console.log(val);
  });

console.log(6);

// Output
/*
    0
    2
    4
    6
    3
    5
    1
*/
