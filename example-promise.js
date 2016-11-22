// function getTempCallback(location, callback) {
//     callback (undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Gardners', function(err, temp) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('temp', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Gardners').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

function addPromise (a, b) {
    return new Promise ((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve (a + b);
        } else {
            reject ('Both values must be a number!');
        }
    });
}

addPromise(4, 7).then((sum) => {
    console.log(sum);
}, (err) => {
    console.log(err);
});

addPromise(4, 'x').then((sum) => {
    console.log(sum);
}, (err) => {
    console.log(err);
});
