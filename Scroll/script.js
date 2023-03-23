const Inscription = document.querySelector("#inscription");

let maxScrollSpeed = 0, scrollSpeed = 0,timerId1 = null,timerId2 = null,timerId3 = null, time = 1, pixels = 0,check = 0;

document.addEventListener('wheel', MouseScroll);

//import data
if (localStorage.getItem('maxScrollSpeed') != null) {
    maxScrollSpeed = +localStorage.getItem('maxScrollSpeed');
}

//export data
window.onbeforeunload = function () {
    localStorage.setItem('maxScrollSpeed', maxScrollSpeed);
};

//default inscription
Inscription.innerHTML = `<p>Скроль так быстро, на сколько сможешь.</p><p>Твой лучший результат ${maxScrollSpeed} пикселей в секунду.</p>`;

function MouseScroll(e) {
    if(check == 0){
        check = 1;
        timerId3 = setInterval(()=> {
            time++;
        },1000)
    }
    pixels += Math.abs(e.deltaY);
    scrollSpeed = (pixels/time).toFixed(3);
    Inscription.innerHTML = `${scrollSpeed} px/sec`;
    if(timerId1 != null) {
        clearTimeout(timerId1);
        clearTimeout(timerId2);         
    }
    timerId1 = setTimeout(() => {
        if(scrollSpeed>maxScrollSpeed){
            maxScrollSpeed = scrollSpeed;
        }
        timerId2 = setInterval(()=> {
            if((scrollSpeed - 100)>0){
                scrollSpeed-=100;
                Inscription.innerHTML = `${scrollSpeed.toFixed(3)} px/sec`;
            }
            else{
                clearInterval(timerId3);
                time = 1;
                check = 0;
                scrollSpeed = 0;
                pixels = 0;
                setTimeout(() => { clearInterval(timerId2); }, 1);
                Inscription.innerHTML = `<p>Скроль так быстро, на сколько сможешь.</p><p>Твой лучший результат ${maxScrollSpeed} пикселей в секунду.</p>`;
            }
        }, 25);
    }, 1000);
}