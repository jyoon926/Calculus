//Calculate the LRAM
function LRAM(leftBound, rightBound, n, func) {
    deltaX = (rightBound - leftBound) / n;
    sum = 0;

    for (index = 0; index < n; index++) {
        x = index * deltaX + leftBound;
        y = eval(func);
        sum += deltaX * y;
    }

    display(sum);
}

//Calculate the MRAM
function MRAM(leftBound, rightBound, n, func) {
    deltaX = (rightBound - leftBound) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = leftBound + (i * deltaX) + (deltaX / 2);
        y = eval(func);
        sum += deltaX * y;
    }
    
    display(sum);
}

//Calculate the RRAM
function RRAM(leftBound, rightBound, n, func) {
    deltaX = (rightBound - leftBound) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = leftBound + i * deltaX + deltaX;
        y = eval(func);
        sum += deltaX * y;
    }

    display(sum);
}

//Calculate the Trapazoidal Sum
function Trap(leftBound, rightBound, n, func) {
    deltaX = (rightBound - leftBound) / n;
    sum = 0;

    for (i = 0; i < n; i++) {
        x = leftBound + i * deltaX;
        y1 = eval(func);
        x += deltaX;
        y2 = eval(func);

        sum += ((y1 + y2) / 2) * deltaX;
    }

    display(sum);
}