var products = [
  { productId: 1, productName: 'Товар 1', categoryId: 1 },
  { productId: 2, productName: 'Товар 2', categoryId: 2 },
  { productId: 3, productName: 'Товар 3', categoryId: 3 },
  { productId: 4, productName: 'Товар 4', categoryId: 4 },
  { productId: 5, productName: 'Товар 5', categoryId: 5 },
  { productId: 6, productName: 'Товар 6', categoryId: 1 },
  { productId: 7, productName: 'Товар 7', categoryId: 2 },
  { productId: 8, productName: 'Товар 8', categoryId: 3 },
  { productId: 9, productName: 'Товар 9', categoryId: 4 },
  { productId: 10, productName: 'Товар 10', categoryId: 5 },
  { productId: 11, productName: 'Товар 11', categoryId: 1 },
  { productId: 12, productName: 'Товар 12', categoryId: 2 },
  { productId: 13, productName: 'Товар 13', categoryId: 3 },
  { productId: 14, productName: 'Товар 14', categoryId: 4 },
  { productId: 15, productName: 'Товар 15', categoryId: 5 },
  { productId: 16, productName: 'Товар 16', categoryId: 1 },
  { productId: 17, productName: 'Товар 17', categoryId: 2 },
  { productId: 18, productName: 'Товар 18', categoryId: 3 },
  { productId: 19, productName: 'Товар 19', categoryId: 4 },
  { productId: 20, productName: 'Товар 20', categoryId: 5 },
  { productId: 21, productName: 'Товар 21', categoryId: 1 },
  { productId: 22, productName: 'Товар 22', categoryId: 2 },
  { productId: 23, productName: 'Товар 23', categoryId: 3 },
  { productId: 24, productName: 'Товар 24', categoryId: 4 },
  { productId: 25, productName: 'Товар 25', categoryId: 5 }
];
var categories = [
  { categoryId: 1, categoryName: 'Футболки' },
  { categoryId: 2, categoryName: 'Майки' },
  { categoryId: 3, categoryName: 'Носки' },
  { categoryId: 4, categoryName: 'Джинсы' },
  { categoryId: 5, categoryName: 'Брюки' },
];

window.addEventListener('DOMContentLoaded', function () {
  const buttonsContainer = document.querySelector('[data-buttons-container]');
  const buttonTemplate = document.querySelector('[data-button-template]');

  const contentContainer = document.querySelector('[data-content-container]');
  const contentTemplate = document.querySelector('[data-content-template]');

  let startTab = 1;
  let filteredProducts = [];

  init();

  // Выбор категории
  buttonsContainer.addEventListener('click', (e) => {
    const currentBtn = e.target.closest('.js-category-choise');
    const allButtons = buttonsContainer.querySelectorAll('.js-category-choise');

    if (allButtons) {
      allButtons.forEach((i) => {
        if (i.closest('.tabs__button--active')) {
          i.classList.remove('tabs__button--active');
        };
      });
    };

    if (currentBtn) {
      currentBtn.classList.add('tabs__button--active');
      contentContainer.replaceChildren();
      filteredProducts = products.filter((item) => Number(currentBtn.dataset.categoryId) === item.categoryId);
      createCard(filteredProducts);
    };
  });

  function init() {
    createTabs(categories);    

    filteredProducts = products.filter((item) => startTab === item.categoryId);
    createCard(filteredProducts);

    const allButtons = buttonsContainer.querySelectorAll('.js-category-choise');
    allButtons[0].classList.add('tabs__button--active');
  };

  // Создание Табов
  function createTabs(data) {
    data.forEach(item => {
      const cloneButton = buttonTemplate.content.cloneNode(true);
      const categoriesId = cloneButton.querySelector('[data-category-id]');
      categoriesId.textContent = item.categoryName;
      categoriesId.dataset.categoryId = item.categoryId;
      buttonsContainer.appendChild(cloneButton);
    });
  };

  // Создание карточки товара    

  function createCard(data) {
    data.forEach((item) => {
      const cloneContent = contentTemplate.content.cloneNode(true);
      const title = cloneContent.querySelector('[data-title]');
      const productId = cloneContent.querySelector('[data-id]');
      const categoriesId = cloneContent.querySelector('[data-category-id]');
      title.textContent = item.productName;
      productId.dataset.id = item.productId;
      categoriesId.dataset.categoryId = item.categoryId;
      contentContainer.appendChild(cloneContent);
    });
  };
});