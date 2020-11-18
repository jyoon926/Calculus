//Set the type of the Riemann Sum when the selection changes
function SetType() {
    var e = document.getElementById("type");
    var s = e.options[e.selectedIndex].text;
    if (s == "LRAM") {
        document.getElementById("calculate").value = "Calculate LRAM";
    }
    else if (s == "MRAM") {
        document.getElementById("calculate").value = "Calculate MRAM";
    }
    else if (s == "RRAM") {
        document.getElementById("calculate").value = "Calculate RRAM";
    }
    else if (s == "Trapezoidal") {
        document.getElementById("calculate").value = "Calculate Trapazoidal";
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").classList.remove("display");
}

//Run the functions with the inputs from the HTML fields
function calculateRAM() {
    if (this.a.value != "" && this.b.value != "" && this.n.value != "" && this.function.value != "") {
        var s = document.getElementById("type").options[document.getElementById("type").selectedIndex].text;
        if (s == "LRAM") {
            LRAM(parseFloat(this.a.value), parseFloat(this.b.value), parseFloat(this.n.value), this.function.value);
        }
        else if (s == "MRAM") {
            MRAM(parseFloat(this.a.value), parseFloat(this.b.value), parseFloat(this.n.value), this.function.value);
        }
        else if (s == "RRAM") {
            RRAM(parseFloat(this.a.value), parseFloat(this.b.value), parseFloat(this.n.value), this.function.value);
        }
        else if (s == "Trapazoidal") {
            Trap(parseFloat(this.a.value), parseFloat(this.b.value), parseFloat(this.n.value), this.function.value);
        }
    }
    else {
        error();
    }
}

//Display the answer
function display(string) {
    document.getElementById("output").innerHTML = string;
    document.getElementById("output").classList.add("display");
}

//Add commas to final sum if it is >= 1000
function addCommas(n) {
    if (n >= 1000)
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else
        return n;
}

//Display an error if not all inputs are filled
function error() {
    document.getElementById("output").classList.add("display");
    document.getElementById("output").innerHTML = "Error! Please check your inputs.";
}