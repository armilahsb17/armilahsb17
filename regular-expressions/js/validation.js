const emailInput = document.getElementById('emailInput');
const emailIndicator = document.getElementById('emailIndicator');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordInput = document.getElementById('passwordInput');
const passwordIndicator = document.getElementById('passwordIndicator');
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const phoneInput = document.getElementById('phoneInput');
const phoneIndicator = document.getElementById('phoneIndicator');
const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const dateInput = document.getElementById('dateInput');
const dateIndicator = document.getElementById('dateIndicator');
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const urlInput = document.getElementById('urlInput');
const urlIndicator = document.getElementById('urlIndicator');
const urlRegex = /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;

function validateInput(input, indicator, regex) {
    input.addEventListener('input', function() {
        if (regex.test(input.value)) {
            indicator.textContent = 'Valid';
            indicator.classList.remove('invalid');
            indicator.classList.add('valid');
        } else {
            indicator.textContent = 'Tidak Valid';
            indicator.classList.remove('valid');
            indicator.classList.add('invalid');
        }
    });
}

validateInput(emailInput, emailIndicator, emailRegex);
validateInput(passwordInput, passwordIndicator, passwordRegex);
validateInput(phoneInput, phoneIndicator, phoneRegex);
validateInput(dateInput, dateIndicator, dateRegex);
validateInput(urlInput, urlIndicator, urlRegex);
