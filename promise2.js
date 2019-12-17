let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('Cleaned the room');
    });
};

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message+ ' remove Garbage');

    });
}

let winIceCream = (message) =>{
    return new Promise((resolve, reject) => {
        resolve(message+ ' won Icecream');
    });
}

/* cleanRoom().then((result) => {
    return removeGarbage(result);
}).then((result) => {
    return winIceCream(result);
}).then((result) => {
    console.log('finished' +result);
}); */

/* Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(() =>{
    console.log('All finished');
} ) */
Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(() =>{
    console.log('One of the promise is finished');
} );