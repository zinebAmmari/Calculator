let val = document.getElementById('input');

function append(input) {
    val.value += input;
}

function calculate() {
    try {
        val.value = eval(val.value);
    } catch (e) {
        val.value = 'Erreur';
    }
}

function clearInput() {
    val.value = '';
}