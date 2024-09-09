// Підключення функціоналу "Чертоги Фрілансера"
import { list } from "postcss";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Код роботи фільтрів

const filterList = document.querySelector('.filter-list');
const cardItem = document.querySelectorAll('.init-card__item');
const listItem = document.querySelectorAll('.filter-item')

function filter() {
    filterList.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;

        if (target.classList.contains('filter-item')) {
            listItem.forEach(item => item.classList.remove('filter-active'));
            target.classList.add('filter-active');
        }

        switch (targetId) {
            case 'all':
                getItems('init-card__item');
                break
            case 'open':
                getItems(targetId);
                break
            case 'founded':
                getItems(targetId);
                break
            case 'completed':
                getItems(targetId);
                break
        }
    });
};

function getItems(className) {
    cardItem.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

filter();
