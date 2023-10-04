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

// TABS

function displayTab(tabId) {

    let tabContent = document.querySelectorAll(".tab-content");

    tabContent.forEach((a) => {
        a.style.display = 'none'; 
    });

    document.querySelectorAll(".tab-buttons").forEach((b) => {
        b.classList.remove("tab-effect");   
    }
    );

    let tabContentID = document.getElementById(tabId);

    tabContentID.style.display = 'block';

    // let tab = 1;
    let tabButton = document.querySelector(`button[onclick="displayTab('${tabId}')"]`);
    console.log(tabButton);
    tabButton.classList.add("tab-effect");

}

displayTab('tab-1');