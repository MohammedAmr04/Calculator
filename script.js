function Click(event) {
    const display = document.querySelector('.display input[name="display"]');
    display.value += event.target.value;
}
function calculate() {
    const display = document.querySelector('.display input[name="display"]');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}