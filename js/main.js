"use strict";
// -----------Обувь-----------
const shoes = {
  images: [
    "shoes-1.jpg",
    "shoes-2.jpg",
    "shoes-3.jpg",
    "shoes-4.jpg",
    "shoes-5.jpg",
    "shoes-6.jpg",
    "shoes-7.jpg",
    "shoes-8.jpg",
    "shoes-9.jpg",
    "shoes-10.jpg",
  ],
  names: [
    "The Adidas X Messi 2022 World Cup Speedportal",
    "Nike Blazer Low",
    "Сандалии женские Rieker",
    "Лоферы женские INSTREET",
    "Adidas Men's Messi US11.5 Black",
    "Hoka One One Кроссовки W RINCON 3",
    "El'Rosso Туфли",
    "Smile of Mister Тапочки",
    "Alessio Nesca Полусапоги",
    "Кеды REEBOK COURT ADVANCE BOL",
  ],
  dates: [
    "01.01.2022",
    "15.12.2021",
    "13.08.2022",
    "23.02.2020",
    "16.01.2022",
    "08.09.2019",
    "10.09.2017",
    "22.11.2010",
    "06.10.2019",
    "30.03.2015",
  ],
};

// -----------Телефоны-----------
const phones = {
  images: [
    "phone-1.jpg",
    "phone-2.jpg",
    "phone-3.jpg",
    "phone-4.jpg",
    "phone-5.jpg",
    "phone-6.jpg",
    "phone-7.jpg",
    "phone-8.jpg",
    "phone-9.jpg",
    "phone-10.jpg",
    "phone-11.jpg",
    "phone-12.jpg",
    "phone-13.jpg",
    "phone-14.jpg",
    "phone-15.jpg",
  ],
  names: [
    "Samsung Galaxy A72 6/128GB синий",
    "Apple iPhone 11 128GB с новой комплектацией черный",
    "Xiaomi POCO F4 6/128 ГБ Global, Dual nano SIM, лунное серебро",
    "Nokia 3310 Dual SIM",
    "Samsung Galaxy Z Flip4 5G 256GB Gold",
    "Apple iPhone 12 mini 256GB синий",
    "Apple iPhone 14 Pro Max",
    "Samsung Galaxy S23 Ultra 12/256 ГБ, Dual: nano SIM + eSIM, черный фантом",
    "Xiaomi 12T Pro 8/128 ГБ RU, Dual: nano SIM + eSIM, синий",
    "Google Pixel 7 Pro",
    "HONOR Magic4 Lite 5G 6/128 ГБ Global, Dual nano SIM, серебристый титан",
    "Samsung Galaxy Z Fold4 12/256 ГБ, Dual: nano SIM + eSIM, серо-зеленый",
    "Xiaomi Mi 11 Ultra 12/256 ГБ CN, Dual nano SIM, черная керамика",
    "Realme 10 Pro 5G 8/256Gb голубой",
    "Samsung Galaxy M32 6/128GB черный",
  ],
  dates: [
    "02.12.1999",
    "01.08.2000",
    "13.08.1900",
    "23.02.2020",
    "16.01.2022",
    "08.09.2019",
    "10.09.2017",
    "22.11.2010",
    "06.10.2017",
    "30.03.2015",
    "02.12.1999",
    "01.08.2000",
    "13.08.2000",
    "23.02.2020",
    "16.01.2022",
  ],
};

// -----------Автомобили-----------
const cars = {
    images: [
      "car-1.png",
      "car-2.jpg",
      "car-3.png",
      "car-4.png",
      "car-5.png",
      "car-6.png",
      "car-7.png",
      "car-8.png",
      "car-9.png",
      "car-10.png",
      "car-11.png",
      "car-12.png",
    ],
    names: [
      "Volkswagen Passat 2021",
      "BMW M4 Competition Coupé",
      "Mercedes-Maybach S-Класс",
      "Porsche Taycan",
      "Hyundai Sonata",
      "Volkswagen Polo 2020",
      "Lamborghini aventador",
      "Mercedes-Benz Mercedes-AMG GT",
      "CHEVROLET CAMARO 2022",
      "Dodge Challenger SRT HellCAT",
      "BMW i8",
      "Kia K5 2022",
    ],
    dates: [
      "02.12.1999",
      "01.08.2000",
      "13.08.2007",
      "23.02.2020",
      "16.01.2022",
      "08.09.2019",
      "10.09.2017",
      "22.11.2010",
      "06.10.2020",
      "30.03.2015",
      "16.01.2022",
      "08.09.2019",
    ],
};

