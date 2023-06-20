let star = '*'

for (let i = 0; i < 10; i++) {

    console.log(star)
    star += '*'
}

// Nested Loops

for (let i = 0; i <= 5; i++) {
    let star = '*'
    for (let j = 1; j <= i; j++) {
        star += '*'
    }
    console.log(star)
}