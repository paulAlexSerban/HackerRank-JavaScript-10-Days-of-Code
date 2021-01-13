const BTN = document.createElement("Button");

BTN.innerHTML = "0";
BTN.id = "btn";
document.body.appendChild(BTN);

BTN.onclick = function() {
    BTN.innerHTML++;
}