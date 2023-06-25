// Exercise 1
// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.

let select = document.querySelector("select");

select.addEventListener("change", function () {
    let selectedOption = select.options[select.selectedIndex];
    console.log(selectedOption.value);
    }
);

function addOption() {
    let option = document.createElement("option");
    option.value = "classic";
    option.innerHTML = "Classic";
    select.appendChild(option);
    option.selected = true;
}

addOption();
