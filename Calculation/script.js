let num = '', output = '', deistv = '';
function number(cliked_id) {
    switch (cliked_id) {
        case ('1'):
        case ('2'):
        case ('3'):
        case ('4'):
        case ('5'):
        case ('6'):
        case ('7'):
        case ('8'):
        case ('9'):
        case ('0'):
            num += document.getElementById(cliked_id).textContent;
            output += document.getElementById(cliked_id).textContent;
            document.getElementById("out").innerHTML = output;
            deistv = 'number';
            break;
        case ('.'):
            if ((num.indexOf('.')) == -1 && num.length != 0) {
                num += document.getElementById(cliked_id).textContent;
                output += document.getElementById(cliked_id).textContent;
                document.getElementById("out").innerHTML = output;
                deistv = 'number';
                break;
            }
            else
                break;
        case ('+'):
        case ('-'):
        case ('*'):
        case ('/'):
            if (deistv != 'znak') {
                num = '';
                output += document.getElementById(cliked_id).textContent;
                document.getElementById("out").innerHTML = output;
                deistv = 'znak';
                break;
            }
            else
                break;
        case ('='):
            document.getElementById("out").innerHTML = eval(output);
            output = eval(output);
            num = String(eval(output));
            break;
        case ('del'):
            output = '';
            znak = '';
            num = '';
            document.getElementById("out").innerHTML = output;
    }
}