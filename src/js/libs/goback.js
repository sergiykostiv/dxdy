// Go back function v.1
// Sergiy Kostiv 2024

// Функція для повернення на попередню сторінку
function goBack() {
    window.history.back();
}

// Делегування події на батьківський елемент (наприклад, body)
document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('back-link')) {
        goBack();
        console.log('Work');
    }
});
