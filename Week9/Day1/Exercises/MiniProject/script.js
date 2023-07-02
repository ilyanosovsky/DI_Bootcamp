const quoteArr = [
    {
        id : 0,
        author : "Ivan Kozin",
        quote : "Impossible is just an opinion"
    },
    {
        id : 1,
        author : "Ben Parker",
        quote: "With greate power comes greate responsibility"
    },
    {
        id : 2,
        author: "Bruce Wane",
        quote: "I'm Batman"
    }
]

let previousRandomNum = -1; // Initialize with a value that won't match any index

function newQuote() {
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * quoteArr.length);
  } while (randomNum === previousRandomNum);

  previousRandomNum = randomNum;
  document.getElementById('quoteDisplay').innerHTML = quoteArr[randomNum]['quote'];
  document.getElementById('authorDisplay').innerHTML = quoteArr[randomNum]['author'];

}