// -----------Канцелярские товары-----------
const stationery = {
    images: [
      "stationery-1.png",
      "stationery-2.png",
      "stationery-3.jpg",
      "stationery-4.png",
      "stationery-5.png",
      "stationery-6.png",
      "stationery-7.png",
      "stationery-8.png",
      "stationery-9.png",
      "stationery-10.png",
      "stationery-11.png",
      "stationery-12.png",
      "stationery-13.png",
    ],
    names: [
      "Цветные карандаши",
      "Ручки",
      "Тетрадь 96л",
      "Стирательная резинка",
      "Степлер",
      "Пенал",
      "Ножницы",
      "Линейка",
      "Точилка",
      "Корректор",
      "Акварельные краски",
      "Блокнот",
      "Кисточки",
    ],
    dates: [
      "02.12.1999",
      "01.08.2000",
      "13.08.2020",
      "23.02.2020",
      "16.01.2022",
      "08.09.2019",
      "10.09.2017",
      "22.11.2010",
      "06.10.2015",
      "30.03.2015",
      "16.01.2022",
      "08.09.2019",
      "10.09.2017",
    ],
};

const categoriesArray = [shoes, phones, cars, stationery];

// -----------Преобразование даты-----------
function getDayInfo(dateAdd) {
  const formatDate = dateAdd.split(".").map(function(val){
    if(val[0] === "0"){
      return val.replace("0", "")
    }
    return val;
  }).reverse();

  // Преобразование для недели и месяца в словесный вид
  let weekDay = new Date(formatDate).toLocaleString("default", { weekday: "long"});
  weekDay = weekDay[0].toUpperCase() + weekDay.slice(1);

  let month = new Date(formatDate).toLocaleString("default", { month: "long"});

  if(formatDate[1] === "3" || formatDate[1] === "8"){
    month = month[0].toUpperCase() + month.slice(1, month.length) + "a";
  } else {
    month = month[0].toUpperCase() + month.slice(1, month.length-1) + "я";
  }

  // Номер недели в зависимости от дня недели начала месяца
  const monthStartDay = new Date(formatDate[0], formatDate[1]-1, 1).getDay();
  let week;
  let lastDayFirstWeek;
  if(monthStartDay == 0){
    lastDayFirstWeek = 7-monthStartDay+1;
    week = Math.ceil(((formatDate[2]-lastDayFirstWeek) / 7)) + 2;
  } else if(monthStartDay == 1) {
    week = Math.ceil(formatDate[2] / 7);
  } else {
    lastDayFirstWeek = 7-monthStartDay+1;
    if(formatDate[2] <= lastDayFirstWeek) {
      week = 1;
    } else {
      week = Math.ceil(((formatDate[2]-lastDayFirstWeek) / 7)) + 1;
    }
  }

  return `${weekDay}, ${week} неделя ${month} ${formatDate[0]} года`;
}

// -----------Добавление карточек-----------
function addProduct(categories) {
    const productContainer = document.querySelectorAll(".products");
    productContainer.forEach(function(prodCon, i){
        let productEl = document.querySelector(`.products[data-product="${prodCon.dataset.product}"]`);
        categories[i].names.forEach(function(name, j){
            productEl.insertAdjacentHTML("beforeend", `
            <div class="product-card">
              <div class="product-card__img-container">
                <img
                  src="img/${productEl.dataset.product}/${categories[i].images[j]}"
                  alt=""
                  class="product-card__img ${productEl.dataset.product}-img"
                />
              </div>
              <h3 class="product-card__text">
              ${name}
              </h3>
              <p class="product-card__date">
              ${getDayInfo(categories[i].dates[j])}
              </p>
              <button class="product-card__btn btn">Купить</button>
            </div>
            `)
        });
    })
}
addProduct(categoriesArray);


