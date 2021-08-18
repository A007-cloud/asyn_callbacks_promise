// Normals promises:

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    // console.log(`person3: shows ${t}`);
    console.log('wife: i have the ticket');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));

});

const getColdDrinks = getButter.then((t) => {
    console.log('husband: i got butter');
    console.log('husband: we should go in');
    console.log('wife: i need cold drinks for us');
    return new Promise((resolve, reject) => resolve(`${t} drinks`));
});

getColdDrinks.then((t) => console.log(t));


console.log('person4: shows ticket');
console.log('person5: shows ticket');