const add = document.getElementById("add");
const subtract = document.getElementById("subtract");

let quantity = document.getElementById("shoe-quantity-number");

add.addEventListener("click", () => {
    if (+quantity.value < 110) {
        quantity.value = +quantity.value + 1;
   } 
});

subtract.addEventListener("click", () => {
    if (+quantity.value > 1) {
        quantity.value = +quantity.value - 1;
    }
});