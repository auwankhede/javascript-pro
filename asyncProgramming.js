console.log('Before');
const user = getUser('amol'); //fetching data from database
console.log(user);
console.log('after');

function getUser(userName) {
    //get record from db will take 2 seconds to simulate this we are using settimout

    setTimeout(() => {
        console.log('Reading a user from a database...');
        return { "name":userName, "gitHubUsername":'awankhede'};
    }, 2000);

    return 1;

}