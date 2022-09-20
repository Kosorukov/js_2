const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'src="https://loremflickr.com/150/250/Notebook"'},
    {id: 2, title: 'Mouse', price: 20, img: 'src=https://loremflickr.com/150/250/Mouse"'},
    {id: 3, title: 'Keyboard', price: 200, img: 'src="https://loremflickr.com/150/250/Keyboard"'},
    {id: 4, title: 'Gamepad', price: 50, img: 'src="https://loremflickr.com/150/250/Gamepad"'},
    {id: 5, title: 'Gamepad', price: 55, img: 'src="https://loremflickr.com/150/250/Gamepad"'},
    {id: 6, title: 'Gamepad', price: 60, img: 'src="https://loremflickr.com/150/250/Gamepad"'},
    {id: 7, title: 'Notebook', price: 2000, img: 'src="https://loremflickr.com/150/250/Notebook"'},
    {id: 8, title: 'Mouse', price: 20, img: 'src=https://loremflickr.com/150/250/Mouse"'},
    {id: 9, title: 'Keyboard', price: 200, img: 'src="https://loremflickr.com/150/250/Keyboard"'},
    {id: 10, title: 'Gamepad', price: 50, img: 'src="https://loremflickr.com/150/250/Gamepad"'},
    {id: 11, title: 'Gamepad', price: 55, img: 'src="https://loremflickr.com/150/250/Gamepad"'},
    {id: 12, title: 'Gamepad', price: 60, img: 'src="https://loremflickr.com/150/250/Gamepad"'},

];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img ${item.img}>
                <h3>${item.title}</h3>
                <p>${item.price}$</p>
                <button class="buy-btn">Добавить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
    // document.querySelector('.products').innerHTML = productsList.join('');
    // про упрощение - незнаю на сколько корректно так делать
};

renderPage(products);