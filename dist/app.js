"use strict";
const button = document.querySelector("button");
function clickHandler(message, age) {
    // let userName = "Max"
    console.log("Clicked " + message + " " + age);
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome", 30));
}
