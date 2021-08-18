console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {

    const promiseWifeBringingTicks = new Promise ((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got ${butter}`);
    console.log('husband: we should go in');
    console.log('wife: i need cold drinks for us');

    let coldDrinks = await getColdDrinks;

    console.log(`husband: i got ${coldDrinks}`);
    console.log('husband: we should go in');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');

//Promise.all:

    // let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
    // console.log(`${popcorn}, ${butter}, ${coldDrinks}`);

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');