const all_hand = document.querySelectorAll('.card');
const stone = all_hand[0].innerHTML;
const paper = all_hand[1].innerHTML;
const scissors = all_hand[2].innerHTML;
const left_field = document.querySelector('#left');
const right_field = document.querySelector('#right');
const Result = document.querySelector('#result');
const Player_score = document.querySelector('#player');
const Bot_score = document.querySelector('#bot');

let player_score = 0,
    bot_score = 0,
    random_hand = 0;

Result.innerHTML = '<p class = "text">Выбери карточку, чтобы начать игру!</p>';

function mini_game(img_id) {
    if (player_score < 3 && bot_score != 3 || bot_score < 3 && player_score != 3) {
        switch (img_id) {
            case ('stone'):
                left_field.innerHTML = stone;
                break;
            case ('paper'):
                left_field.innerHTML = paper;
                break;
            case ('scissors'):
                left_field.innerHTML = scissors;
                break;
        }

        let timerId = setInterval(function roll() {
            random_hand = Math.floor(Math.random() * (all_hand.length - 1));
            switch (random_hand) {
                case (0):
                    right_field.innerHTML = stone;
                    break;
                case (1):
                    right_field.innerHTML = paper;
                    break;
                case (2):
                    right_field.innerHTML = scissors;
                    break;
            }
        }, 0.2);

        setTimeout(() => { 
            clearInterval(timerId);
            if (left_field.innerHTML == right_field.innerHTML) {
                Result.innerHTML = '<p class = "text">Ничья</p>'
            }
            else {
                if (
                    (left_field.innerHTML == stone) && (right_field.innerHTML == paper)
                    || (left_field.innerHTML == paper) && (right_field.innerHTML == scissors)
                    || (left_field.innerHTML == scissors) && (right_field.innerHTML == stone)
                ) {
                    Result.innerHTML = '<p class = "text">Бот выиграл!</p>'
                    bot_score++;
                    Bot_score.textContent = `Бот: ${bot_score}`;
                }
                if (
                    (right_field.innerHTML == stone) && (left_field.innerHTML == paper)
                    || (right_field.innerHTML == paper) && (left_field.innerHTML == scissors)
                    || (right_field.innerHTML == scissors) && (left_field.innerHTML == stone)
                ) {
                    Result.innerHTML = '<p class = "text">Вы выиграли!</p>'
                    player_score++;
                    Player_score.textContent = `Игрок: ${player_score}`;
                }
            }
        }, 1000);
    }
    else {
        if (player_score == 3)
            Result.innerHTML = '<p class = "text">Игра окончена! Вы выиграли игру!</p>';
        if (bot_score == 3)
            Result.innerHTML = '<p class = "text">Игра окончена! Бот выиграл игру!</p>';
        all_hand[0].style.display = 'none';
        all_hand[1].style.display = 'none';
        all_hand[2].style.display = 'none';
        all_hand[3].style.display = 'block';
    }
}

function reload() {
    player_score = 0;
    Player_score.textContent = `Игрок: ${player_score}`;
    bot_score = 0;
    Bot_score.textContent = `Бот: ${bot_score}`;
    Result.innerHTML = '<p class = "text">Выбери карточку, чтобы начать игру!</p>';
    all_hand[0].style.display = 'block';
    all_hand[1].style.display = 'block';
    all_hand[2].style.display = 'block';
    all_hand[3].style.display = 'none';
}