//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''; // Clear the current box before adding the new number
            setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
    });
});
