function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearAll() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}