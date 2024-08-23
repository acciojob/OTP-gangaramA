const codes = document.querySelectorAll('.code');

codes[0].focus(); // Focus on the first input initially

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // Check if the pressed key is a numbe
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
                // Move focus to the previous input if backspace is pressed and there is a previous input
                if (codes[idx].value === '' && idx > 0) {
                    codes[idx - 1].focus();
                }
            }, 10);
        } else if (e.key === 'ArrowLeft' && idx > 0) {
            // Handle ArrowLeft to move focus to the previous input
            codes[idx - 1].focus();
        } else if (e.key === 'ArrowRight' && idx < codes.length - 1) {
            // Handle ArrowRight to move focus to the next input
            codes[idx + 1].focus();
        }
    });

    // Ensure that only a single digit is allowed in each input
    code.addEventListener('input', () => {
        if (code.value.length > 1) {
            code.value = code.value.slice(0, 1);
        }
    });
});
