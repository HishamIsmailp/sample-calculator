var lastValue = "";
var clickedOperator;
function numberClick(number) {
    var screen = document.getElementById("screen");
    var currentValue = screen.value;
    var newValue = currentValue + number;
    document.getElementById("screen").value = newValue;
}
function operation(operator) {
    lastValue = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    clickedOperator = operator;
}
function calculate() {
    var result;
    var latestValue = document.getElementById("screen").value;
    if (clickedOperator == "+") {
        result = Number(lastValue) + Number(latestValue);
        document.getElementById("screen").value = result;
    } else if (clickedOperator == "-") {
        result = Number(lastValue) - Number(latestValue);
        document.getElementById("screen").value = result;
    } else if (clickedOperator == "*") {
        result = Number(lastValue) * Number(latestValue);
        document.getElementById("screen").value = result;
    } else {
        result = Number(lastValue) / Number(latestValue);
        document.getElementById("screen").value = result;
    }
}
function clears() {
    document.getElementById("screen").value = "";
}
