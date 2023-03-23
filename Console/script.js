const Input = document.querySelector("input");
const Export = document.querySelector(".body");

let word = "", b = 0, message = "", start_num = "", stop_num = "", start_num_t = "", stop_num_t = "";

function handle(e) {
    if (e.keyCode === 13) {
        for (let i = 0; i < Input.value.length; i++) {
            if (Input.value[i] != " ") {
                word += Input.value[i];
                console.log(word);
            }
            else {
                b = i
                break;
            }
        }
        switch (word) {
            case "Вывести":
            case "вывести":
                for (let i = b; i < Input.value.length; i++) {
                    message += Input.value[i];
                }
                Export.innerHTML += `<p>${message}</p>`;
                break;
            case "Мем1":
            case "мем1":
                Export.innerHTML += `<p><img src="img/Снимок.PNG" alt=""></p>`;
                break;
            case "Мем2":
            case "мем2":
                Export.innerHTML += `<p><img src="img/среда.PNG" alt=""></p>`;
                break;
            case "Посчитать":
            case "посчитать":
                for (let i = b; i < Input.value.length; i++) {
                    if (Input.value[i] == "о" || Input.value[i] == "т" || Input.value[i] == "д") {
                        message += Input.value[i];
                    }
                    if (message == "от") {
                        start_num += Input.value[i];
                    }
                    if (message == "отдо") {
                        stop_num += Input.value[i];
                    }
                }
                for (let i = 2; i < start_num.length; i++) {
                    start_num_t += start_num[i];
                }
                for (let i = 2; i < stop_num.length; i++) {
                    stop_num_t += stop_num[i];
                }
                if(Number(start_num_t) > Number(stop_num_t)){
                    while(Number(start_num_t) >= Number(stop_num_t)){
                        Export.innerHTML += `<p>${start_num_t}</p>`;
                        start_num_t--;
                    }
                    Export.innerHTML += `<p>Расчет окончен</p>`;
                    start_num_t = stop_num_t;
                }
                if(Number(start_num_t) < Number(stop_num_t)){
                    for (start_num_t; start_num_t <= stop_num_t; start_num_t++) {
                        Export.innerHTML += `<p>${start_num_t}</p>`;
                    }
                    Export.innerHTML += `<p>Расчет окончен</p>`;
                }
                console.log(message);
                if(message != "отдо"){
                    Export.innerHTML += `<p>Неправильно написана команда!</p>`;
                }
                break;
            case "Помощь":
            case "помощь":
                Export.innerHTML += `
                <p>Список доступных комманд:</p>
                <p>Помощь</p>
                <p>Посчитать  от x до y</p>
                <p>Вывести</p>
                <p>Мем1</p>
                <p>Мем2</p>
                <p>Очистить</p>
                `;
                break;
            case "Очистить":
            case "очистить":
                Export.innerHTML = ``;
                break;
            default:
                if (Input.value.length > 0) {
                    Export.innerHTML += `<p>Данной команды не существует!</p>`;
                }
                else {
                    Export.innerHTML += `<p>Вы ничего не ввели!</p>`;
                }
        }
        word = "";
        message = "";
        start_num = "";
        stop_num = "";
        start_num_t = "";
        stop_num_t = "";
    }
}