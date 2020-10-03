var min = function() {
    var min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if(arguments[i] < min)
            min = arguments[i];
    }
    return min;
}

var max = function() {
    var max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if(arguments[i] > max)
            max = arguments[i];
    }
    return max;
}

var avg = function() {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    return sum / list.length;
}
