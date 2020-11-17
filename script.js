function SetType() {
    var e = document.getElementById("type");
    var s = e.options[e.selectedIndex].text;
    if (s == "LRAM") {
        document.getElementById("calculatelram").style.display = "flex";
        document.getElementById("calculatemram").style.display = "none";
        document.getElementById("calculaterram").style.display = "none";
    }
    else if (s == "MRAM") {
        document.getElementById("calculatelram").style.display = "none";
        document.getElementById("calculatemram").style.display = "flex";
        document.getElementById("calculaterram").style.display = "none";
    }
    else if (s == "RRAM") {
        document.getElementById("calculatelram").style.display = "none";
        document.getElementById("calculatemram").style.display = "none";
        document.getElementById("calculaterram").style.display = "flex";
    }
}

function calculateLRAM() {
    LRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}

function calculateMRAM() {
    MRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}

function calculateRRAM() {
    RRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}

function LRAM(left, right, n, func) {
    deltaX = (right - left) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = left + i * deltaX;
        value = eval(func);
        sum += deltaX * value;
    }

    output(sum);
}

function MRAM(left, right, n, func) {
    deltaX = (right - left) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = parseFloat(left) + (i * deltaX) + (deltaX / 2);
        value = eval(func);
        sum += deltaX * value;
    }

    output(sum);
}

function RRAM(left, right, n, func) {
    deltaX = (right - left) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = parseFloat(left) + i * deltaX + deltaX;
        value = eval(func);
        sum += deltaX * value;
    }

    output(sum);
}


function output(string) {
    document.getElementById("output").innerHTML = "Output: " + string;
}