const codes = document.querySelectorAll('.code');

codes[0].focus(); // Initial focus on the first input

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''; // Clear the current input
            setTimeout(() => {
                // Move focus to the next input if it exists
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => {
                // If current input is empty, focus the previous input
                if (codes[idx].value === '' && idx > 0) {
                    codes[idx - 1].focus();
                } else {
                    codes[idx].value = ''; // Clear the current input
                }
            }, 10);
        } else if (e.key === 'ArrowLeft' && idx > 0) {
            // Move focus to the previous input on ArrowLeft
            codes[idx - 1].focus();
        } else if (e.key === 'ArrowRight' && idx < codes.length - 1) {
            // Move focus to the next input on ArrowRight
            codes[idx + 1].focus();
        }
    });

    // Ensure only a single digit is allowed per input
    code.addEventListener('input', () => {
        if (code.value.length > 1) {
            code.value = code.value.slice(0, 1);
        }
    });
});
