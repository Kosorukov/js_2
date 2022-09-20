// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50}
// ];
// //Функция для формирования верстки каждого товара
// const renderProduct = (product,img='https://via.placeholder.com/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}">
//                 <h3>${product.title}</h3>
//                 <p>${product.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products').innerHTML =
//         (list.map(product => renderProduct(product))).join('');
// };



// renderPage(products);

class ProductList  {
    constructor(catalog = '.products') {
        this.catalog = catalog;
        this.goods = [];
        this.addGoods(); //наполняем массив товаров при создании объекта класса
        this.renderCatalog(); //создаём карточки в html
    }

//Продумайте, какие методы понадобятся для работы с этими сущностями.

    addGoods(){
        this.goods = [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 200},
        {id: 4, title: 'Gamepad', price: 50}
    ]
    }
    
    renderCatalog(){
        const catalog = document.querySelector(this.catalog);
        for (let good of this.goods) {
            const product = new Product(good); 
            // теперь понял про практику обращения Учителя к методам Доктора
            catalog.insertAdjacentHTML('beforeend', product.renderProduct());
        }
    }

//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

    getSumAllGoods(){
        let totalPrice = 0;
        this.goods.forEach(good => totalPrice += Number(good.price));
        return totalPrice;
    }
}

class Product {
    constructor(product,img='https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    renderProduct(){
        return `<div class="product-item">
                 <img src="${this.img}">
                 <h3>${this.title}</h3>
                 <p>${this.price}</p>
                 <button class="buy-btn">Купить</button>
             </div>`
    }
}

let catalog = new ProductList();
console.log(catalog.getSumAllGoods());