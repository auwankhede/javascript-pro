let promiseToCleanTheRoom = new Promise((resolve,reject) => {
    
    //Cleaning the room

    let isClean = false;

    if(isClean) {
        resolve('Clean');
    } else {
        reject('Not Clean');
    }
});

promiseToCleanTheRoom.then((fromResolve) => {
    console.log('The room is '+fromResolve)
}).catch((fromReject) => {
    console.log('The room is '+fromReject);
});