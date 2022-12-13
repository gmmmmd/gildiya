Тестовое задание для html-верстальщика 
Необходимо задействовать:
HTML, CSS, JavaScript
Задача:
Вывести товары из массива JSON по табам. Сами товары и названия вкладок выводить не статично, а циклом. То есть табы и их содержимое не должны присутствовать в разметке, а должны добавляться JS’ом. Разбиваем товары на 5 табов: в 1 табе товары из 1 категории, во 2 табе товары из 2 категории и т.д. По возможности делать без использования jQuery, но если без него никак - делаем с ним. JS пишем по стайл-гайду CodeStyle Airbnb, HTML/CSS по Google HTML/CSS Style Guide.
Верстаем строго по макету, вместо выделенных квадратов добавляем фото товара:
http://rrstatic.retailrocket.net/test_task/tovar.jpg, под фото товара вставляем название productName из JSON. Размеры виджета можно увеличить по необходимости. Рамки, цвета, закругления соблюдаем в соответствии с макетом.
Вёрстку делаем адаптивной.
Пример данных в JSON:
var products = [
    {productId:1, productName: 'Товар 1', categoryId:1},
    {productId:2, productName: 'Товар 2', categoryId:2},
    {productId:3, productName: 'Товар 3', categoryId:3},
    {productId:4, productName: 'Товар 4', categoryId:4},
    {productId:5, productName: 'Товар 5', categoryId:5},
    {productId:6, productName: 'Товар 6', categoryId:1},
    {productId:7, productName: 'Товар 7', categoryId:2},
    {productId:8, productName: 'Товар 8', categoryId:3},
    {productId:9, productName: 'Товар 9', categoryId:4},
    {productId:10, productName: 'Товар 10', categoryId:5},
    {productId:11, productName: 'Товар 11', categoryId:1},
    {productId:12, productName: 'Товар 12', categoryId:2},
    {productId:13, productName: 'Товар 13', categoryId:3},
    {productId:14, productName: 'Товар 14', categoryId:4},
    {productId:15, productName: 'Товар 15', categoryId:5},
    {productId:16, productName: 'Товар 16', categoryId:1},
    {productId:17, productName: 'Товар 17', categoryId:2},
    {productId:18, productName: 'Товар 18', categoryId:3},
    {productId:19, productName: 'Товар 19', categoryId:4},
    {productId:20, productName: 'Товар 20', categoryId:5},
    {productId:21, productName: 'Товар 21', categoryId:1},
    {productId:22, productName: 'Товар 22', categoryId:2},
    {productId:23, productName: 'Товар 23', categoryId:3},
    {productId:24, productName: 'Товар 24', categoryId:4},
    {productId:25, productName: 'Товар 25', categoryId:5}
];
var categories = [
    {categoryId:1, categoryName: 'Футболки'},
    {categoryId:2, categoryName: 'Майки'},
    {categoryId:3, categoryName: 'Носки'},
    {categoryId:4, categoryName: 'Джинсы'},
    {categoryId:5, categoryName: 'Брюки'},
];
