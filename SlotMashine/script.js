const Slots = document.querySelectorAll(".slot");
const Items = [
    '👾',
    '🤖',
    '👽',
    '🤑',
    '🎪',
    '😸',
    '☠',
]
Slots[0].innerHTML = Items[0];
Slots[1].innerHTML = Items[0];
Slots[2].innerHTML = Items[0];

let random_item, timerId1, timerId2, timerId3;

function spin() {
    timerId1 = setInterval(function roll() {
        random_item = Math.floor(Math.random() * (Items.length - 1));
        Slots[0].innerHTML = Items[random_item];
    }, 10);
    setTimeout(() => { clearInterval(timerId1); }, 1000);
    timerId2 = setInterval(function roll() {
        random_item = Math.floor(Math.random() * (Items.length - 1));
        Slots[1].innerHTML = Items[random_item];
    }, 10);
    setTimeout(() => { clearInterval(timerId2); }, 2000);
    timerId3 = setInterval(function roll() {
        random_item = Math.floor(Math.random() * (Items.length - 1));
        Slots[2].innerHTML = Items[random_item];
    }, 10);
    setTimeout(() => { clearInterval(timerId3); }, 3000);
}