// const name = ["Жареный рис с яйцом по‑китайски", "Маффины с голубикой и мускатным орехом", "Классический греческий салат "]
// const markup = name.map(el => `<li><a href ="">${el}</a></li>`).join('');



import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';
import '../styles.css';


// console.log(itemsTemplate);

// console.log(menu);

const markup = itemsTemplate(menu);
// console.log(markup);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);