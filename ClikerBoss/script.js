const Wawe = document.querySelector("#wave");
const Money = document.querySelectorAll("#money");
const Health_bar = document.querySelectorAll(".hp");
const Store = document.querySelector("#store");
const Bolls = document.querySelectorAll(".col-vo");
const Boss = document.querySelector("#boss>img");
const Bosses = [`img/ditto.png`, `img/bullbasaur.png`, `img/eevee.png`, `img/jigglypuff.png`, `img/meowth.png`
    , `img/pikachu.png`, `img/snorlax.png`, `img/squirtle.png`, `img/venonat.png`];

let moneybag = `<img src="img/money-bag.png" alt="" style = "width:40px;height:40px"></img>`,
    wave = 1,
    money = 0,
    damage = 1,
    hp = 50,
    random_boss = 0,
    pokeboll = 0,
    greatboll = 0,
    ultraboll = 0,
    masterboll = 0,
    hp_full = hp;

if (localStorage.getItem('wave') != null) {
    wave = +localStorage.getItem('wave');
}
if (localStorage.getItem('money') != null) {
    money = +localStorage.getItem('money');
}
if (localStorage.getItem('damage') != null) {
    damage = +localStorage.getItem('damage');
}
if (localStorage.getItem('hp') != null) {
    hp = +localStorage.getItem('hp');
}
if (localStorage.getItem('pokeboll') != null) {
    pokeboll = +localStorage.getItem('pokeboll');
}
if (localStorage.getItem('greatboll') != null) {
    greatboll = +localStorage.getItem('greatboll');
}
if (localStorage.getItem('ultraboll') != null) {
    ultraboll = +localStorage.getItem('ultraboll');
}
if (localStorage.getItem('masterboll') != null) {
    masterboll = +localStorage.getItem('masterboll');
}
if (localStorage.getItem('hp_full') != null) {
    hp_full = +localStorage.getItem('hp_full');
}
if (localStorage.getItem('random_boss') != null) {
    random_boss = +localStorage.getItem('random_boss');
    Boss.src = Bosses[random_boss];
}

window.onbeforeunload = function () {
    localStorage.setItem('wave', wave);
    localStorage.setItem('money', money);
    localStorage.setItem('damage', damage);
    localStorage.setItem('hp', hp);
    localStorage.setItem('pokeboll', pokeboll);
    localStorage.setItem('greatboll', greatboll);
    localStorage.setItem('ultraboll', ultraboll);
    localStorage.setItem('masterboll', masterboll);
    localStorage.setItem('hp_full', hp_full);
    localStorage.setItem('random_boss', random_boss);
};

Wawe.innerHTML = `Волна: ${wave}`;
Money.item(0).innerHTML = `${money} ${moneybag}`;
Money.item(1).innerHTML = `${moneybag} ${money}`;
Health_bar.item(1).innerHTML = `${hp}`;
Health_bar.item(0).style.width = `${hp / hp_full * 100}%`;
if((hp / hp_full * 100)<50){
    Health_bar.item(0).style.backgroundColor = `Yellow`;
}
if((hp / hp_full * 100)<10){
    Health_bar.item(0).style.backgroundColor = `Red`;
}
Bolls.item(0).innerHTML = `У вас: ${pokeboll}`;
Bolls.item(1).innerHTML = `У вас: ${greatboll}`;
Bolls.item(2).innerHTML = `У вас: ${ultraboll}`;
Bolls.item(3).innerHTML = `У вас: ${masterboll}`;

function open_store() {
    Store.className = "enabled";
}
function close_store() {
    Store.className = "";
}
function battle() {
    if (hp > 0) {
        hp -= damage;
        if ((hp / hp_full * 100) >= 0) {
            Health_bar.item(0).style.width = `${hp / hp_full * 100}%`;
            if((hp / hp_full * 100)<50){
                Health_bar.item(0).style.backgroundColor = `Yellow`;
            }
            if((hp / hp_full * 100)<10){
                Health_bar.item(0).style.backgroundColor = `Red`;
            }
        }
        else {
            Health_bar.item(0).style.width = `0%`;
            hp = 0;
        }
        Health_bar.item(1).innerHTML = `${hp}`;
    }
    if (hp == 0) {
        money += 10 * wave;
        wave++;
        Wawe.innerHTML = `Волна: ${wave}`;
        hp_full += 10 * damage;
        hp = hp_full;
        Health_bar.item(1).innerHTML = `${hp}`;
        Health_bar.item(0).style.width = `100%`;
        Money.item(0).innerHTML = `${money} ${moneybag}`;
        Money.item(1).innerHTML = `${moneybag} ${money}`;
        Health_bar.item(0).style.backgroundColor = `greenyellow`;
        do {
            random_boss = Math.floor(Math.random() * (Bosses.length - 1));
        } while (Boss.src == Bosses[random_boss]);
        if (Boss.src != Bosses[random_boss]) {
            Boss.src = Bosses[random_boss];
        }
    }
}
function buy_item(id_btn) {
    switch (id_btn) {
        case '1':
            if (money >= 10) {
                money -= 10;
                pokeboll++;
                damage += 10 * pokeboll;
                Money.item(0).innerHTML = `${money} ${moneybag}`;
                Money.item(1).innerHTML = `${moneybag} ${money}`;
                Bolls.item(0).innerHTML = `У вас: ${pokeboll}`;
            }
            break;
        case '2':
            if (money >= 100) {
                money -= 100;
                greatboll++;
                damage += 100 * greatboll;
                Money.item(0).innerHTML = `${money} ${moneybag}`;
                Money.item(1).innerHTML = `${moneybag} ${money}`;
                Bolls.item(1).innerHTML = `У вас: ${greatboll}`;
            }
            break;
        case '3':
            if (money >= 1000) {
                money -= 1000;
                ultraboll++;
                damage += 1000 * ultraboll;
                Money.item(0).innerHTML = `${money} ${moneybag}`;
                Money.item(1).innerHTML = `${moneybag} ${money}`;
                Bolls.item(2).innerHTML = `У вас: ${ultraboll}`;
            }
            break;
        case '4':
            if (money >= 10000) {
                money -= 10000;
                masterboll++;
                damage += 10000 * masterboll;
                Money.item(0).innerHTML = `${money} ${moneybag}`;
                Money.item(1).innerHTML = `${moneybag} ${money}`;
                Bolls.item(3).innerHTML = `У вас: ${masterboll}`;
            }
            break;
    }
}