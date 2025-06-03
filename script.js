function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        display.value = parseFloat(result.toFixed(10));
    } catch (e) {
        display.value = 'Error';
    }
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}