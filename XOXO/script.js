const Positions = document.querySelectorAll(".position");
const Name = document.querySelector(".name");
const Btn_reload = document.querySelector("#reload");

addEventListener("click", Click);

let random_item,
    numbers = "",
    overload = false,
    bot_win = false,
    man_win = false;

function Click(e) {
    if (e.path[0].classList.contains("position") && e.path[0].innerHTML == "" &&
        !man_win && !bot_win) {
        e.path[0].innerHTML = `<img src="img/X.png" alt="">`;
        random_item = Math.floor(Math.random() * (Positions.length));
        while (Positions[random_item].innerHTML != "") {
            random_item = Math.floor(Math.random() * (Positions.length));
            if (!(numbers.includes(random_item))) {
                numbers += random_item;
            }
            if (numbers.length == 9) {
                overload = true;
                break;
            }
        }
        check_win()
        if (!overload && !man_win) {
            Positions[random_item].innerHTML = `<img src="img/O.png" alt="">`;
        }
        check_win()
        if (bot_win) {
            Name.textContent = "Бот выиграл";
            Btn_reload.style.display = "block";
        }
        if (man_win) {
            Name.textContent = "Ты выиграл";
            Btn_reload.style.display = "block";
        }
        numbers = "";
        overload = false;
    }
    if (e.path[0].id == "reload") {
        numbers = "";
        overload = false;
        bot_win = false;
        man_win = false;
        for (let i = 0; i < Positions.length; i++) {
            Positions[i].innerHTML = "";
        }
        Name.textContent = "Крестики нолики";
        Btn_reload.style.display = "none";
    }
}

function check_win() {
    //horisontal
    if (Positions[0].innerHTML ==
        Positions[1].innerHTML &&
        Positions[0].innerHTML ==
        Positions[2].innerHTML) {
        if (Positions[0].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[0].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[3].innerHTML ==
        Positions[4].innerHTML &&
        Positions[3].innerHTML ==
        Positions[5].innerHTML) {
        if (Positions[3].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[3].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[6].innerHTML ==
        Positions[7].innerHTML &&
        Positions[6].innerHTML ==
        Positions[8].innerHTML) {
        if (Positions[6].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[6].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    //vertical
    if (Positions[0].innerHTML ==
        Positions[3].innerHTML &&
        Positions[0].innerHTML ==
        Positions[6].innerHTML) {
        if (Positions[0].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[0].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[1].innerHTML ==
        Positions[4].innerHTML &&
        Positions[1].innerHTML ==
        Positions[7].innerHTML) {
        if (Positions[1].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[1].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[2].innerHTML ==
        Positions[5].innerHTML &&
        Positions[2].innerHTML ==
        Positions[8].innerHTML) {
        if (Positions[2].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[2].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    // X and +
    if (Positions[0].innerHTML ==
        Positions[4].innerHTML &&
        Positions[0].innerHTML ==
        Positions[8].innerHTML) {
        if (Positions[0].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[0].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[2].innerHTML ==
        Positions[4].innerHTML &&
        Positions[2].innerHTML ==
        Positions[6].innerHTML) {
        if (Positions[2].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[2].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[1].innerHTML ==
        Positions[4].innerHTML &&
        Positions[1].innerHTML ==
        Positions[7].innerHTML) {
        if (Positions[1].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[1].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
    if (Positions[3].innerHTML ==
        Positions[4].innerHTML &&
        Positions[3].innerHTML ==
        Positions[5].innerHTML) {
        if (Positions[3].innerHTML == `<img src="img/O.png" alt="">`) {
            bot_win = true;
        }
        if (Positions[3].innerHTML == `<img src="img/X.png" alt="">`) {
            man_win = true;
        }
    }
}