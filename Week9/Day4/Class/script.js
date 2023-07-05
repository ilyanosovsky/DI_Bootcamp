// PROMISE . ALL

async function check() {
    return "hello"; //promise is resolved
}

async function checkOne() {
    throw new Error("rejection");
}

const learnJS = () => {
    return new Promise(resolve => {
      setTimeout(() => {
          resolve('Javascript DONE')
      },3000)
    })
}

const learnReact = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('React DONE')
        },2000)
    })
}

async function checkStudent(){
    // INSIDE THE FUNCTION
    // INSIDE SYNCHRONOUS
    //first learn JS
    // const js = await learnJS();
    // console.log("hello one", js);
    // const react = await learnReact();
    // console.log("hello two", react);
    const finalPromise = Promise.all([learnJS(), learnReact()]);
    finalPromise.then(result => {
        console.log(result);
        console.log("result");
    } )
}

checkStudent()

// for(let i = 0; i< 40; i++) {
//     console.log(i);
// }