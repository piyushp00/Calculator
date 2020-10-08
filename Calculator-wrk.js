//Calculator Working

var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var op1 = 0;
var op2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var opr = this.getAttribute('data-opr');
        document.getElementById('btn-ac').onclick = function () {
            display.textContent = null;
        };

        document.getElementById('btn-percent').onclick = function () {
            var cent = parseFloat(display.textContent) / 100;
            display.textContent = cent;
        }

        if (value == opr) {

            operator = opr;
            op1 = parseFloat(display.textContent);

            // display.textContent = op1+" "+opr;
            display.textContent = "";


        } else if (value == 'sign') {
            op1 = parseFloat(display.textContent);
            op1 = -1 * op1;
            display.textContent = op1;

        } else if (value == '=') {

            op2 = parseFloat(display.textContent);

            var result = eval(op1 + " " + operator + " " + op2);
            display.textContent = result;
            if (result) {
                display.textContent = result;
                op1 = result;
                op2 = null;
                operator = null;
            }

        } else {
            display.innerText += value;
        }
    });
}


//Day and Night Mode Working

var toggled = false;

var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
var btnSec = document.getElementById("btn-sec");
var ctn = document.getElementById("ctn");
document.getElementById("toggle").onclick = function () {

    if (!toggled) {


        bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "30px";
        btnSec.style.backgroundColor = "white";
        bodyTag.style.color = "black";
        ctn.style.backgroundColor = "#e9e9e9"
        toggled = true;

    } else {


        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        btnSec.style.backgroundColor = "#252525";
        bodyTag.style.color = "white";
        ctn.style.backgroundColor = "black"
        toggled = false;

    }

}





