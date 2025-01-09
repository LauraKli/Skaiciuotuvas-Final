function generatePassword() {
    const length = parseInt(document.querySelector('#length').value, 10);
    const includeUppercase = document.querySelector('#uppercase').checked;
    const includeNumbers = document.querySelector('#numbers').checked;
    const includeSymbols = document.querySelector('#symbols').checked;

    if (isNaN(length) || length < 1) {
        alert('Įveskite tinkamą slaptažodžio ilgį (daugiau nei 0)');
        return;
    }
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercase;
    if (includeUppercase) {
        characters += uppercase;
    }
    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    document.querySelector('#password').value = password;
}
function copyPassword() {
    const passwordField = document.querySelector('#password');
    if (!passwordField.value) {
        alert('Pirmiausia sugeneruokite slaptažodį!');
        return;
    }
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert('Slaptažodis nukopijuotas!'))
        .catch(() => alert('Nepavyko nukopijuoti slaptažodžio.'));
}
