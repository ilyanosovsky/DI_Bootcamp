const learnJS = () => {
    console.log("Start JS...");
    return new Promise(resolve => {
      setTimeout(() => {
          resolve('Javascript DONE')
      },3000)
    })
}

const learnReact = () => {
    console.log("Start React...");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('React DONE')
        },2000)
    })
}

async function checkOne() {
    //SYNCHRONOUS
    const t0 = performance.now();
    
    const js = await learnJS();
    const react = await learnReact();
    console.log("End...");
   
    const t1 = performance.now();
    console.log(`Call took ${t1 - t0} milliseconds.`);
}

checkOne()


async function checkTwo() {
    //SYNCHRONOUS
    const t0 = performance.now();

    const finalPromise = Promise.all([learnJS(),learnReact()]);
    finalPromise.then(result => {
        console.log(result)
        console.log("End...")
        const t1 = performance.now();
        console.log(`Call took ${t1 - t0} milliseconds.`);
    });
}

checkTwo()


//OUTSIDE ASYNCHRONOUS
// for (let i=0; i<40; i++) {

// }


async function checkThree() {
    //SYNCHRONOUS
    const t0 = performance.now();

    const parisresponse = await fetch(`https://api.sunrise-sunset.org/json?lat=48.864716&lng=2.349014`)
    const nyresponse = await fetch(`https://api.sunrise-sunset.org/json?lat=40.730610&lng=-73.935242`) 

    const parisresult = await parisresponse.json()
    const nyresult = await nyresponse.json()

    const t1 = performance.now();
    console.log(`Call took ${t1 - t0} milliseconds.`);
}

checkThree()


async function checkFour() {
    //SYNCHRONOUS
    const t0 = performance.now();

    const promiseResponse = await Promise.all([
        fetch(`https://api.sunrise-sunset.org/json?lat=48.864716&lng=2.349014`),
        fetch(`https://api.sunrise-sunset.org/json?lat=40.730610&lng=-73.935242`)
    ])
    
    const promiseResults =  await Promise.all([
        promiseResponse[0].json(),
        promiseResponse[1].json(),
    ])
     
    console.log(promiseResults);

    const t1 = performance.now();
    console.log(`Call took ${t1 - t0} milliseconds.`);
}

checkFour()