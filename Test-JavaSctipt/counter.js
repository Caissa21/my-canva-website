let count = 0;

const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    counterValue.textContent = count;
    
    if (count < 0) {
        counterValue.style.color = "red";
    } else if (count > 0) {
        counterValue.style.color = "green";
    } else {
        counterValue.style.color = "black";
    }
}

increaseBtn.addEventListener('click', function() {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', function() {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateDisplay();
});

updateDisplay();