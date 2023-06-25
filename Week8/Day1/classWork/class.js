// const btnRed = document.querySelector("#btn_red");
// btnRed.addEventListener("click", changeToRed); //passing the reference to the function

// function changeToRed() {
//     document.body.style.backgroundColor = "red";
// }

// function changeToRed() {
//     document.body.classList.toggle("toRed");
// }

// const btnRed = document.querySelector("#btn_red");
// btnRed.addEventListener("mouseover", changeToRed); //passing the reference to the function
// btnRed.addEventListener("mouseout", changeToRed);

// function changeToRed() {
//     document.body.classList.toggle("toRed");
// }


const btnRed = document.querySelector("#btn_red");
btnRed.addEventListener("click", changeColor); //passing the reference to the function

const btnBlue = document.querySelector("#btn_blue");
btnBlue.addEventListener("click", changeColor);

function changeColor(event) {
    // console.log(event);
    const color = event.target.value;
    document.body.style.backgroundColor = color;
}