// -----------Скролл меню-----------
const menu = document.querySelectorAll(".menu");
const links = document.querySelectorAll(".menu__link");
const header = document.querySelector(".header");

menu.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("menu__link")) {
      const id = e.target.getAttribute("href");
      window.scrollTo({
        left:
          document.querySelector(id).getBoundingClientRect().left +
          window.pageXOffset,
        top:
          document.querySelector(id).getBoundingClientRect().top +
          window.pageYOffset -
          header.offsetHeight,
        behavior: "smooth",
      });

      links.forEach((link) => link.classList.remove("menu__link--active"));
      // активные ссылки в header и footer
      const activeLink = document.querySelectorAll(
        `.menu__link[data-link="${e.target.dataset.link}"]`
      );

      activeLink.forEach((link) => link.classList.add("menu__link--active"));

      document.body.classList.remove("lock")
      hamburger.classList.remove("active");
      menu[0].classList.remove("menu__active");
    }
  });
});


// -----------Кнопка возврата-----------
const btnReturn = document.querySelector(".btn-top");

function getBtnReturn() {
  if (this.scrollY > 0) {
    btnReturn.classList.add("sticky");
    window.removeEventListener("scroll", getBtnReturn);
  }
}
window.addEventListener("scroll", getBtnReturn);

btnReturn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});


// -----------Всплывающёё меню-----------
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const products = document.querySelectorAll(".products");
const btnClose = document.querySelector(".form__btn-close");

const openForm = function () {
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeForm = function () {
  form.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector(".form__image-container").firstElementChild.remove();
};

// -----------Добавление в форму картинки и названия-----------
function createdContentForm(product) {
  const nameForm = product.previousElementSibling.previousElementSibling;
  document.querySelector(".form__text").textContent = nameForm.innerHTML;

  const imgCard = nameForm.previousElementSibling.firstElementChild;
  const imgForm = imgCard.cloneNode();

  document.querySelector(".form__image-container").insertAdjacentElement("afterbegin", imgForm);
}

products.forEach(function (product) {
  product.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("product-card__btn")) {
      createdContentForm(e.target);

      openForm();
    }
  });
});

// -----------Кнопка закрыть в форме-----------

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  closeForm();
});

overlay.addEventListener("click", closeForm);
document.addEventListener("keydown", function (e) {
  if ((e.key === "Escape"  || e.key === "Enter") && !form.classList.contains("hidden")) {
    closeForm();
  }
});

// -----------Кнопка купить в форме-----------
const formBtnBuy = document.querySelector(".form__btn-buy");
formBtnBuy.addEventListener("click", function (e) {
  e.preventDefault();
  const value = document.querySelector("#quantity").value;
  alert(`Вы приобрели: ${document.querySelector(".form__text").innerHTML} в количестве ${value} шт`);
  closeForm();
});

// -----------Кнопка переключения темы-----------
const btnTheme = document.querySelector(".btn-theme");
const iconMoom = document.querySelector(".icon-moon-inv");
const iconSun = document.querySelector(".icon-sun");
const categories = document.querySelectorAll(".section-category");

const darkTheme = function () {
  document.body.classList.toggle("dark-theme");
  header.classList.toggle("dark-theme");
  categories.forEach((category) => category.classList.toggle("dark-theme"));
  form.classList.toggle("dark-theme");
};

iconSun.classList.remove("icon-sun");

btnTheme.addEventListener("click", function (e) {
  e.preventDefault();
  btnTheme.classList.toggle("dark");
  if (btnTheme.classList.contains("dark")) {
    iconMoom.classList.remove("icon-moon-inv");
    iconSun.classList.toggle("icon-sun");
    darkTheme();
  } else {
    iconMoom.classList.toggle("icon-moon-inv");
    iconSun.classList.remove("icon-sun");
    darkTheme();
  }
});

// -----------Гамбургер-----------
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(e){
  e.preventDefault()
  document.body.classList.toggle("lock")
  hamburger.classList.toggle("active");
  menu[0].classList.toggle("menu__active");
});