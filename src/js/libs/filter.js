// Page filter v.1
// Sergiy Kostiv 2024

// Отримуємо елемент списку фільтрів, до якого будуть прив'язуватися кліки.
const filterList = document.querySelector('.filter-list');

// Отримуємо всі елементи, які потрібно буде відфільтрувати (картки).
const filterCard = document.querySelectorAll('.filter-card');

// Отримуємо всі елементи списку, які діють як фільтри (кнопки або посилання).
const listItem = document.querySelectorAll('.filter-item');

// Основна функція для фільтрації елементів
function filter() {
    // Перевірка на існування елемента filterList. Якщо елемент не знайдено, функція не виконується.
    if (!filterList) return;

    // Додаємо обробник подій для кліку на список фільтрів
    filterList.addEventListener('click', event => {
        // Отримуємо ID цільового елемента, на який був клік
        const targetId = event.target.dataset.id;
        // Отримуємо сам цільовий елемент
        const target = event.target;

        // Якщо клікнувший елемент має клас 'filter-item', то:
        if (target.classList.contains('filter-item')) {
            // Видаляємо клас активного фільтра з усіх елементів
            listItem.forEach(item => item.classList.remove('filter-active'));
            // Додаємо клас активного фільтра до елемента, на який був клік
            target.classList.add('filter-active');
        }

        // Перевіряємо, чи ID цільового елемента відповідає одному з визначених фільтрів
        if (['all', 'open', 'founded', 'completed'].includes(targetId)) {
            // Викликаємо функцію getItems, передаючи їй клас для фільтрації
            getItems(targetId === 'all' ? 'filter-card' : targetId);
        }
    });
}

// Функція для відображення або приховування елементів залежно від класу
function getItems(className) {
    // Проходимося по всіх елементах-картках
    filterCard.forEach(item => {
        // Якщо картка містить потрібний клас, вона відображається, інакше приховується
        item.style.display = item.classList.contains(className) ? 'flex' : 'none';
    });
}

// Виклик основної функції фільтрації для додавання обробника подій на сторінці
filter();
