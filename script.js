let currentNumber = '';
let previousNumber = '';
let operation = null;

const appendNumber = (num) => {
    currentNumber += num;
    document.getElementById('display').value = currentNumber;
};


const setOperation = (op) => {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate(); // Si ya hay un cálculo pendiente, se realiza
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
};

const calculate = () => {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }

    currentNumber = result;
    operation = null;
    previousNumber = '';
    document.getElementById('display').value = result;
};


const clearDisplay = () => {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    document.getElementById('display').value = '';
};
