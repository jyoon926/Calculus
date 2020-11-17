//Set the type of the Riemann Sum when the selection changes
function SetType() {
    var e = document.getElementById("type");
    var s = e.options[e.selectedIndex].text;
    if (s == "LRAM") {
        document.getElementById("calculatelram").style.display = "flex";
        document.getElementById("calculatemram").style.display = "none";
        document.getElementById("calculaterram").style.display = "none";
        document.getElementById("calculatetrap").style.display = "none";
    }
    else if (s == "MRAM") {
        document.getElementById("calculatelram").style.display = "none";
        document.getElementById("calculatemram").style.display = "flex";
        document.getElementById("calculaterram").style.display = "none";
        document.getElementById("calculatetrap").style.display = "none";
    }
    else if (s == "RRAM") {
        document.getElementById("calculatelram").style.display = "none";
        document.getElementById("calculatemram").style.display = "none";
        document.getElementById("calculaterram").style.display = "flex";
        document.getElementById("calculatetrap").style.display = "none";
    }
    else if (s == "Trapazoidal") {
        document.getElementById("calculatelram").style.display = "none";
        document.getElementById("calculatemram").style.display = "none";
        document.getElementById("calculaterram").style.display = "none";
        document.getElementById("calculatetrap").style.display = "flex";
    }
}

//Run the functions with the inputs from the HTML fields
function calculateLRAM() {
    LRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}
function calculateMRAM() {
    MRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}
function calculateRRAM() {
    RRAM(this.left.value, this.right.value, this.n.value, this.function.value);
}
function calculateTrap() {
    Trap(this.left.value, this.right.value, this.n.value, this.function.value);
}

//Calculate the LRAM
function LRAM(left, right, n, func) {
    deltaX = (right - left) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = parseFloat(left) + i * deltaX;
        value = eval(func);
        sum += deltaX * value;
    }

    output(sum);
}

//Calculate the MRAM
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

//Calculate the RRAM
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

//Calculate the Trapazoidal Sum
function Trap(left, right, n, func) {
    deltaX = (right - left) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = parseFloat(left) + i * deltaX;
        value1 = eval(func);
        x += deltaX;
        value2 = eval(func);

        sum += ((value1 + value2) / 2) * deltaX;
    }
    output(sum);
}

//Display the answer
function output(string) {
    document.getElementById("output").innerHTML = "Answer: " + string;
}