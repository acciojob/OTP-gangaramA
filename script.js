const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value.length === 1) {
            // If the input is valid, focus on the next input
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        } else if (value.length === 0 && index > 0) {
            // If the input is empty and not the first one, focus on the previous input
            codeInputs[index - 1].focus();
        }
    });
});