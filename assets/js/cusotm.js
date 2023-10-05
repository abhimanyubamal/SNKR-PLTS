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

// NAVBAR

let navLabel = document.querySelector("label");
let navMenu = document.querySelector(".menu");
let flag = 0;

navLabel.addEventListener("click", () => {
    if (flag == 0) {
        navMenu.style.right = 0;
        navLabel.classList.add("switch-label");
        document.body.classList.add("overflow-y-hidden");
        flag++;
    }

    else {
        navMenu.style.right = '-100%';
        navLabel.classList.remove("switch-label");
        document.body.classList.remove("overflow-y-hidden");
        flag--;
    }
});

// NAVBAR A TAGS 
let aTags = document.querySelectorAll(".menu a");

aTags.forEach((a) => {
    a.addEventListener('click', () => {
        if (flag != 0) {
            navMenu.style.right = '-100%';
            navLabel.classList.remove("switch-label");
            document.body.classList.remove("overflow-y-hidden");
            flag--;
       }
    });
});