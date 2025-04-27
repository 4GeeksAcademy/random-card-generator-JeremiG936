let numbers = ["1", "2", "3", "4", "5", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["♥", "♦", "♣", "♠"];

function getRandom (arr) {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

let value = getRandom(suits);

let first = document.querySelector("#card-suit-1");
first.innerHTML = value;

let second = document.querySelector("#card-suit-2");
second.innerHTML = value;

let third = document.querySelector("#card-number");
third.innerHTML = getRandom(numbers)

if (value === "♥" || value === "♦") {
    first.style.color = "red";
    second.style.color = "red";
} else {
    first.style.color = "black";
    second.style.color = "black";
}

